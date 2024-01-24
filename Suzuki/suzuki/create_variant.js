import React, {  Component, useEffect, useState,setState, useMemo ,useCallback } from 'react';
import { Alert, Button, TextInput,View,Image,Modal,Text,Pressable,StatusBar,SafeAreaView,StyleSheet,navigation,FlatList,navigate,ScrollView } from 'react-native'
import { Link } from '@react-navigation/native';
import {DataTable} from 'react-native-paper';
import { Dropdown } from 'react-native-element-dropdown';






import 'react-native-gesture-handler';





const data = [
  { label: 'Gixer', value: 'Gixer' },
  { label: 'Burdman', value: 'Burdman' },

];


function create_variant( navigation)  {

  

    const [value, setValue] = useState(null);    //select value
    const [isFocus, setIsFocus] = useState(false);

    const [variant_name, setVariant_name] = useState('');
    const [ex_showroom_prise, setEx_showroom_prise] = useState('');
    const [on_road_prise, setOn_road_prise] = useState('');
    const [mattin, setMattin] = useState('');
    const [insurance, setInsurance] = useState('');
    const [rod_tax, setRod_tax] = useState('');
    const [guard, setGuard] = useState('');
    const [fotrest, setFotrest] = useState('');
    const [hypo, setHypo] = useState('');
    const [ex_warrenty, setEx_warrenty] = useState('');
    


   
  return(

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
        <Text style={{ fontSize:22,  fontWeight:"900",resizeMode: 'cover', color:'blue',marginLeft:70}}> Create Variant</Text>
    </View>


    <View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>
                <Text style={{fontWeight:600,fontSize:15,marginTop:0,color:'black',}}>
                Variant Name :</Text>
            </View>
            <TextInput style={{ borderColor: "gray",
        width: "100%",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,}}  placeholder="Enter Variant Name" placeholderTextColor='black'
        value={variant_name}
        onChangeText={(text)=>setVariant_name(text)} 
        />
  

    
  <View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>
            <Text style={{fontWeight:600,fontSize:15,marginTop:0,color:'black',}}>
           select Bike :</Text>
        </View>

    <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'white' ,color:'black',}]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          placeholderTextColor='black'
          itemTextStyle={styles.dropdowndata}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select bike' : '...'}
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
                <Text style={{fontWeight:600,fontSize:15,marginTop:0,color:'black',}}>
                Ex-Showroom Price :</Text>
            </View>
            <TextInput style={{ borderColor: "gray",color:'black',
        width: "100%",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,}} 
        value={ex_showroom_prise}
        onChangeText={(text)=>setEx_showroom_prise(text)} 
        />

<View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>
                <Text style={{fontWeight:600,fontSize:15,marginTop:0,color:'black',}}>
                On-Road Price :</Text>
            </View>
            <TextInput style={{ borderColor: "gray",color:'black',
        width: "100%",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,}} 
        value={on_road_prise}
        onChangeText={(text)=>setOn_road_prise(text)} 
        />

<View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>
                <Text style={{fontWeight:600,fontSize:15,marginTop:0,color:'black',}}>
                Mattin :</Text>
            </View>
            <TextInput style={{ borderColor: "gray",color:'black',
        width: "100%",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,}} 
        value={mattin}
        onChangeText={(text)=>setMattin(text)} 
        />

        
<View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>
                <Text style={{fontWeight:600,fontSize:15,marginTop:0,color:'black',}}>
                Insurance :</Text>
            </View>
            <TextInput style={{ borderColor: "gray",color:'black',
        width: "100%",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,}} 
        value={insurance}
        onChangeText={(text)=>setInsurance(text)}
        />

<View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>
                <Text style={{fontWeight:600,fontSize:15,marginTop:0,color:'black',}}>
                Rto Reg And Rod Tax :</Text>
            </View>
            <TextInput style={{ borderColor: "gray",color:'black',
        width: "100%",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,}} 
        value={rod_tax}
        onChangeText={(text)=>setRod_tax(text)}
        />

        
<View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>
                <Text style={{fontWeight:600,fontSize:15,marginTop:0,color:'black',}}>
                Guard :</Text>
            </View>
            <TextInput style={{ borderColor: "gray",color:'black',
        width: "100%",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,}} 
        value={guard}
        onChangeText={(text)=>setGuard(text)}
        />

                
<View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>
                <Text style={{fontWeight:600,fontSize:15,marginTop:0,color:'black',}}>
                Foatrest :</Text>
            </View>
            <TextInput style={{ borderColor: "gray",color:'black',
        width: "100%",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,}} 
        value={fotrest}
        onChangeText={(text)=>setFotrest(text)}
        />

<View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>
                <Text style={{fontWeight:600,fontSize:15,marginTop:0,color:'black',}}>
                Hypo. :</Text>
            </View>
            <TextInput style={{ borderColor: "gray",color:'black',
        width: "100%",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,}} 
        value={hypo}
        onChangeText={(text)=>setHypo(text)}
        />

        
<View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>
                <Text style={{fontWeight:600,fontSize:15,marginTop:0,color:'black',}}>
                Ex. Warranty :</Text>
            </View>
            <TextInput style={{ borderColor: "gray",color:'black',
        width: "100%",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,}} 
        value={ex_warrenty}
        onChangeText={(text)=>setEx_warrenty(text)}
        />
  
  
              <View style={{flexDirection:'row',marginTop:20}}>
             
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

      

  );


}
export default create_variant


const styles = StyleSheet.create({
    container: {
      padding: 15,
    },
    dropdowndata:{
      color: 'black'
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