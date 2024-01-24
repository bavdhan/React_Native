import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const data = [
  { id: '1', menuName: 'Special Menu 1', coupon: 'This food use coupon 1' },
  { id: '2', menuName: 'Special Menu 2', coupon: 'This food use coupon 2' },
];





const specialmenu = () => {


  
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.leftColumn}>
        <Text style={styles.menuName}>{item.menuName}</Text>
      </View>
      <View style={styles.rightColumn}>
        <Text style={styles.coupon}>{item.coupon}</Text>
        <TouchableOpacity
          style={styles.redeemButton}
          onPress={() => handleRedeemPress(item.menuName)}
        >
          <Text style={styles.redeemButtonText}>use Coupon</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const handleRedeemPress = (menuName) => {
    Alert.alert(
      'Confirmation',
      `Do you want to redeem ${menuName}?`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        { text: 'OK', onPress: () => redeemItem(menuName) },
      ],
      { cancelable: false }
    );
  };

  const redeemItem = (menuName) => {
  
    Alert.alert('Success', `${menuName} redeemed successfully!`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Today's Special</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        style={styles.flatList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  flatList: {
    borderWidth: 1, 
    borderColor: 'black',
    borderRadius: 5,
    padding:20
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center', 
    marginBottom: 16,
    color:'red'
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 12,
  },
  leftColumn: {
    flex: 1,
    paddingRight: 8,
  },
  rightColumn: {
    flex: 1,
    paddingLeft: 8,
  },
  menuName: {
    fontSize: 16,
    fontWeight: 'bold',
    color:'black'
  },
  coupon: {
    fontSize: 14,
    marginBottom: 8,
    color:'black'
  },
  redeemButton: {
    backgroundColor: '#007BFF',
    padding: 8,
    borderRadius: 5,
  },
  redeemButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default specialmenu;
