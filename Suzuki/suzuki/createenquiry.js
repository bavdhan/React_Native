import React, { Component, useEffect, useState,setState } from 'react';
import { Alert, Button, TextInput,View,Image,Modal, Text,SafeAreaView,StyleSheet,navigation,FlatList,navigate,ScrollView,DatePickerAndroid, TimePickerAndroid, TouchableOpacity  } from 'react-native'
import { Link } from '@react-navigation/native';
import 'react-native-gesture-handler';
import {DataTable} from 'react-native-paper';
import { Dropdown } from 'react-native-element-dropdown';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';
import { Checkbox } from 'react-native-paper';
import DateTimePickerModal from "react-native-modal-datetime-picker";



const data = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
   
  ];


  const data1 = [
    { label: 'COD', value: '1' },
    { label: 'Prepaid', value: '2' },
   
  ];

  const data3 = [
    { label: 'saurabh', value: 'saurabh' },
    { label: 'Abhijeet', value: 'Abhijeet' },
   
  ];

  
  const data4 = [
    { label: 'shriram', value: 'shriram' },
    { label: 'chola', value: 'chola' },
   
  ];

  const data5 = [
    { label: 'SBI', value: 'SBI' },
    { label: 'ICICI', value: 'ICICI' },
   
  ];




  const data6 = [
    { label: 'student', value: 'student' },
    { label: 'housewife', value: 'housewife' },
   
  ];
  const data7 = [
    { label: 'online', value: 'online' },
    { label: 'walk-In', value: 'walk-In' },
   
  ];
  const data8 = [
    { label: 'print-media', value: 'print-media' },
    { label: 'fm-radio', value: 'fm-radio' },
   
  ];
  const data9 = [
    { label: 'showroom visit done', value: 'showroom visit done' },
    { label: 'test ride done', value: 'test ride done' },
   
  ];
  const data10 = [
    { label: 'Access 125', value: 'Access 125' },
    { label: 'Avenger', value: 'Avenger' },
   
  ];

  const data11 = [
    { label: 'showroom visit done', value: 'showroom visit done' },
    { label: 'test ride done', value: 'test ride done' },
   
  ];
  const data12 = [
    { label: 'Access 125', value: 'Access 125' },
    { label: 'Avenger', value: 'Avenger' },
   
  ];

  const data13 = [
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
    { label: '4', value: '4' },
    { label: '5', value: '5' },
    { label: '6', value: '6' },
    { label: '7', value: '7' },
    { label: '8', value: '8' },
    { label: '9', value: '9' },
    { label: '10', value: '10' },
   
  ];

function createenquiry({ navigation })  {

  const [checked, setChecked] = React.useState(false);


    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const [value1, setValue1] = useState(null);
    const [isFocus1, setIsFocus1] = useState(false);

    const [value3, setValue3] = useState(null);
    const [isFocus3, setIsFocus3] = useState(false);

    
    const [value4, setValue4] = useState(null);
    const [isFocus4, setIsFocus4] = useState(false);

    const [value5, setValue5] = useState(null);
    const [isFocus5, setIsFocus5] = useState(false);


    const [value6, setValue6] = useState(null);
    const [isFocus6, setIsFocus6] = useState(false);

    const [value7, setValue7] = useState(null);
    const [isFocus7, setIsFocus7] = useState(false);

    const [value8, setValue8] = useState(null);
    const [isFocus8, setIsFocus8] = useState(false);

    const [value9, setValue9] = useState(null);
    const [isFocus9, setIsFocus9] = useState(false);

    const [value10, setValue10] = useState(null);
    const [isFocus10, setIsFocus10] = useState(false);

    const [value11, setValue11] = useState(null);
    const [isFocus11, setIsFocus11] = useState(false);

    const [value12, setValue12] = useState(null);
    const [isFocus12, setIsFocus12] = useState(false);

    const [value13, setValue13] = useState(null);
    const [isFocus13, setIsFocus13] = useState(false);









    const [showModal, setShowModal] = useState(false);
    const [showModal2, setShowModal2] = useState(false);



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


    //date picker 3 start 
    const [selectedDate3 , setSelectedDate3]= useState('Selected Date')


    const [isDatePickerVisible3, setDatePickerVisibility3] = useState(false);


    const showDatePicker3 = () => {
      setDatePickerVisibility3(true);
    };
  
    const hideDatePicker3 = () => {
      setDatePickerVisibility3(false);
    };
  
    const handleDateConfirm3 = (date3) => {
      console.warn("A date has been picked: ", date3);
      const dt = new Date(date3);
      const x = dt.toISOString().split('T');
      const x1 = x[0].split("-");
      console.log(x1[2] +'/' + x1[1] + '/' + x1[0]);
      setSelectedDate3(x1[2] +'/' + x1[1] + '/' + x1[0]);
      hideDatePicker3();
    };
    // date picker 3 end

       //date picker 4 start 
       const [selectedDate4 , setSelectedDate4]= useState('Selected Date')


       const [isDatePickerVisible4, setDatePickerVisibility4] = useState(false);
   
   
       const showDatePicker4 = () => {
         setDatePickerVisibility4(true);
       };
     
       const hideDatePicker4 = () => {
         setDatePickerVisibility4(false);
       };
     
       const handleDateConfirm4 = (date4) => {
         console.warn("A date has been picked: ", date4);
         const dt = new Date(date4);
         const x = dt.toISOString().split('T');
         const x1 = x[0].split("-");
         console.log(x1[2] +'/' + x1[1] + '/' + x1[0]);
         setSelectedDate4(x1[2] +'/' + x1[1] + '/' + x1[0]);
         hideDatePicker4();
       };
       // date picker 4 end

             //date picker 5 start      deleted
             const [selectedDate5 , setSelectedDate5]= useState('Selected Date')


             const [isDatePickerVisible5, setDatePickerVisibility5] = useState(false);
         
         
             const showDatePicker5 = () => {
               setDatePickerVisibility5(true);
             };
           
             const hideDatePicker5 = () => {
               setDatePickerVisibility5(false);
             };
           
             const handleDateConfirm5 = (date5) => {
               console.warn("A date has been picked: ", date5);
               const dt = new Date(date5);
               const x = dt.toISOString().split('T');
               const x1 = x[0].split("-");
               console.log(x1[2] +'/' + x1[1] + '/' + x1[0]);
               setSelectedDate5(x1[2] +'/' + x1[1] + '/' + x1[0]);
               hideDatePicker5();
             };
             // date picker 5 end

                   //date picker 6 start      deleted
       const [selectedDate6 , setSelectedDate6]= useState('Selected Date')


       const [isDatePickerVisible6, setDatePickerVisibility6] = useState(false);
   
   
       const showDatePicker6 = () => {
         setDatePickerVisibility6(true);
       };
     
       const hideDatePicker6 = () => {
         setDatePickerVisibility6(false);
       };
     
       const handleDateConfirm6 = (date6) => {
         console.warn("A date has been picked: ", date6);
         const dt = new Date(date6);
         const x = dt.toISOString().split('T');
         const x1 = x[0].split("-");
         console.log(x1[2] +'/' + x1[1] + '/' + x1[0]);
         setSelectedDate6(x1[2] +'/' + x1[1] + '/' + x1[0]);
         hideDatePicker6();
       };
       // date picker 6 end


              //date picker 7 start  date of birth
              const [selectedDate7 , setSelectedDate7]= useState('Selected Date')


              const [isDatePickerVisible7, setDatePickerVisibility7] = useState(false);
          
          
              const showDatePicker7 = () => {
                setDatePickerVisibility7(true);
              };
            
              const hideDatePicker7 = () => {
                setDatePickerVisibility7(false);
              };
            
              const handleDateConfirm7 = (date7) => {
                console.warn("A date has been picked: ", date7);
                const dt = new Date(date7);
                const x = dt.toISOString().split('T');
                const x1 = x[0].split("-");
                console.log(x1[2] +'/' + x1[1] + '/' + x1[0]);
                setSelectedDate7(x1[2] +'/' + x1[1] + '/' + x1[0]);
                hideDatePicker7();
              };
              // date picker 7 end
       


       // form save alert start

       const showAlert = () => {
        Alert.alert(
          'Enquiry details:',
          'Enquiry Save Successfully',
          [
            {
              text: 'OK',
              onPress: () => console.log('OK pressed'),
            },
          ],
          { cancelable: false }
        );
      };

       // form save alart end


    
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

  



        <View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>
            <Text style={{fontWeight:600,fontSize:15,marginTop:0,color:'black',}}> 
                     Select Profession :</Text>
        </View>

    <Dropdown
          style={[styles.dropdown, isFocus6 && { borderColor: 'white',color:'black', }]}
          placeholderStyle={styles.placeholderStyle}
          placeholderTextColor='black'
          selectedTextStyle={styles.selectedTextStyle}
          itemTextStyle={styles.dropdowndata}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data6}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus6 ? 'Select Profession' : '...'}
          searchPlaceholder="Search..."
          value={value6}
          onFocus={() => setIsFocus6(true)}
          onBlur={() => setIsFocus6(false)}
          onChange={item => {
            setValue6(item.value);
            setIsFocus6(false);
          }}    
        />



<View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>
            <Text style={{fontWeight:600,fontSize:15,marginTop:0,color:'black',}}> 
                     Select Enquiry type :</Text>
        </View>

    <Dropdown
          style={[styles.dropdown, isFocus7 && { borderColor: 'white',color:'black', }]}
          placeholderStyle={styles.placeholderStyle}
          placeholderTextColor='black'
          selectedTextStyle={styles.selectedTextStyle}
          itemTextStyle={styles.dropdowndata}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data7}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus7 ? 'Select Enquiry type' : '...'}
          searchPlaceholder="Search..."
          value={value7}
          onFocus={() => setIsFocus7(true)}
          onBlur={() => setIsFocus7(false)}
          onChange={item => {
            setValue7(item.value);
            setIsFocus7(false);
          }}    
        />

<View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>
            <Text style={{fontWeight:600,fontSize:15,marginTop:0,color:'black',}}> 
                     Select Enquiry source :</Text>
        </View>

    <Dropdown
          style={[styles.dropdown, isFocus8 && { borderColor: 'white',color:'black', }]}
          placeholderStyle={styles.placeholderStyle}
          placeholderTextColor='black'
          selectedTextStyle={styles.selectedTextStyle}
          itemTextStyle={styles.dropdowndata}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data8}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus8 ? 'Select Enquiry source' : '...'}
          searchPlaceholder="Search..."
          value={value8}
          onFocus={() => setIsFocus8(true)}
          onBlur={() => setIsFocus8(false)}
          onChange={item => {
            setValue8(item.value);
            setIsFocus8(false);
          }}    
        />



<View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>
            <Text style={{fontWeight:600,fontSize:15,marginTop:0,color:'black',}}> 
                     Select Enquiry status :</Text>
        </View>

    <Dropdown
          style={[styles.dropdown, isFocus9 && { borderColor: 'white',color:'black', }]}
          placeholderStyle={styles.placeholderStyle}
          placeholderTextColor='black'
          selectedTextStyle={styles.selectedTextStyle}
          itemTextStyle={styles.dropdowndata}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data9}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus9 ? 'Select Enquiry status ' : '...'}
          searchPlaceholder="Search..."
          value={value9}
          onFocus={() => setIsFocus9(true)}
          onBlur={() => setIsFocus9(false)}
          onChange={item => {
            setValue9(item.value);
            setIsFocus9(false);
          }}    
        />


<View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>
            <Text style={{fontWeight:600,fontSize:15,marginTop:0,color:'black',}}>
                     Select Selected bike :</Text>
        </View>

    <Dropdown
          style={[styles.dropdown, isFocus10 && { borderColor: 'white',color:'black', }]}
          placeholderStyle={styles.placeholderStyle}
          placeholderTextColor='black'
          selectedTextStyle={styles.selectedTextStyle}
          itemTextStyle={styles.dropdowndata}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data10}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus10 ? 'Select Selected bike ' : '...'}
          searchPlaceholder="Search..."
          value={value10}
          onFocus={() => setIsFocus10(true)}
          onBlur={() => setIsFocus10(false)}
          onChange={item => {
            setValue10(item.value);
            setIsFocus10(false);
          }}    
        />


<View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>
            <Text style={{fontWeight:600,fontSize:15,marginTop:0,color:'black',}}>
                     Select Selected varient :</Text>
        </View>

    <Dropdown
          style={[styles.dropdown, isFocus11 && { borderColor: 'white',color:'black', }]}
          placeholderStyle={styles.placeholderStyle}
          placeholderTextColor='black'
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          itemTextStyle={styles.dropdowndata}
          iconStyle={styles.iconStyle}
          data={data11}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus11 ? 'Select Selected varient ' : '...'}
          searchPlaceholder="Search..."
          value={value11}
          onFocus={() => setIsFocus11(true)}
          onBlur={() => setIsFocus11(false)}
          onChange={item => {
            setValue11(item.value);
            setIsFocus11(false);
          }}    
        />

<View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>
            <Text style={{fontWeight:600,fontSize:15,marginTop:0,color:'black',}}> 
                     Select Selected color :</Text>
        </View>

    <Dropdown
          style={[styles.dropdown, isFocus12 && { borderColor: 'white' ,color:'black',}]}
          placeholderStyle={styles.placeholderStyle}
          placeholderTextColor='black'
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          itemTextStyle={styles.dropdowndata}
          iconStyle={styles.iconStyle}
          data={data12}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus12 ? 'Select Selected color ' : '...'}
          searchPlaceholder="Search..."
          value={value12}
          onFocus={() => setIsFocus12(true)}
          onBlur={() => setIsFocus12(false)}
          onChange={item => {
            setValue12(item.value);
            setIsFocus12(false);
          }}    
        />


<View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>
            <Text style={{fontWeight:600,fontSize:15,marginTop:0,color:'black',}}>
            Current Vehicle :</Text>
        </View>
        <TextInput style={{ borderColor: "gray",color:'black',
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,}}  placeholder="Enter Current Vehicle" placeholderTextColor='black' />

<View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>
            <Text style={{fontWeight:600,fontSize:15,marginTop:0,color:'black',}}>
            Other models in consideration :</Text>
        </View>
        <TextInput style={{ borderColor: "gray",color:'black',
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,}}  placeholder="Enter Other models in consideration" placeholderTextColor='black' />



<View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>
            <Text style={{fontWeight:600,fontSize:15,marginTop:0,color:'black',}}>
            Any competitor model test ride taken :</Text>
        </View>
        <TextInput style={{ borderColor: "gray",color:'black',
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,}}   />



<TouchableOpacity onPress={()=>{
  showDatePicker4()
}}>
<View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>


            <Text style={{fontWeight:600,fontSize:15,marginTop:0,color:'black',}}>
            Booking date:</Text>

          

        </View>
        <TextInput style={{ borderColor: "gray",color:'black',
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,}} 
    value={selectedDate4} />

      </TouchableOpacity>


      <DateTimePickerModal
        isVisible={isDatePickerVisible4}
        mode="date"
        onConfirm={handleDateConfirm4}
        onCancel={hideDatePicker4}
      />










<View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>
            <Text style={{fontWeight:600,fontSize:15,marginTop:0,color:'black',}}>
            Booking amount* :</Text>
        </View>
        <TextInput style={{ borderColor: "gray",color:'black',
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,}}   />






<View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>
            <Text style={{fontWeight:600,fontSize:15,marginTop:0,color:'black',}}>
            Sales manager remarks :</Text>
        </View>
        <TextInput style={{ borderColor: "gray",color:'black',
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,}}  />

<View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>
            <Text style={{fontWeight:600,fontSize:15,marginTop:0,color:'black',}}>
            Dealer remarks :</Text>
        </View>
        <TextInput style={{ borderColor: "gray",color:'black',
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,}}  />


<View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>
            <Text style={{fontWeight:600,fontSize:15,marginTop:0,color:'black',}}> 
            Customer rating * :</Text>
        </View>

    <Dropdown
          style={[styles.dropdown, isFocus13 && { borderColor: 'white',color:'black', }]}
          placeholderStyle={styles.placeholderStyle}
          placeholderTextColor='black'
          selectedTextStyle={styles.selectedTextStyle}
          itemTextStyle={styles.dropdowndata}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data13}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus13 ? 'Select Customer rating' : '...'}
          searchPlaceholder="Search..."
          value={value13}
          onFocus={() => setIsFocus13(true)}
          onBlur={() => setIsFocus13(false)}
          onChange={item => {
            setValue13(item.value);
            setIsFocus13(false);
          }}    
        />

  
              <View style={{flexDirection:'row',marginTop:20}}>
              <Button
              title="Preview"
              onPress={() => {
                setShowModal(!showModal);
              }}
            />
            <Text style={{marginLeft:120, }} ></Text>
            <Button
              title="Save"
              onPress={showAlert}
            />
            </View>


            </View>
   </View>
  
              
              </View>


          </View>
          </ScrollView>

        </Modal>








    <View style={{margin:10,padding:10}}>
    <View style={{borderColor:'', borderWidth: 2, backgroundColor:'white',
            shadowColor: '#171717',
            shadowOffset: {width:110, height: 40},
            shadowOpacity: 14,
            shadowRadius: 12,padding:20}}>

    <View style={{borderColor:'', borderWidth: 0, backgroundColor:'',
            shadowColor: '',}}>
        <Text style={{ fontSize:20,  fontWeight:"900",resizeMode: 'cover', color:'blue',marginLeft:60}}>Create Enquiry</Text>
    </View>



    

<View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>
            <Text style={{fontWeight:600,fontSize:15,marginTop:0, color:'black',}}>
            First name* :</Text>
        </View>
        <TextInput style={{ borderColor: "gray", color:'black',
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,}} placeholder="Enter First name*"   placeholderTextColor="black" />

<View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>
            <Text style={{fontWeight:600,fontSize:15,marginTop:0,color:'black',}}>
            Middle name :</Text>
        </View>
        <TextInput style={{ borderColor: "gray",color:'black',
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,}}  placeholder="Enter Middle name"  placeholderTextColor="black" />



<View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>
            <Text style={{fontWeight:600,fontSize:15,marginTop:0,color:'black',}}>
            Last name :</Text>
        </View>
        <TextInput style={{ borderColor: "gray",color:'black',
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,}}  placeholder=" Enter Last Name"  placeholderTextColor="black" />



<View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>
            <Text style={{fontWeight:600,fontSize:15,marginTop:0,color:'black',}}>
                     Select Gender :</Text>
        </View>

    <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'white' , color:'black', }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          itemTextStyle={styles.dropdowndata}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select Gender' : '...'}
          placeholderTextColor="black"
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
         
        />


<TouchableOpacity onPress={()=>{
  showDatePicker7()
}}>
<View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>


            <Text style={{fontWeight:600,fontSize:15,marginTop:0,color:'black',}}>
            Date of birth*:</Text>

          

        </View>
        <TextInput style={{ borderColor: "gray",color:'black',
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,}} 
    value={selectedDate7} />

      </TouchableOpacity>


      <DateTimePickerModal
        isVisible={isDatePickerVisible7}
        mode="date"
        onConfirm={handleDateConfirm7}
        onCancel={hideDatePicker7}
      />



<View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>
            <Text style={{fontWeight:600,fontSize:15,marginTop:0,color:'black',}}>
            Whatsapp Mobile no*:</Text>
        </View>
        <TextInput style={{ borderColor: "gray",color:'black',
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,}} keyboardType="phone-pad"  placeholder=" Enter Mobile number"  placeholderTextColor="black" />



    
<View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>
            <Text style={{fontWeight:600,fontSize:15,marginTop:0,color:'black',}}>
            Sales executive :</Text>
        </View>

    <Dropdown
          style={[styles.dropdown, isFocus3 && { borderColor: 'white' ,color:'black',}]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          itemTextStyle={styles.dropdowndata}
          iconStyle={styles.iconStyle}
          data={data3}
          search
          maxHeight={300}
          labelField="label"
          placeholderTextColor="black"
          valueField="value"
          placeholder={!isFocus3 ? 'Select Sales executive' : '...'}
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
            Email id :</Text>
        </View>
        <TextInput style={{ borderColor: "gray",color:'black',
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,}}   placeholder=" Enter Email id"   placeholderTextColor="black" />



    

<View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>
            <Text style={{fontWeight:600,fontSize:15,marginTop:0,color:'black',}}>
            Pincode :</Text>
        </View>
        <TextInput style={{ borderColor: "gray",color:'black',
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,}} keyboardType="phone-pad" placeholder=" Pincode"  placeholderTextColor="black" />

<View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>
            <Text style={{fontWeight:600,fontSize:15,marginTop:0,color:'black',}}>
            City / Village* :</Text>
        </View>
        <TextInput style={{ borderColor: "gray",color:'black',
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,}}  placeholder=" Enter City"  placeholderTextColor="black" />

<View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>
            <Text style={{fontWeight:600,fontSize:15,marginTop:0,color:'black',}}>
            Taluka :</Text>
        </View>
        <TextInput style={{ borderColor: "gray",color:'black',
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,}}  placeholder=" Enter Taluka"  placeholderTextColor="black" />


    <View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>
            <Text style={{fontWeight:600,fontSize:15,marginTop:0,color:'black',}}>
            District :</Text>
        </View>
        <TextInput style={{ borderColor: "gray",color:'black',
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,}}  placeholder=" Enter District"  placeholderTextColor="black" />

    <View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>
            <Text style={{fontWeight:600,fontSize:15,marginTop:0,color:'black',}}>
            State :</Text>
        </View>
        <TextInput style={{ borderColor: "gray",color:'black',
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,}}  placeholder=" Enter State"  placeholderTextColor="black" />

    <View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>
            <Text style={{fontWeight:600,fontSize:15,marginTop:0,color:'black',}}>
            Address line 1 :</Text>
        </View>
        <TextInput style={{ borderColor: "gray",color:'black',
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,}}  placeholder=" Enter Address line 1"   placeholderTextColor="black" />

    <View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>
            <Text style={{fontWeight:600,fontSize:15,marginTop:0,color:'black',}}>
            Address line 2 :</Text>
        </View>
        <TextInput style={{ borderColor: "gray",color:'black',
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,}}  placeholder=" Enter Address line 2"  placeholderTextColor="black" />

    <View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>
            <Text style={{fontWeight:600,fontSize:15,marginTop:0,color:'black',}}>
            Address line 3 :</Text>
        </View>
        <TextInput style={{ borderColor: "gray",color:'black',
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,}}  placeholder=" Enter Address line 3"  placeholderTextColor="black" />

<View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>
            <Text style={{fontWeight:600,fontSize:15,marginTop:0,color:'black',}}>
            GST NO:</Text>
        </View>
        <TextInput style={{ borderColor: "gray",color:'black',
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,}}  placeholder=" Enter Your GST NO" placeholderTextColor="black" />


<View>
<Collapse style={{ marginTop:20}}>
<CollapseHeader style={{flexDirection:'row',backgroundColor:'#fff',alignItems:'center',textAlign:'center',padding:10,}}>
<Text style={{fontWeight:600,fontSize:15,marginTop:0,color:'black',}}> Interested in testride   </Text>
</CollapseHeader>
<CollapseBody style={{ backgroundColor:'#fff',}}>
    <View>


    <View style={{marginTop:20,flexDirection:'row',marginBottom:0}}>
    <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          color='black'
          onPress={() => {
            setChecked(!checked);
          }}
        />
        <Text style={{fontWeight:600,fontSize:15,marginTop:7,color:'black',}}> Interested in testride</Text>
    </View>



    

    <TouchableOpacity onPress={()=>{
  showDatePicker()
}}>
<View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>


            <Text style={{fontWeight:600,fontSize:15,marginTop:0,color:'black',}}>
            Testride date preference</Text>

          

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
            Testride time preference</Text>

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



<View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>
            <Text style={{fontWeight:600,fontSize:15,marginTop:0,color:'black',}}>
            Testride place preference :</Text>
        </View>
        <TextInput style={{ borderColor: "gray",color:'black',
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,}}   placeholder=" Enter Testride place preference" placeholderTextColor="black" />
  



    </View>
</CollapseBody>
</Collapse> 
</View>


<View>
<Collapse style={{ marginTop:20}}>
<CollapseHeader style={{flexDirection:'row',backgroundColor:'#fff',alignItems:'center',textAlign:'center',padding:10,}}>
<Text style={{fontWeight:600,fontSize:15,marginTop:0,color:'black',}}> Does customer wants to change current vehicle   </Text>
</CollapseHeader>
<CollapseBody style={{ backgroundColor:'#fff',}}>
    <View>


 

    <View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>
            <Text style={{fontWeight:600,fontSize:15,marginTop:0,color:'black',}}>
            Existing vehicle model :</Text>
        </View>
        <TextInput style={{ borderColor: "gray",color:'black',
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,}}  />


<View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>
            <Text style={{fontWeight:600,fontSize:15,marginTop:0,color:'black',}}>
            Existing vehicle variant :</Text>
        </View>
        <TextInput style={{ borderColor: "gray",color:'black',
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,}}   />

    
<View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>
            <Text style={{fontWeight:600,fontSize:15,marginTop:0,color:'black',}}>
            Existing vehicle year :</Text>
        </View>
        <TextInput style={{ borderColor: "gray",color:'black',
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,}}  />


<View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>
            <Text style={{fontWeight:600,fontSize:15,marginTop:0,color:'black',}}>
            Customer expected price for existing vehicle :</Text>
        </View>
        <TextInput style={{ borderColor: "gray",color:'black',
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,}}   />

<View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>
            <Text style={{fontWeight:600,fontSize:15,marginTop:0,color:'black',}}>
            Market price for existing vehicle :</Text>
        </View>
        <TextInput style={{ borderColor: "gray",color:'black',
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,}}  />


<View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>
            <Text style={{fontWeight:600,fontSize:15,marginTop:0,color:'black',}}>
            Dealer valuation for existing vehicle :</Text>
        </View>
        <TextInput style={{ borderColor: "gray",color:'black',
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,}}   />
  

    </View>
</CollapseBody>
</Collapse> 
</View>




<View>
<Collapse style={{ marginTop:20}}>
<CollapseHeader style={{flexDirection:'row',backgroundColor:'#fff',alignItems:'center',textAlign:'center',padding:10,}}>
<Text style={{fontWeight:600,fontSize:15,marginTop:0,color:'black',}}> Does customer wants finance for his vehicle   </Text>
</CollapseHeader>
<CollapseBody style={{ backgroundColor:'#fff',}}>
    <View>


 

    <View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>
            <Text style={{fontWeight:600,fontSize:15,marginTop:0,color:'black',}}>
            Loan amount :</Text>
        </View>
        <TextInput style={{ borderColor: "gray",color:'black',
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,}}  />


<View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>
            <Text style={{fontWeight:600,fontSize:15,marginTop:0,color:'black',}}>
            Loan tenure :</Text>
        </View>
        <TextInput style={{ borderColor: "gray",color:'black',
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,}}   />

    
<View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>
            <Text style={{fontWeight:600,fontSize:15,marginTop:0,color:'black',}}>
            Loan roi :</Text>
        </View>
        <TextInput style={{ borderColor: "gray",color:'black',
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,}}  />



<View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>
            <Text style={{fontWeight:600,fontSize:15,marginTop:0,color:'black',}}>
            Name of finance :</Text>
        </View>

    <Dropdown
          style={[styles.dropdown, isFocus4 && { borderColor: 'white' ,color:'black',}]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          itemTextStyle={styles.dropdowndata}
          placeholderTextColor='black'
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data4}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select Name of finance' : '...'}
          searchPlaceholder="Search..."
          value={value4}
          onFocus={() => setIsFocus4(true)}
          onBlur={() => setIsFocus4(false)}
          onChange={item => {
            setValue4(item.value);
            setIsFocus4(false);
          }}
         
        />


<View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>
            <Text style={{fontWeight:600,fontSize:15,marginTop:0,color:'black',}}>
            Loan emi :</Text>
        </View>
        <TextInput style={{ borderColor: "gray",color:'black',
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,}}   />

<View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>
            <Text style={{fontWeight:600,fontSize:15,marginTop:0,color:'black',}}>
            Loan margin money :</Text>
        </View>
        <TextInput style={{ borderColor: "gray",color:'black',
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,}}  />


<View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>
            <Text style={{fontWeight:600,fontSize:15,marginTop:0,color:'black',}}>
            Loan banker :</Text>
        </View>

    <Dropdown
          style={[styles.dropdown, isFocus5 && { borderColor: 'white',color:'black', }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}

          placeholderTextColor='black'
          itemTextStyle={styles.dropdowndata}
          
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data5}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus5 ? 'Select Loan banker' : '...'}
          searchPlaceholder="Search..."
          value={value5}
          onFocus={() => setIsFocus5(true)}
          onBlur={() => setIsFocus5(false)}
          onChange={item => {
            setValue5(item.value);
            setIsFocus5(false);
          }}
         
        />



    </View>
</CollapseBody>
</Collapse> 
</View>


<View>
<Collapse style={{ marginTop:20}}>
<CollapseHeader style={{flexDirection:'row',backgroundColor:'#fff',alignItems:'center',textAlign:'center',padding:10,}}>
<Text style={{fontWeight:600,fontSize:15,marginTop:0,color:'black',}}> KYC Verification   </Text>
</CollapseHeader>
<CollapseBody style={{ backgroundColor:'#fff',}}>
    <View>


 

    <View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>
            <Text style={{fontWeight:600,fontSize:15,marginTop:0,color:'black',}}>
            Adhar card no :</Text>
        </View>
        <TextInput style={{ borderColor: "gray",color:'black',
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,}}  />


<View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>
            <Text style={{fontWeight:600,fontSize:15,marginTop:0,color:'black',}}>
            Pan card no :</Text>
        </View>
        <TextInput style={{ borderColor: "gray",color:'black',
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,}}   />

    


    </View>
</CollapseBody>
</Collapse> 
</View>


<TouchableOpacity onPress={()=>{
  showDatePicker2()
}}>
<View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>


            <Text style={{fontWeight:600,fontSize:15,marginTop:0,color:'black',}}>
            Expected purchase date:</Text>

          

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





<TouchableOpacity onPress={()=>{
  showDatePicker3()
}}>
<View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>


            <Text style={{fontWeight:600,fontSize:15,marginTop:0,color:'black',}}>
            Expected Delivery date:</Text>

          

        </View>
        <TextInput style={{ borderColor: "gray",color:'black',
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,}} 
    value={selectedDate3} />

      </TouchableOpacity>


      <DateTimePickerModal
        isVisible={isDatePickerVisible3}
        mode="date"
        onConfirm={handleDateConfirm3}
        onCancel={hideDatePicker3}
      />


    

<Text style={{fontSize:15,  fontWeight:"600",resizeMode: 'cover', marginLeft: 0,marginTop:20 , borderColor:'blue', borderWidth: 2,paddingTop:10,paddingLeft:110,
            shadowColor: '#171717',
            shadowOffset: {width:110, height: 40},
            shadowOpacity: 14,
            height: 40,
            color:'black',
            width: "100%",
            shadowRadius: 12,}} onPress={() => {
          setShowModal(!showModal);
        }}> Next </Text>


   </View>
   </View>
   </ScrollView>
   
  );


}
export default createenquiry

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      padding: 16,
    },
    dropdowndata:{
      color: 'black'
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
      color:'black'
    },
    selectedTextStyle: {
      fontSize: 16,
      color:'black'
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