import React, { useState, useEffect } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useRoute } from '@react-navigation/native';

const test_page2 = () => {
  const route = useRoute();
  const [editedData, setEditedData] = useState('');
  const id = route.params.id; // Get the ID passed from the DisplayPage
  
  useEffect(() => {
    // Fetch data by ID from the API and update the 'editedData' state
    // You can use axios or fetch for this
    // Example data (replace with actual API call):
    const apiData = [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' },
    ];
    const item = apiData.find((item) => item.id === id);
    if (item) {
      setEditedData(item.name);
    }
  }, [id]);

  const handleUpdate = () => {
    // Send updated data to the API using PUT request
    // You can use axios or fetch for this
    // Example: Send editedData with the updated value to the API
    console.log('Data updated:', editedData);
  };

  return (
    <View>
      <TextInput
        value={editedData}
        onChangeText={setEditedData}
        placeholder="Edit data"
      />
      <Button title="Update" onPress={handleUpdate} />
    </View>
  );
};

export default test_page2;
