import React, {  Component, useEffect, useState,setState, useMemo ,useCallback } from 'react';
import { Alert, Button, TextInput,View,Image,Modal,Text,Pressable,StatusBar,SafeAreaView,StyleSheet,navigation,FlatList,navigate,ScrollView } from 'react-native'
import { Link } from '@react-navigation/native';
import {DataTable} from 'react-native-paper';
import 'react-native-gesture-handler';

import createenquiry from './createenquiry';
import leadFollowup from './leadFollowup';



function proffesion( navigation)  {

    const [showModal, setShowModal] = useState(false);

    const [profession_name, setProfession_name] = useState('');
   

  return(
    <ScrollView>

<Modal
          animationType={'slide'}
          transparent={true}
          visible={showModal}
        
          onRequestClose={() => {
            console.log('Modal has been closed.');
          }}>
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
        <Text style={{ fontSize:20,  fontWeight:"900",resizeMode: 'cover', color:'blue',marginLeft:30}}> Add New Profession</Text>
    </View>


    <View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>
                <Text style={{fontWeight:600,fontSize:15,marginTop:0,color:'black',}}>
                Profession name* * :</Text>
            </View>
            <TextInput style={{ borderColor: "gray",color:'black',
        width: "100%",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,}}  placeholder="Enter Profession name" placeholderTextColor='black' 
        value={profession_name}
        onChangeText={(text)=>setProfession_name(text)} 
        />
  



  
              <View style={{flexDirection:'row',marginTop:20}}>
              <Button
              title="Back"
              onPress={() => {
                setShowModal(!showModal);
              }}
            />
            <Text style={{marginLeft:140, }} ></Text>

            <Button
              title="Save"
            />
           
            </View>


            </View>
   </View>
  
              
              </View>


          </View>
          </ScrollView>

        </Modal>



<View style={{ flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:10}}>
  <Text style={{ fontWeight:700,fontSize:20,marginTop:0,color:'black', }}>Professions</Text>
  </View>


<View style={{flexDirection:'row'}}>







<View style={{marginLeft: 20,marginTop:20 , borderColor:'blue', borderWidth: 2,paddingTop:10,paddingBottom:10,paddingLeft:10,
            shadowColor: '#00cccd',
            shadowOffset: {width:60, height: 40},
            shadowOpacity: 14,
            backgroundColor:'#00cccd',
            width: 120,
            shadowRadius: 12,}}>
 <Text style={{fontSize:12,  fontWeight:"600",resizeMode: 'cover', color:'white'}}  onPress={() => {
      setShowModal(!showModal);
    }} > 🚀 Create New</Text>
</View>







 <View style={{marginLeft: 20,marginTop:20 , borderColor:'blue', borderWidth: 2,paddingTop:10,paddingBottom:10,paddingLeft:10,
            shadowColor: '#171717',
            shadowOffset: {width:60, height: 40},
            shadowOpacity: 14,
            backgroundColor:'#0a0c37',
            width: 120,
            shadowRadius: 12,}}>
 <Text style={{fontSize:12,  fontWeight:"600",resizeMode: 'cover', color:'white'}}  onPress={() => {
  
}} > Bulk Uplode 👇</Text>
</View>
</View>
   
  <ScrollView
  horizontal={true}
  >
<DataTable style={styles.container}>
      <DataTable.Header style={styles.tableHeader}>
        <DataTable.Title style = {{marginRight:0,marginLeft:0}}>Charges</DataTable.Title>
        <DataTable.Title style = {{marginRight:0,marginLeft:0}}>Delete</DataTable.Title>
       
      </DataTable.Header>



      <DataTable.Row>
        <DataTable.Cell  style={{}}> Teacher  </DataTable.Cell>
        <DataTable.Cell  style = {{ marginLeft:70 ,marginRight:70}}> 	 <Text style={{fontSize:15,
        fontWeight:"600", color:'red'}}
        >    Delete </Text> </DataTable.Cell>
      
      </DataTable.Row>



  
    

     


      </DataTable>
</ScrollView>





</ScrollView>
  );


}
export default proffesion


const styles = StyleSheet.create({
    container: {
      padding: 15,
    },
    tableHeader: {
      backgroundColor: '#DCDCDC',
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
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
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