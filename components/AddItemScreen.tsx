import React, { useState, useRef } from 'react';
import { StyleSheet, View, TextInput, Button, Text, FlatList, Alert, Animated } from 'react-native';

interface Item {
  id: string;
  value: string;
}

const AddItemScreen: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const fadeAnim = useRef(new Animated.Value(0)).current; 

  const handleAddItem = () => {
    if (inputValue.trim()) {
      const newItem: Item = { id: Date.now().toString(), value: inputValue };
      setItems(currentItems => [newItem, ...currentItems]);
      setInputValue('');
      Animated.timing(
        fadeAnim,
        {
          toValue: 1,
          duration: 500,
          useNativeDriver: true
        }
      ).start(() => fadeAnim.setValue(0)); // Reset animation
      Alert.alert('Item Added', `Item "${newItem.value}" has been added successfully.`);
    } else {
      Alert.alert('Empty Input', 'Please enter an item.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter an item"
        value={inputValue}
        onChangeText={setInputValue}
        placeholderTextColor="#aaa"
      />
      <Button title="Add Item" onPress={handleAddItem} color="#1e90ff" />
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Animated.View style={[styles.listItem, { opacity: fadeAnim }]}>
            <Text style={styles.itemText}>{item.value}</Text>
          </Animated.View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
  },
  input: {
    height: 50,
    width: '90%',
    borderColor: '#1e90ff',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 15,
    borderRadius: 25,
    fontSize: 16,
  },
  listItem: {
    padding: 20,
    marginTop: 10,
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
    width: '90%',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  itemText: {
    fontSize: 18,
  },
});

export default AddItemScreen;
