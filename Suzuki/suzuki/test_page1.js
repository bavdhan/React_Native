import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import test_page2 from './test_page2';

const test_page1 = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  
  useEffect(() => {
    // Fetch data from the API and update the 'data' state
    // You can use axios or fetch for this
    // Example data (replace with actual API call):
    const apiData = [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' },
    ];
    setData(apiData);
  }, []);

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Button
              title="Edit"
              onPress={() => navigation.navigate('test_page2', { id: item.id })}
            />
          </View>
        )}
      />
    </View>
  );
};

export default test_page1;
