// screens/UserListScreen.js
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import useFetchUsers from '../hooks/useFetchUsers';

export default function UserListScreen({ navigation }) {
  const { users, loading } = useFetchUsers();
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    setFilteredUsers(users);
  }, [users]);

  const handleSearch = (text) => {
    setSearch(text);
    const filtered = users.filter(user =>
      `${user.name.first} ${user.name.last}`.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('UserDetail', { user: item })}
    >
      <Text style={styles.name}>{item.name.first} {item.name.last}</Text>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#2196F3" />
        <Text style={{ marginTop: 10 }}>Loading users...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Users List</Text>
      <TextInput
        placeholder="Search users..."
        value={search}
        onChangeText={handleSearch}
        style={styles.searchInput}
      />
      <FlatList
        data={filteredUsers}
        keyExtractor={(item) => item.login.uuid}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 10,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2196F3',
    marginBottom: 10,
    textAlign: 'center',
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#2196F3',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  item: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  name: {
    fontSize: 18,
  },
});
