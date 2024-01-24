import React, {  Component, useEffect, useState,setState, useMemo ,useCallback } from 'react';
import { Alert, Button, TextInput,View,Image,Modal,Text,Pressable,StatusBar,SafeAreaView,StyleSheet,navigation,FlatList,navigate,ScrollView,TouchableOpacity } from 'react-native'
import { Link } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { Dropdown } from 'react-native-element-dropdown';
import DateTimePickerModal from "react-native-modal-datetime-picker";




const data = [
    { label: 'pending', value: 'pending' },
    { label: 'rejected', value: 'rejected' },
    { label: 'busy', value: 'busy' },
    { label: 'waiting', value: 'waiting' },
    { label: 'switch off', value: 'switch off' },
    { label: 'not receved', value: 'not receved' },
 
   
  ];

function add_new_followup( navigation)  {

    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);


    
    // date and time picker start

    const [selectedDate , setSelectedDate]= useState('Selected Date')
    const [selectedTime , setSelectedTime]= useState('Selected Time')


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

       // date picker 2 start
       const [selectedDate2 , setSelectedDate2]= useState('Selected Date')


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
   
   
   
   
       // date picker 2 end


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
            <Text style={{ fontSize:20,  fontWeight:"900",resizeMode: 'cover', color:'blue',marginLeft:30}}>Ruturaj Vishnu Jadhav</Text>
        </View>
    
    
    
        
        <View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>
            <Text style={{fontWeight:600,fontSize:15,marginTop:0,}}>
            Call status * :</Text>
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
          placeholder={!isFocus ? 'Select  Call status' : '...'}
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
                <Text style={{fontWeight:600,fontSize:15,marginTop:0,}}>
                Call details :</Text>
            </View>
            <TextInput style={{ borderColor: "gray",
        width: "100%",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,}}  placeholder="Enter Call details " />
    
    
    
    <TouchableOpacity onPress={()=>{
  showDatePicker()
}}>
<View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>


            <Text style={{fontWeight:600,fontSize:15,marginTop:0,}}>
            Expected purchase date :</Text>

          

        </View>
        <TextInput style={{ borderColor: "gray",
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


<TouchableOpacity onPress={()=>{
  showDatePicker2()
}}>
<View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>


            <Text style={{fontWeight:600,fontSize:15,marginTop:0,}}>
            Next scheduled call date :</Text>

          

        </View>
        <TextInput style={{ borderColor: "gray",
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

  <TouchableOpacity onPress={()=>{
  showTimePicker()
}}>
            <Text style={{fontWeight:600,fontSize:15,marginTop:0,}}>
            Next scheduled call time :</Text>

            </TouchableOpacity>

        </View>
        <TextInput style={{ borderColor: "gray",
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


                <Text style={{marginLeft:120, }} ></Text>
                <Button
                  title="Submit"
                 
                />
               
    
                </View>
       </View>
      
                  
                  </View>
</View>
             
    
  
      </ScrollView>
  );


}
export default add_new_followup


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