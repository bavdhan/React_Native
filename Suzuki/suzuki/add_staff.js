import React, {  Component, useEffect, useState,setState, useMemo ,useCallback } from 'react';
import { Alert, Button, TextInput,View,Image,Modal,Text,Pressable,StatusBar,SafeAreaView,StyleSheet,navigation,FlatList,navigate,ScrollView } from 'react-native'
import { Link } from '@react-navigation/native';
import {DataTable} from 'react-native-paper';
import { Dropdown } from 'react-native-element-dropdown';

import ImagePicker from 'react-native-image-crop-picker';



const data = [
    { label: 'Office Staff', value: 'Office Staff' },
    { label: 'Sales Exicutive', value: 'Sales Exicutive' },
  
  ];

function add_staff( navigation){

    
    const [value, setValue] = useState(null);    // staff type
    const [isFocus, setIsFocus] = useState(false);

    const [full_name, setFull_name] = useState('');
    const [mobile, setMobile] = useState('');
    const [email_id, setEmail_id] = useState('');
    const [password, setPassword] = useState('');
    

    return (
    <ScrollView>
    <View style={{ padding:10 }}>
      <View style={{ backgroundColor:'white'}}>
       




<View style={{margin:10,padding:10}}>
<View style={{borderColor:'', borderWidth: 2, backgroundColor:'white',
      shadowColor: '#171717',
      shadowOffset: {width:110, height: 40},
      shadowOpacity: 14,
      shadowRadius: 12,padding:20}}>

<View style={{borderColor:'', borderWidth: 0, backgroundColor:'',
      shadowColor: '',}}>
  <Text style={{ fontSize:22,  fontWeight:"900",resizeMode: 'cover', color:'blue',marginLeft:70}}> Add Staff</Text>
</View>



<View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>
          <Text style={{fontWeight:600,fontSize:15,marginTop:0,color: 'black',}}>
          Full name  :</Text>
      </View>
      <TextInput style={{ borderColor: "gray",color: 'black',
  width: "100%",
  borderWidth: 1,
  borderRadius: 10,
  padding: 10,}} 
  value={full_name}
  onChangeText={(text)=>setFull_name(text)} 
  />





<View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>
      <Text style={{fontWeight:600,fontSize:15,marginTop:0,color: 'black',}}>
      Staff type :</Text>
  </View>

<Dropdown
    style={[styles.dropdown, isFocus && { borderColor: 'white',color: 'black', }]}
    placeholderStyle={styles.placeholderStyle}
    selectedTextStyle={styles.selectedTextStyle}
    placeholderTextColor='black'
    itemTextStyle={styles.dropdowndata}
    inputSearchStyle={styles.inputSearchStyle}
    iconStyle={styles.iconStyle}
    data={data}
    search
    maxHeight={300}
    labelField="label"
    valueField="value"
    placeholder={!isFocus ? 'Select Staff type' : '...'}
    searchPlaceholder="Search..."
    value={value}
    onFocus={() => setIsFocus(true)}
    onBlur={() => setIsFocus(false)}
    onChange={item => {
      setValue(item.value);
      setIsFocus(false);
    }}
   
  />




<View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>
          <Text style={{fontWeight:600,fontSize:15,marginTop:0,color: 'black',}}>
          Mobile :</Text>
      </View>
      <TextInput style={{ borderColor: "gray",color: 'black',
  width: "100%",
  borderWidth: 1,
  borderRadius: 10,
  padding: 10,}} 
  value={mobile}
  onChangeText={(text)=>setMobile(text)} 
  />






<View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>
          <Text style={{fontWeight:600,fontSize:15,marginTop:0,color: 'black',}}>
          Email id :</Text>
      </View>
      <TextInput style={{ borderColor: "gray",color: 'black',
  width: "100%",
  borderWidth: 1,
  borderRadius: 10,
  padding: 10,}} 
  value={email_id}
  onChangeText={(text)=>setEmail_id(text)} 
  />

  
<View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>
          <Text style={{fontWeight:600,fontSize:15,marginTop:0,color: 'black',}}>
          Password:</Text>
      </View>
      <TextInput style={{ borderColor: "gray",color: 'black',
  width: "100%",
  borderWidth: 1,
  borderRadius: 10,
  padding: 10,}}  
  value={password}
  onChangeText={(text)=>setPassword(text)} 
  />

  

<Text style={{fontWeight:600,fontSize:15,marginTop:0,color: 'black',}}>
          </Text>

        
      <Button title="Save" />
     

      </View>
</View>

        
        </View>


    </View>
    </ScrollView>
  )
}

export default add_staff



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
      color: 'black',
      fontWeight: 'bold',
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
    dropdowndata:{
      color: 'black',
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
    placeholderStyle: {
      fontSize: 16,
      color: 'black'
    },
    selectedTextStyle: {
      fontSize: 16,
      color: 'black'
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
  
