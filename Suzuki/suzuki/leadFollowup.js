import React, {  Component, useEffect, useState,setState, useMemo ,useCallback } from 'react';
import { Alert, Button, TextInput,View,Image,Modal,Text,Pressable,StatusBar,SafeAreaView,StyleSheet,navigation,FlatList,navigate,ScrollView,TouchableOpacity } from 'react-native'
import { Link } from '@react-navigation/native';
import { Checkbox } from 'react-native-paper';
import 'react-native-gesture-handler';
import {DataTable} from 'react-native-paper';
import { Dropdown } from 'react-native-element-dropdown';
import DateTimePickerModal from "react-native-modal-datetime-picker";

import add_new_followup from './add_new_followup';


const data = [
    { label: 'pending', value: 'pending' },
    { label: 'rejected', value: 'rejected' },
    { label: 'busy', value: 'busy' },
    { label: 'waiting', value: 'waiting' },
    { label: 'switch off', value: 'switch off' },
    { label: 'not receved', value: 'not receved' },
 
   
  ];

function leadFollowup( navigation)  {

  const [showModal, setShowModal] = useState(false);

    const [checked, setChecked] = React.useState(false);


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


    
    
    
    
    
      
                  <View style={{flexDirection:'row',marginTop:20}}>
                  <Button
                  title="Back"
                  onPress={() => {
                    setShowModal(!showModal);
                  }}
                />
                <Text style={{marginLeft:120, }} ></Text>
                <Button
                  title="Submit"
                 
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
        marginTop:10,  marginBottom:0}}>
      <Text style={{ fontWeight:700,fontSize:20,marginTop:0, }}>Ruturaj Vishnu Jadhav</Text>
      </View>
    
      

    
<Link to={{ screen: 'add_new_followup', params: { id: 'add_new_followup' } }}  style={{marginLeft: 20,marginTop:20 , borderColor:'blue', borderWidth: 2,paddingTop:10,paddingBottom:10,paddingLeft:10,
            shadowColor: '#00cccd',
            shadowOffset: {width:110, height: 40},
            shadowOpacity: 14,
            backgroundColor:'#00cccd',
            width: 120,
            shadowRadius: 12,}}>
 <Text style={{fontSize:12,  fontWeight:"600",resizeMode: 'cover', color:'white'}}> 👇 Add new call</Text>
</Link>
    
      <ScrollView
      horizontal={true}
      >
    <DataTable style={styles.container}>
          <DataTable.Header style={styles.tableHeader}>
          <DataTable.Title style = {{marginRight:50,marginLeft:30}}>call date</DataTable.Title>
            <DataTable.Title style = {{marginRight:50,marginLeft:30}}>call time</DataTable.Title>
            <DataTable.Title style = {{marginRight:50,marginLeft:50}}>call status</DataTable.Title>
            <DataTable.Title style = {{marginRight:50,marginLeft:30}}>call details	</DataTable.Title>
            <DataTable.Title style = {{marginRight:50,marginLeft:30}}>next scheduled call date</DataTable.Title>
            <DataTable.Title style = {{marginRight:50,marginLeft:30}}>next scheduled call time</DataTable.Title>
            <DataTable.Title style = {{marginRight:50,marginLeft:30}}>expected purchase date</DataTable.Title>
          </DataTable.Header>
    
    
    
          <DataTable.Row>
            <DataTable.Cell  style={{marginRight:0,marginLeft:20}}> 2023-09-26  </DataTable.Cell>
            <DataTable.Cell  style={{marginRight:-40,marginLeft:0}}> 08:28:02 </DataTable.Cell>
            <DataTable.Cell  style={{marginRight:0,marginLeft:0}}> Received </DataTable.Cell>
            <DataTable.Cell  style={{marginRight:0,marginLeft:0}}> Dffssfsd </DataTable.Cell>
            <DataTable.Cell  style={{marginRight:0,marginLeft:0}}> None </DataTable.Cell>
            <DataTable.Cell  style={{marginRight:0,marginLeft:0}}> None </DataTable.Cell>
            <DataTable.Cell  style={{marginRight:0,marginLeft:0}}> None </DataTable.Cell>



    
           
          </DataTable.Row>
    
    
    
 
    
    
    
         
    
    
          </DataTable>
    </ScrollView>
    
    
    
      </ScrollView>
  );


}
export default leadFollowup


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