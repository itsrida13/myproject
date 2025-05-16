import React, { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  Text,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import { supabase } from '../lib/supabase';

export default function SignUpScreen({ navigation }) {
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [nationality, setNationality] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const validateInputs = () => {
    if (!firstName || !lastName || !email || !password) {
      setErrorMsg('Please fill in all required fields.');
      return false;
    }
    return true;
  };

  const handleSignUp = async () => {
    if (!validateInputs()) return;

    setLoading(true);
    setErrorMsg('');

    try {
      const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
        email: email.trim(),
        password,
      });

      if (signUpError) {
        console.error('SignUp Error:', signUpError.message);
        setErrorMsg(signUpError.message);
        setLoading(false);
        return;
      }

      const user = signUpData?.user;

      if (user) {
        console.log('Signed up with user ID:', user.id);

        const { error: insertError } = await supabase.from('users').insert([
          {
            user_id: user.id, // RLS check: must match auth.uid()
            first_name: firstName,
            middle_name: middleName,
            last_name: lastName,
            phone,
            nationality,
            country,
            city,
            address,
            email,
          },
        ]);

        if (insertError) {
          console.error('Insert Error:', insertError.message);
          setErrorMsg(insertError.message);
        } else {
          Alert.alert('Success', 'Account created successfully!');
          navigation.navigate('Login');
        }
      }
    } catch (err) {
      console.error('Unexpected Error:', err.message);
      setErrorMsg('Unexpected error occurred. Please try again.');
    }

    setLoading(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput placeholder="First Name*" value={firstName} onChangeText={setFirstName} style={styles.input} />
      <TextInput placeholder="Middle Name" value={middleName} onChangeText={setMiddleName} style={styles.input} />
      <TextInput placeholder="Last Name*" value={lastName} onChangeText={setLastName} style={styles.input} />
      <TextInput placeholder="Phone" value={phone} onChangeText={setPhone} style={styles.input} keyboardType="phone-pad" />
      <TextInput placeholder="Nationality" value={nationality} onChangeText={setNationality} style={styles.input} />
      <TextInput placeholder="Country" value={country} onChangeText={setCountry} style={styles.input} />
      <TextInput placeholder="City" value={city} onChangeText={setCity} style={styles.input} />
      <TextInput placeholder="Address" value={address} onChangeText={setAddress} style={styles.input} />
      <TextInput placeholder="Email*" value={email} onChangeText={setEmail} style={styles.input} keyboardType="email-address" autoCapitalize="none" />
      <TextInput placeholder="Password*" value={password} onChangeText={setPassword} style={styles.input} secureTextEntry />

      {errorMsg ? <Text style={styles.error}>{errorMsg}</Text> : null}

      {loading ? (
        <ActivityIndicator size="large" color="#000" />
      ) : (
        <Button title="Sign Up" onPress={handleSignUp} />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 60,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'center',
  },
  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
  },
  error: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },
});
