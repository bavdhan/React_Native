import React, {  Component, useEffect, useState,setState, useMemo ,useCallback } from 'react';
import { Alert, Button, TextInput,View,Image,Modal,Text,Pressable,StatusBar,SafeAreaView,StyleSheet,navigation,FlatList,navigate,ScrollView } from 'react-native'
import { Link } from '@react-navigation/native';
import {DataTable} from 'react-native-paper';
import { Dropdown } from 'react-native-element-dropdown';

import ImagePicker from 'react-native-image-crop-picker';



import 'react-native-gesture-handler';

import createenquiry from './createenquiry';
import leadFollowup from './leadFollowup';
import catagoriesModel from './catagoriesModel';






function catagories( navigation)  {

    const [showModal, setShowModal] = useState(false);

    const [catagories_name, setCatagories_name] = useState('');
    const [discription, setDiscription] = useState('');

    const [imageSource, setImageSource] = useState(null);     // img

    


    // uplode img button 1 start


    const selectImage = () => {
      ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
      }).then((image) => {
        const source = { uri: image.path };
        setImageSource(source);
      }).catch((error) => {
        console.log('ImagePicker Error: ', error);
      });
    };

    // uplode img button 1 end

    

       

  

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
        <Text style={{ fontSize:22,  fontWeight:"900",resizeMode: 'cover', color:'blue',marginLeft:40}}> Create Suzuki Category</Text>
    </View>


    <View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>
                <Text style={{fontWeight:600,fontSize:15,marginTop:0,color:'black',}}>
                Bike category name* :</Text>
            </View>
            <TextInput style={{ borderColor: "gray",color:'black',
        width: "100%",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,}}  placeholder="Enter category name"  placeholderTextColor='black' 
        value={catagories_name}
        onChangeText={(text)=>setCatagories_name(text)} 
        />


<View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>
                <Text style={{fontWeight:600,fontSize:15,marginTop:0,color:'black',}}>
                Description :</Text>
            </View>
            <TextInput style={{ borderColor: "gray",color:'black',
        width: "100%",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,}} 
        value={discription}
        onChangeText={(text)=>setDiscription(text)} 
        />
  

  

<View style={{ flex: 1,
    justifyContent: 'center',
    alignItems: 'center',}}>
      <Text style={{fontSize: 16,
    marginBottom: 10,color:'black',}}>selected img</Text>
      {imageSource && <Image source={imageSource} style={{width: 200,
    height: 200,
    resizeMode: 'contain',
    marginTop: 20,
    marginBottom:10}} />}
      <Button title=" uplode Image" onPress={selectImage} />
    </View>


  

  
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
  <Text style={{ fontWeight:700,fontSize:20,marginTop:0,color:'black', }}>Bike Categories </Text>
  </View>


<View style={{flexDirection:'row'}}>



<View style={{marginLeft: 20,marginTop:20 , borderColor:'blue', borderWidth: 2,paddingTop:10,paddingBottom:10,paddingLeft:10,
                shadowColor: '#171717',
                shadowOffset: {width:110, height: 40},
                shadowOpacity: 14,
                backgroundColor:'#0a0c37',
                width: 120,
                shadowRadius: 12,}}>
     <Text style={{fontSize:12,  fontWeight:"600",resizeMode: 'cover', color:'white'}}  onPress={() => {
      setShowModal(!showModal);
    }} > 🚀 Create New </Text>
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
        <DataTable.Title style = {{marginRight:0,marginLeft:0}}>Category Image</DataTable.Title>
        <DataTable.Title style = {{marginRight:0,marginLeft:0}}>Category Name</DataTable.Title>
        <DataTable.Title style = {{marginRight:0,marginLeft:0}}>Models</DataTable.Title>
        <DataTable.Title style = {{marginRight:0,marginLeft:0}}>Edit</DataTable.Title>
        <DataTable.Title style = {{marginRight:0,marginLeft:0}}>Delete</DataTable.Title>
       
      </DataTable.Header>



      <DataTable.Row>
      <Image source = {{uri:'https://lodhaofficial.in/static/suzukilogo.png'}}
   style = {{  height:40,width:40,}}
   />
        <DataTable.Cell  style={{ marginLeft:40 ,}}>  </DataTable.Cell>
        <DataTable.Cell  style={{ marginLeft:70 ,}}> BIG BIKES  </DataTable.Cell>
        <DataTable.Cell  style={{ marginLeft:70 ,}}> <Link to={{ screen: 'catagoriesModel', params: { id: 'catagoriesModel' } }}  style={{}}>
        <Text style={{fontSize:15,
        fontWeight:"600", color:'yellow'}}
        >    Model </Text>  
        </Link>  </DataTable.Cell>


        <DataTable.Cell  style={{marginLeft:30}}> 
        
        <Link to={{ screen: '', params: { id: '' } }}  style={{}}>
        <Text style={{fontSize:15,
        fontWeight:"600", color:'orange'}}
        >    Edit </Text>  
        </Link>
        </DataTable.Cell>

        <DataTable.Cell  style = {{ marginLeft:70 ,marginRight:70}}> 	 <Text style={{fontSize:15,
        fontWeight:"600", color:'red'}}
        >    Delete </Text> </DataTable.Cell>
      
      </DataTable.Row>



      </DataTable>
</ScrollView>





</ScrollView>
  );


}
export default catagories


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