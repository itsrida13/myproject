// screens/HomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to user's info app!</Text>
      <Button
        title="User's Data"
        onPress={() => navigation.navigate('UserList')}
        color="#000"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2196F3',
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
  },
});
