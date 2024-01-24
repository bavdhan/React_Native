import React, {  Component, useEffect, useState,setState, useMemo ,useCallback } from 'react';
import { Alert, Button, TouchableOpacity,TextInput,View,Image,Modal,Text,Pressable,StatusBar,SafeAreaView,StyleSheet,navigation,FlatList,navigate,ScrollView } from 'react-native'
import { Link } from '@react-navigation/native';
import { Dropdown } from 'react-native-element-dropdown';


import 'react-native-gesture-handler';
import add_staff from './add_staff';







const officeStaff = () => {

 


  return (

    <ScrollView>







<View style={{ flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:20 , marginBottom:10}}>
  <Text style={{ fontWeight:700,fontSize:22,marginTop:0,color: 'black',  }}>office Staff</Text>
  </View>

  <View style={{flexDirection:'row', marginBottom:10}}>




  <Link to={{ screen: 'add_staff', params: { id: 'add_staff' } }}  style={{marginLeft: 20,marginTop:20 , borderColor:'blue', borderWidth: 2,paddingTop:10,paddingBottom:10,paddingLeft:10,
            shadowColor: '#00cccd',
            shadowOffset: {width:60, height: 40},
            shadowOpacity: 14,
            backgroundColor:'#00cccd',
            width: 120,
            shadowRadius: 12,}}>

 <Text style={{fontSize:12,  fontWeight:"600",resizeMode: 'cover', color:'white'}} > 🚀 Add Staff</Text>
     
    </Link>


</View>


    
    <ScrollView horizontal={true}>




      <View style={styles.table}>
        <View style={styles.row}>
          <Text style={styles.header}>Staff Name</Text>
          <Text style={styles.header}>Staff Type	</Text>
          <Text style={styles.header}>Mobile	</Text>
          <Text style={styles.header}>Email Id	</Text>
          <Text style={styles.header}>Password</Text>
          <Text style={styles.header}>last login </Text>
          <Text style={styles.header}>Edit	</Text>
          <Text style={styles.header}>Delete</Text>
        </View>

      
        <View style={styles.row}>
          <Text style={styles.cell}>Ruturaj Jadhav </Text>
          <Text style={styles.cell}>Sales_executive	 </Text>
          <Text style={styles.cell}> 7507687778</Text>
          <Text style={styles.cell}> jadhavruturaj84@gmail.com</Text>
          <Text style={styles.cell}> 123123 </Text>
          <Text style={styles.cell}> Sept. 27, 2023, 6:39 p.m.</Text>
          <Text style={styles.cell}> <TouchableOpacity onPress={() => handleEdit(1)}>
              <Text style={styles.editButton}>Edit</Text>
            </TouchableOpacity> </Text>
          <Text style={styles.cell}>  <TouchableOpacity onPress={() => handleDelete(1)}>
              <Text style={styles.deleteButton}>Delete</Text>
            </TouchableOpacity> </Text>



        
        </View>

  

       
       



      </View>
    </ScrollView>
    </ScrollView>
  );
};


const handleEdit = (rowIndex) => {
  console.log(`Edit row ${rowIndex}`);
};

const handleDelete = (rowIndex) => {
  console.log(`Delete row ${rowIndex}`);
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
    fontWeight: 'bold',
    color: 'black', 
    fontSize:16,
    textAlign: 'center',
    width:200
  },
  cell: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#000',
    color: 'black', 
    padding: 8,
    textAlign: 'center',
    width:200
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
    color: 'black', 
  },
  selectedTextStyle: {
    fontSize: 16,
    color: 'black', 
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  actions: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
    padding: 8,
  },
  editButton: {
    color: 'blue',
  },
  deleteButton: {
    color: 'red',
  },
});

export default officeStaff;
