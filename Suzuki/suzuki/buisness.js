import React, {  Component, useEffect, useState,setState, useMemo ,useCallback } from 'react';
import { Alert, Button, TouchableOpacity,TextInput,View,Image,Modal,Text,Pressable,StatusBar,SafeAreaView,StyleSheet,navigation,FlatList,navigate,ScrollView } from 'react-native'
import { Link } from '@react-navigation/native';
import { Dropdown } from 'react-native-element-dropdown';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import ImagePicker from 'react-native-image-crop-picker';


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

  const data4 = [
    { label: 'Advance', value: 'Advance' },
    { label: 'Full', value: 'Full' },
    { label: 'Partial', value: 'Partial' },

  
  ];
  

const buisness = () => {

    const [showModal, setShowModal] = useState(false);



    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const [value2, setValue2] = useState(null);
    const [isFocus2, setIsFocus2] = useState(false);

    const [value3, setValue3] = useState(null);
    const [isFocus3, setIsFocus3] = useState(false);

    const [value4, setValue4] = useState(null);
    const [isFocus4, setIsFocus4] = useState(false);


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


  return (

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
        <Text style={{ fontSize:22,  fontWeight:"900",resizeMode: 'cover', color:'blue',marginLeft:20}}> Add New Payment</Text>
    </View>


    
  <View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>
            <Text style={{fontWeight:600,fontSize:15,marginTop:0, color:'black',}}>
            Prospect :</Text>
        </View>

    <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'white', color:'black', }]}
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
          placeholder={!isFocus ? 'Select Prospect' : '...'}
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
            <Text style={{fontWeight:600,fontSize:15,marginTop:0, color:'black',}}>
            Sales executive :</Text>
        </View>

    <Dropdown
          style={[styles.dropdown, isFocus2 && { borderColor: 'white', color:'black', }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          
          placeholderTextColor='black'
          itemTextStyle={styles.dropdowndata}
          data={data2}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus2 ? 'Select Sales executive' : '...'}
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
            <Text style={{fontWeight:600,fontSize:15,marginTop:0, color:'black',}}>
            Inventory :</Text>
        </View>

    <Dropdown
          style={[styles.dropdown, isFocus3 && { borderColor: 'white', color:'black', }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          
          placeholderTextColor='black'
          itemTextStyle={styles.dropdowndata}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data3}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus3 ? 'Select Inventory' : '...'}
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
                <Text style={{fontWeight:600,fontSize:15,marginTop:0, color:'black',}}>
                Amount paid :</Text>
            </View>
            <TextInput style={{ borderColor: "gray", color:'black',
        width: "100%",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,}}   />


<View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>
                <Text style={{fontWeight:600,fontSize:15,marginTop:0, color:'black',}}>
                Amount pending :</Text>
            </View>
            <TextInput style={{ borderColor: "gray", color:'black',
        width: "100%",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,}}   />

<View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>
                <Text style={{fontWeight:600,fontSize:15,marginTop:0, color:'black',}}>
                Commission amount :</Text>
            </View>
            <TextInput style={{ borderColor: "gray", color:'black',
        width: "100%",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,}}   />


<View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>
            <Text style={{fontWeight:600,fontSize:15,marginTop:0, color:'black',}}>
            Payment type :</Text>
        </View>

    <Dropdown
          style={[styles.dropdown, isFocus4 && { borderColor: 'white', color:'black', }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          
          placeholderTextColor='black'
          itemTextStyle={styles.dropdowndata}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data4}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus4 ? 'Select Payment type' : '...'}
          searchPlaceholder="Search..."
          value={value4}
          onFocus={() => setIsFocus4(true)}
          onBlur={() => setIsFocus4(false)}
          onChange={item => {
            setValue4(item.value);
            setIsFocus4(false);
          }}
         
        />


<View style={{ flex: 1,
    justifyContent: 'center',
    alignItems: 'center',}}>
      <Text style={{fontSize: 16,
    marginBottom: 10, color:'black',}}>Payment proof image</Text>
      {imageSource && <Image source={imageSource} style={{width: 200,
    height: 200,
    resizeMode: 'contain',
    marginTop: 20,
    marginBottom:10}} />}
      <Button title=" uplode Payment proof image" onPress={selectImage} />
    </View>
 

<TouchableOpacity onPress={()=>{
  showDatePicker()
}}>
<View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>


            <Text style={{fontWeight:600,fontSize:15,marginTop:0, color:'black',}}>
            Date of payment</Text>

          

        </View>
        <TextInput style={{ borderColor: "gray", color:'black',
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,}} 
    value={selectedDate} />

      </TouchableOpacity>


      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleDateConfirm}
        onCancel={hideDatePicker}
      />




<View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>

  <TouchableOpacity onPress={()=>{
  showTimePicker()
}}>
            <Text style={{fontWeight:600,fontSize:15,marginTop:0, color:'black',}}>
            Time of payment</Text>

            </TouchableOpacity>

        </View>
        <TextInput style={{ borderColor: "gray", color:'black',
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,}} 
    value={selectedTime}
     />

<DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handleTimeConfirm}
        onCancel={hideTimePicker}
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
    marginTop:20 , marginBottom:10}}>
  <Text style={{ fontWeight:700,fontSize:22,marginTop:0, color:'black', }}>Payments / Closures</Text>
  </View>

  <View style={{flexDirection:'row', marginBottom:10}}>




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




</View>


    
    <ScrollView horizontal={true}>




      <View style={styles.table}>
        <View style={styles.row}>
          <Text style={styles.header}>prospect</Text>
          <Text style={styles.header}>sales_executive	</Text>
          <Text style={styles.header}>inventory	</Text>
          <Text style={styles.header}>amount_paid	</Text>
          <Text style={styles.header}>amount_pending</Text>
          <Text style={styles.header}>commission_amount </Text>
          <Text style={styles.header}>payment_type	</Text>
          <Text style={styles.header}>date_of_payment</Text>
          <Text style={styles.header}>time_of_payment </Text>

        </View>

      
        <View style={styles.row}>
          <Text style={styles.cell}>None </Text>
          <Text style={styles.cell}>None </Text>
          <Text style={styles.cell}> None</Text>
          <Text style={styles.cell}> 2000</Text>
          <Text style={styles.cell}>None </Text>
          <Text style={styles.cell}>0 </Text>
          <Text style={styles.cell}>Advance </Text>
          <Text style={styles.cell}>None </Text>
          <Text style={styles.cell}> None</Text>
       
        </View>

    

       
       



      </View>
    </ScrollView>
    </ScrollView>
  );
};

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
    width:200
  },
  cell: {
    flex: 1,
    borderWidth: 1,
    color:'black',
    borderColor: '#000',
    padding: 8,
    textAlign: 'center',
    width:200
  },
  container: {
    padding: 15,
  },
  dropdowndata:{
    color: 'black'
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
});

export default buisness;
