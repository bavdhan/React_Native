import React, {  Component, useEffect, useState,setState, useMemo ,useCallback } from 'react';
import { Alert, Button, TextInput,View,Image,Modal,Text,Pressable,StatusBar,SafeAreaView,StyleSheet,navigation,FlatList,navigate,ScrollView } from 'react-native'
import { Link } from '@react-navigation/native';
import {DataTable} from 'react-native-paper';
import { Dropdown } from 'react-native-element-dropdown';

import ImagePicker from 'react-native-image-crop-picker';



import 'react-native-gesture-handler';

import createenquiry from './createenquiry';
import leadFollowup from './leadFollowup';



const data = [
  { label: 'Scooter', value: 'Scooter' },
  { label: 'Motorcycle', value: 'Motorcycle' },

];


function catagoriesModel( navigation)  {

    const [showModal, setShowModal] = useState(false);

    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    


    // uplode img button 1 start
    const [imageSource, setImageSource] = useState(null);

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

       // uplode img button 2 start
       const [imageSource2, setImageSource2] = useState(null);

       const selectImage2 = () => {
         ImagePicker.openPicker({
           width: 300,
           height: 400,
           cropping: true,
         }).then((image2) => {
           const source = { uri: image2.path };
           setImageSource2(source);
         }).catch((error) => {
           console.log('ImagePicker Error: ', error);
         });
       };
   
       // uplode img button 2 end


          // uplode borocher button 3 start
          const [imageSource3, setImageSource3] = useState(null);

          const selectImage3 = () => {
            ImagePicker.openPicker({
              width: 300,
              height: 400,
              cropping: true,
            }).then((image3) => {
              const source = { uri: image3.path };
              setImageSource3(source);
            }).catch((error) => {
              console.log('ImagePicker Error: ', error);
            });
          };
      
          // uplode img broucher 3 end



  

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
        <Text style={{ fontSize:22,  fontWeight:"900",resizeMode: 'cover', color:'blue',marginLeft:70}}> Create Models</Text>
    </View>


    <View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>
                <Text style={{fontWeight:600,fontSize:15,marginTop:0,}}>
                Models name* :</Text>
            </View>
            <TextInput style={{ borderColor: "gray",
        width: "100%",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,}}  placeholder="Enter Models name" />
  

    
  <View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>
            <Text style={{fontWeight:600,fontSize:15,marginTop:0,}}>
            Category * :</Text>
        </View>

    <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'white' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select Category' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
         
        />

<View style={{ flex: 1,
    justifyContent: 'center',
    alignItems: 'center',}}>
      <Text style={{fontSize: 16,
    marginBottom: 10,}}>Models logo</Text>
      {imageSource && <Image source={imageSource} style={{width: 200,
    height: 200,
    resizeMode: 'contain',
    marginTop: 20,
    marginBottom:10}} />}
      <Button title=" uplode Models logo" onPress={selectImage} />
    </View>


    <View style={{ flex: 1,
    justifyContent: 'center',
    alignItems: 'center',}}>
      <Text style={{fontSize: 16,
    marginBottom: 10,}}>Models campaign image</Text>
      {imageSource2 && <Image source={imageSource2} style={{width: 200,
    height: 200,
    resizeMode: 'contain',
    marginTop: 20,
    marginBottom:10}} />}
      <Button title=" uplode Models campaign image" onPress={selectImage2} />
    </View>

    <View style={{ flex: 1,
    justifyContent: 'center',
    alignItems: 'center', marginTop:20}}>
      <Button title=" uplode Brochure file" onPress={selectImage3} />
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
  <Text style={{ fontWeight:700,fontSize:20,marginTop:0, }}>Selected model</Text>
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
        <DataTable.Title style = {{marginRight:0,marginLeft:0}}>Models Logo</DataTable.Title>
        <DataTable.Title style = {{marginRight:0,marginLeft:0}}>Models Name</DataTable.Title>
        <DataTable.Title style = {{marginRight:0,marginLeft:0}}>Category</DataTable.Title>
        <DataTable.Title style = {{marginRight:0,marginLeft:0}}>Variants</DataTable.Title>
        <DataTable.Title style = {{marginRight:0,marginLeft:0}}>Delete</DataTable.Title>
       
      </DataTable.Header>



      <DataTable.Row>
      <Image source = {{uri:'https://lodhaofficial.in/static/suzukilogo.png'}}
   style = {{  height:40,width:40,}}
   />
        <DataTable.Cell  style={{ marginLeft:40 ,}}>  </DataTable.Cell>
        <DataTable.Cell  style={{ marginLeft:70 ,}}> Gixxer Sf  </DataTable.Cell>
        <DataTable.Cell  style={{ marginLeft:70 ,}}> Motorcycle  </DataTable.Cell>
        <DataTable.Cell  style={{marginLeft:30}}> 
        
        <Link to={{ screen: '', params: { id: '' } }}  style={{}}>
        <Text style={{fontSize:15,
        fontWeight:"600", color:'orange'}}
        >    Variant </Text>  
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
export default catagoriesModel


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