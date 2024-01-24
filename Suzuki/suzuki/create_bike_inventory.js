import React, {  Component, useEffect, useState,setState, useMemo ,useCallback } from 'react';
import { Alert, Button, TouchableOpacity,TextInput,View,Image,Modal,Text,Pressable,StatusBar,SafeAreaView,StyleSheet,navigation,FlatList,navigate,ScrollView } from 'react-native'
import { Link } from '@react-navigation/native';
import { Dropdown } from 'react-native-element-dropdown';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Checkbox } from 'react-native-paper';


import 'react-native-gesture-handler';




const data = [
    { label: 'Gixer', value: 'Gixer' },
    { label: 'Burdman', value: 'Burdman' },
  
  ];

  const data2 = [
    { label: 'Gixer', value: 'Gixer' },
    { label: 'Burdman', value: 'Burdman' },
  
  ];

  const data3 = [
    { label: 'Gixer', value: 'Gixer' },
    { label: 'Burdman', value: 'Burdman' },
  
  ];
  
const create_bike_inventory = () => {

    
    const [value, setValue] = useState(null);    // bike
    const [isFocus, setIsFocus] = useState(false);

    const [value2, setValue2] = useState(null);    // bike variant
    const [isFocus2, setIsFocus2] = useState(false);

    const [value3, setValue3] = useState(null);    // bike colour
    const [isFocus3, setIsFocus3] = useState(false);


    const [vsl_no, setVsl_no] = useState('');
    const [mu_number, setMu_number] = useState('');
    const [chassis_no, setChassis_no] = useState('');
    const [engine_no, setEngine_no] = useState('');
    const [key_no, setKey_no] = useState('');
    const [battary_make, setBattary_make] = useState('');
    const [battary_no, setBattary_no] = useState('');
    const [fr, setFr] = useState('');
    const [pr, setPr] = useState('');
    const [location, setLocation] = useState('');

    

    // check box end
    const [checked, setChecked] = React.useState(false);   //   is sold value


    // date picker 1 start
    const [selectedDate2 , setSelectedDate2]= useState('Selected Date')     //  manufacturing date


    const [isDatePickerVisible2, setDatePickerVisibility2] = useState(false);


    const showDatePicker2 = () => {
      setDatePickerVisibility2(true);
    };
  
    const hideDatePicker2 = () => {
      setDatePickerVisibility2(false);
    };
  
    const handleDateConfirm2 = (date2) => {
      console.warn("A date has been picked: ", date2);
      const dt = new Date(date2);
      const x = dt.toISOString().split('T');
      const x1 = x[0].split("-");
      console.log(x1[2] +'/' + x1[1] + '/' + x1[0]);
      setSelectedDate2(x1[2] +'/' + x1[1] + '/' + x1[0]);
      hideDatePicker2();
    };




    // date picker 1 end

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
        <Text style={{ fontSize:18,  fontWeight:"900",resizeMode: 'cover', color:'blue',marginLeft:20}}> Create Suzuki Bike Inventory</Text>
    </View>



    <View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>
                <Text style={{fontWeight:600,fontSize:15,marginTop:0,color:'black',}}>
                Vsl no :</Text>
            </View>
            <TextInput style={{ borderColor: "gray",color:'black',
        width: "100%",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,}} 
        value={vsl_no}
        onChangeText={(text)=>setVsl_no(text)} 
        />

    
  <View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>
            <Text style={{fontWeight:600,fontSize:15,marginTop:0,color:'black',}}>
            Bike :</Text>
        </View>

    <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'white',color:'black', }]}
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
            Bike Variant :</Text>
        </View>

    <Dropdown
          style={[styles.dropdown, isFocus2 && { borderColor: 'white',color:'black', }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          placeholderTextColor='black'
          itemTextStyle={styles.dropdowndata}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data2}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus2 ? 'Select Bike Variant' : '...'}
          searchPlaceholder="Search..."
          value={value2}
          onFocus={() => setIsFocus2(true)}
          onBlur={() => setIsFocus2(false)}
          onChange={item => {
            setValue2(item.value);
            setIsFocus2(false);
          }}
         
        />

         


<View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>
            <Text style={{fontWeight:600,fontSize:15,marginTop:0,color:'black',}}>
            Bike Color :</Text>
        </View>

    <Dropdown
          style={[styles.dropdown, isFocus3 && { borderColor: 'white',color:'black', }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          placeholderTextColor='black'
          itemTextStyle={styles.dropdowndata}
          iconStyle={styles.iconStyle}
          data={data3}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus3 ? 'Select Bike Color' : '...'}
          searchPlaceholder="Search..."
          value={value3}
          onFocus={() => setIsFocus3(true)}
          onBlur={() => setIsFocus3(false)}
          onChange={item => {
            setValue3(item.value);
            setIsFocus3(false);
          }}
         
        />

            





<View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>
                <Text style={{fontWeight:600,fontSize:15,marginTop:0,color:'black',}}>
                MU No :</Text>
            </View>
            <TextInput style={{ borderColor: "gray",color:'black',
        width: "100%",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,}} 
        value={mu_number}
        onChangeText={(text)=>setMu_number(text)} 
        />





<TouchableOpacity onPress={()=>{
  showDatePicker2()
}}>
<View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>


            <Text style={{fontWeight:600,fontSize:15,marginTop:0,color:'black',}}>
            Manufacturing Date:</Text>

          

        </View>
        <TextInput style={{ borderColor: "gray",color:'black',
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,}} 
    value={selectedDate2} />

      </TouchableOpacity>


      <DateTimePickerModal
        isVisible={isDatePickerVisible2}
        mode="date"
        onConfirm={handleDateConfirm2}
        onCancel={hideDatePicker2}
      />




<View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>
                <Text style={{fontWeight:600,fontSize:15,marginTop:0,color:'black',}}>
                Chassis No :</Text>
            </View>
            <TextInput style={{ borderColor: "gray",color:'black',
        width: "100%",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,}}  
        value={chassis_no}
        onChangeText={(text)=>setChassis_no(text)} 
        />


<View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>
                <Text style={{fontWeight:600,fontSize:15,marginTop:0,color:'black',}}>
                 Engine No :</Text>
            </View>
            <TextInput style={{ borderColor: "gray",color:'black',
        width: "100%",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,}} 
        value={engine_no}
        onChangeText={(text)=>setEngine_no(text)} 
        />

        
<View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>
                <Text style={{fontWeight:600,fontSize:15,marginTop:0,color:'black',}}>
                Key No :</Text>
            </View>
            <TextInput style={{ borderColor: "gray",color:'black',
        width: "100%",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,}}  
        value={key_no}
        onChangeText={(text)=>setKey_no(text)} 
        />

<View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>
                <Text style={{fontWeight:600,fontSize:15,marginTop:0,color:'black',}}>
                Battery Make :</Text>
            </View>
            <TextInput style={{ borderColor: "gray",color:'black',
        width: "100%",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,}} 
        value={battary_make}
        onChangeText={(text)=>setBattary_make(text)} 
        />

        
<View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>
                <Text style={{fontWeight:600,fontSize:15,marginTop:0,color:'black',}}>
                Battery No :</Text>
            </View>
            <TextInput style={{ borderColor: "gray",color:'black',
        width: "100%",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,}} 
        value={battary_no}
        onChangeText={(text)=>setBattary_no(text)} 
        />

                
<View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>
                <Text style={{fontWeight:600,fontSize:15,marginTop:0,color:'black',}}>
                FR :</Text>
            </View>
            <TextInput style={{ borderColor: "gray",color:'black',
        width: "100%",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,}} 
        value={fr}
        onChangeText={(text)=>setFr(text)} 
        />

<View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>
                <Text style={{fontWeight:600,fontSize:15,marginTop:0,color:'black',}}>
                PR :</Text>
            </View>
            <TextInput style={{ borderColor: "gray",color:'black',
        width: "100%",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,}} 
        value={pr}
        onChangeText={(text)=>setPr(text)} 
        />

  
<View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>
                <Text style={{fontWeight:600,fontSize:15,marginTop:0,color:'black',}}>
               Location :</Text>
            </View>
            <TextInput style={{ borderColor: "gray",color:'black',
        width: "100%",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,}} 
        value={location}
        onChangeText={(text)=>setLocation(text)} 
        />



<View style={{marginTop:20,flexDirection:'row',marginBottom:0}}>
<Checkbox
      status={checked ? 'checked' : 'unchecked'}
      color='black'
      onPress={() => {
        setChecked(!checked);
      }}
    />
    <Text style={{fontWeight:600,fontSize:15,marginTop:7,color:'black',}}> Is Sold</Text>
</View>

      

              <View style={{flexDirection:'row',marginTop:20}}>
            <Button title="Save" />
            </View>


            </View>
   </View>
  
              
              </View>


          </View>
          </ScrollView>
  )
}

export default create_bike_inventory



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