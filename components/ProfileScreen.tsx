import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const ProfileScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.avatar} />
      <Text style={styles.name}>John Doe</Text>
      <Text style={styles.stat}>Items Added: 42</Text>
      <Text style={styles.stat}>Most Frequent Category: Books</Text>
      <Text style={styles.stat}>Last Added: "The Great Gatsby"</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f8ff',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  stat: {
    fontSize: 18,
    marginTop: 5,
  },
});

export default ProfileScreen;
