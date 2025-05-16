// screens/ThirdScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ThirdScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>You are now on the Third Screen!</Text>
      <Button
        title="Go Back to Home"
        onPress={() => navigation.navigate('Home')}
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

