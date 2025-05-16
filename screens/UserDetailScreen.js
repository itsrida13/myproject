// screens/UserDetailScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function UserDetailScreen({ route }) {
  const { user } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: user.picture.large }} style={styles.image} />
      <Text style={styles.name}>
        {user.name.first} {user.name.last}
      </Text>
      <Text style={styles.info}>Email: {user.email}</Text>
      <Text style={styles.info}>Phone: {user.phone}</Text>
      <Text style={styles.info}>City: {user.location.city}</Text>
      <Text style={styles.info}>Country: {user.location.country}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3F2FD',
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#2196F3',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0D47A1',
  },
  info: {
    fontSize: 18,
    marginTop: 8,
    color: '#333',
  },
});
