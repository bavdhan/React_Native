import React, {  Component, useEffect, useState,setState, useMemo ,useCallback } from 'react';
import { Alert, Button, TouchableOpacity,TextInput,View,Image,Modal,Text,Pressable,StatusBar,SafeAreaView,StyleSheet,navigation,FlatList,navigate,ScrollView } from 'react-native'
import { Link } from '@react-navigation/native';
import { Dropdown } from 'react-native-element-dropdown';
import DateTimePickerModal from "react-native-modal-datetime-picker";


import 'react-native-gesture-handler';
import create_bike_inventory from './create_bike_inventory';


const unsold_inventory = () => {



  return (

    <ScrollView>


<View style={{ flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:20 , marginBottom:10}}>
  <Text style={{ fontWeight:700,fontSize:22,marginTop:0,color:'black', }}>All Unsold Inventory / Stock</Text>
  </View>

  <View style={{flexDirection:'row', marginBottom:10}}>


  <Link to={{ screen: 'create_bike_inventory', params: { id: 'create_bike_inventory' } }}  style={{marginLeft: 20,marginTop:20 , borderColor:'blue', borderWidth: 2,paddingTop:10,paddingBottom:10,paddingLeft:10,
            shadowColor: '#00cccd',
            shadowOffset: {width:60, height: 40},
            shadowOpacity: 14,
            backgroundColor:'#00cccd',
            width: 120,
            shadowRadius: 12,}}>

 <Text style={{fontSize:12,  fontWeight:"600",resizeMode: 'cover', color:'white'}} > 🚀Create Invntory</Text>
     
    </Link>

   
  <Text style={{ fontWeight:700,fontSize:15,marginTop:0,color:'black',marginLeft: 50, }}>Total Unsold Inventory : 142</Text>
  


</View>


    
    <ScrollView horizontal={true}>




      <View style={styles.table}>
        <View style={styles.row}>
          <Text style={styles.header}>vsl no</Text>
          <Text style={styles.header}>bike</Text>
          <Text style={styles.header}>bike_varient	</Text>
          <Text style={styles.header}>bike_color	</Text>
          <Text style={styles.header}>mu_no	</Text>
          <Text style={styles.header}>mfg_date</Text>
          <Text style={styles.header}>chassis_no </Text>
          <Text style={styles.header}>engine_no	</Text>
          <Text style={styles.header}>key_no</Text>
          <Text style={styles.header}>battery_make </Text>
          <Text style={styles.header}>battery_no	</Text>
          <Text style={styles.header}>FR</Text>
          <Text style={styles.header}>PR </Text>
          <Text style={styles.header}>Edit</Text>
          <Text style={styles.header}>Delete </Text>
        </View>

      
        <View style={styles.row}>
          <Text style={styles.cell}> </Text>
          <Text style={styles.cell}> </Text>
          <Text style={styles.cell}> </Text>
          <Text style={styles.cell}> </Text>
          <Text style={styles.cell}> </Text>
          <Text style={styles.cell}> </Text>
          <Text style={styles.cell}> </Text>
          <Text style={styles.cell}> </Text>
          <Text style={styles.cell}> </Text>
          <Text style={styles.cell}> </Text>
          <Text style={styles.cell}> </Text>
          <Text style={styles.cell}> </Text>
          <Text style={styles.cell}> </Text>
          <Text style={styles.cell}> </Text>
          <Text style={styles.cell}> </Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.cell}> </Text>
          <Text style={styles.cell}> </Text>
          <Text style={styles.cell}> </Text>
          <Text style={styles.cell}> </Text>
          <Text style={styles.cell}> </Text>
          <Text style={styles.cell}> </Text>
          <Text style={styles.cell}> </Text>
          <Text style={styles.cell}> </Text>
          <Text style={styles.cell}> </Text>
          <Text style={styles.cell}> </Text>
          <Text style={styles.cell}> </Text>
          <Text style={styles.cell}> </Text>
          <Text style={styles.cell}> </Text>
          <Text style={styles.cell}> </Text>
          <Text style={styles.cell}> </Text>
        </View>

       
       



      </View>
    </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  table: {
    borderWidth: 1,
    borderColor: '#000',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
  },
  header: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#000',
    padding: 8,
    color:'black',
    fontWeight: 'bold',
    fontSize:16,
    textAlign: 'center',
    width:120
  },
  cell: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#000',
    color:'black',
    padding: 8,
    textAlign: 'center',
    width:120
  },
  container: {
    padding: 15,
  },

  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  dropdowndata:{
    color: 'black'
  },
  placeholderStyle: {
    fontSize: 16,
    color:'black',
  },
  selectedTextStyle: {
    fontSize: 16,
    color:'black',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

export default unsold_inventory;
