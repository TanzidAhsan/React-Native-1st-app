import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

const DetailsScreen: React.FC = () => {
  // Example details for a selected item, you could make this dynamic based on user interaction
  const itemDetails = {
    title: "The Great Gatsby",
    description: "A novel written by American author F. Scott Fitzgerald that follows a cast of characters living in the fictional towns of West Egg and East Egg on prosperous Long Island in the summer of 1922.",
    addedOn: "2023-09-15"
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>{itemDetails.title}</Text>
        <Text style={styles.cardContent}>{itemDetails.description}</Text>
        <Text style={styles.cardContent}>Added on: {itemDetails.addedOn}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    margin: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardContent: {
    fontSize: 16,
  },
});

export default DetailsScreen;
