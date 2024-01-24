import React, {  Component, useEffect, useState,setState, useMemo ,useCallback } from 'react';
import { Alert, Button, TextInput,View,TouchableOpacity,Modal,Text,Pressable,StatusBar,SafeAreaView,StyleSheet,navigation,FlatList,navigate,ScrollView } from 'react-native'
import { Link } from '@react-navigation/native';
import {DataTable} from 'react-native-paper';
import { Dropdown } from 'react-native-element-dropdown';
import DateTimePickerModal from "react-native-modal-datetime-picker";




const data = [
    { label: 'CASH', value: 'Office Staff' },
    { label: 'ONLINE', value: 'Sales Exicutive' },
    { label: 'BANK TRANSFER', value: 'Office Staff' },
    { label: 'CHQUE', value: 'Sales Exicutive' }, 
    { label: 'PHONEPAY', value: 'Sales Exicutive' },  
    { label: 'GOOGLE PAY', value: 'Sales Exicutive' },
  
  ];

function add_new_pement( navigation){


    const [amount_paid, setAmount_paid] = useState('');
    const [transaction_id, setTransaction_id] = useState('');
    
    const [value, setValue] = useState(null);     // pement type value
    const [isFocus, setIsFocus] = useState(false);

    
    // date and time picker start

    const [selectedDate , setSelectedDate]= useState('Selected Date')    // date value
    const [selectedTime , setSelectedTime]= useState('Selected Time')   // time value
 

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);


    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const handleDateConfirm = (date) => {
      console.warn("A date has been picked: ", date);
      const dt = new Date(date);
      const x = dt.toISOString().split('T');
      const x1 = x[0].split("-");
      console.log(x1[2] +'/' + x1[1] + '/' + x1[0]);
      setSelectedDate(x1[2] +'/' + x1[1] + '/' + x1[0]);
      hideDatePicker();
    };




    const showTimePicker = () => {
      setTimePickerVisibility(true);
    };
  
    const hideTimePicker = () => {
      setTimePickerVisibility(false);
    };
  
    const handleTimeConfirm = (date) => {
      console.warn("A date has been picked: ", date);
      const dt = new Date(date);
      const x = dt.toLocaleTimeString();
      console.log(x);
      setSelectedTime(x);
      hideTimePicker();
    };


    // date and time picker end 




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
  <Text style={{ fontSize:22,  fontWeight:"900",resizeMode: 'cover', color:'blue',marginLeft:70}}> MANISHA MANGESH KALEKAR</Text>
</View>



<View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>
          <Text style={{fontWeight:600,fontSize:15,marginTop:0,color: 'black',}}>
          Amount paid  :</Text>
      </View>
      <TextInput style={{ borderColor: "gray",color: 'black',
  width: "100%",
  borderWidth: 1,
  borderRadius: 10,
  padding: 10,}}   
  value={amount_paid}
  onChangeText={(text)=>setAmount_paid(text)} 
  />





<View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>
      <Text style={{fontWeight:600,fontSize:15,marginTop:0,color: 'black',}}>
      Payment type* :</Text>
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
    placeholder={!isFocus ? 'Select Payment type' : '...'}
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
          Transaction id :</Text>
      </View>
      <TextInput style={{ borderColor: "gray",color: 'black',
  width: "100%",
  borderWidth: 1,
  borderRadius: 10,
  padding: 10,}}  
  value={transaction_id}
  onChangeText={(text)=>setTransaction_id(text)} 
  />



<TouchableOpacity onPress={()=>{
  showDatePicker()
}}>
<View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>


            <Text style={{fontWeight:600,fontSize:15,marginTop:0,color:'black',}}>
            Date of payment</Text>

          

        </View>
        <TextInput style={{ borderColor: "gray",color:'black',
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,}} 
    value={selectedDate} />

      </TouchableOpacity>


<DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handleTimeConfirm}
        onCancel={hideTimePicker}
      />





<View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>

  <TouchableOpacity onPress={()=>{
  showTimePicker()
}}>
            <Text style={{fontWeight:600,fontSize:15,marginTop:0,color:'black',}}>
            Time of payment</Text>

            </TouchableOpacity>

        </View>
        <TextInput style={{ borderColor: "gray",color:'black',
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,}} 
    value={selectedTime}
     />

<DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleDateConfirm}
        onCancel={hideDatePicker}
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

export default add_new_pement



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
  
