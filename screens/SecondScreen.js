// screens/SecondScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function SecondScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>This is the Second Screen</Text>
      <Button
        title="Go to Third Screen"
        onPress={() => navigation.navigate('Third')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // White Background
  },
  title: {
    fontSize: 24,
    color: '#2196F3', // Blue Text
    marginBottom: 20,
  },
});
