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



function edit_booking({ navigation })  {


    const [value, setValue] = useState(null);    // chassis number value
    const [isFocus, setIsFocus] = useState(false);

       // A customer details values
    const [ex_shoroom_prise, setEx_shoroom_prise] = useState('');
    const [insurance, setInsurance] = useState('');
    const [rto_charges, setRto_charges] = useState('');
    const [helmate, setHelmate] = useState('');
    const [guard, setGuard] = useState('');
    const [footrest, setFootrest] = useState('');
    const [mattin, setMattin] = useState('');
    const [ex_warenty, setEx_warenty] = useState('');
    const [hypontication_charges, setHypontication_charges] = useState('');


    // insurance details values
    const [policy_no, setPolicy_no] = useState('');
    const [name_of_nominee, setName_of_nominee] = useState('');
    const [relation_of_nominee, setRelation_of_nominee] = useState('');


        // payment details values
        const [invoice_amount, setInvoice_amount] = useState('');
        const [discount, setDiscount] = useState('');
        const [total, setTotal] = useState('');
        const [short_extra, setShort_extra] = useState('');
  

   

  

    
    // date picker 1 start
    const [selectedDate2 , setSelectedDate2]= useState('Selected Date')        // date of birth nominee value


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




    <View style={{margin:10,padding:10}}>
    <View style={{borderColor:'', borderWidth: 2, backgroundColor:'white',
            shadowColor: '#171717',
            shadowOffset: {width:110, height: 40},
            shadowOpacity: 14,
            shadowRadius: 12,padding:20}}>

    <View style={{borderColor:'', borderWidth: 0, backgroundColor:'',
            shadowColor: '',}}>
        <Text style={{ fontSize:18,  fontWeight:"900",resizeMode: 'cover', color:'blue',textAlign:'center'}}>Book & Create Order Form Of -</Text>
        <Text style={{ fontSize:16,  fontWeight:"600",resizeMode: 'cover', color:'black',textAlign:'center'}}>VAIBHAV SHAM ASWALE</Text>  
    </View>


    <View style={{padding:20}}>
                   <Text style={{ fontSize:20,  fontWeight:"900",resizeMode: 'cover', color:'black',textAlign:'center'}}>"A" CUSTOMER DETAILS</Text>       
                   </View>
                   <View style={{padding:6}}>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >Name  : </Text>  Vaibhav Sham Aswale</Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >Address : </Text>sajani hatkanangle kolhapur kolhapur None</Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >City  : </Text>  Shahu Nagar</Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >Taluka  : </Text>  Kolhapur</Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >District  : </Text>  Kolhapur</Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:18, fontWeight:"600", color:'black'}} >State  : </Text>  Maharashtra</Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >Mobile  : </Text>  09422043075 </Text>  
              </View>


        {/* one row to input field start */}
    
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
    <View style={{ flex: 1, marginRight: 10 }}>
        <Text style={{ fontWeight: '600', fontSize: 15, marginTop: 0, color: 'black' }}>Ex-Showroom Price :</Text>
        <TextInput
            style={{
                borderColor: 'gray',
                color: 'black',
                width: '100%',
                borderWidth: 1,
                borderRadius: 10,
                padding: 10,
            }}
            value={ex_shoroom_prise}
            onChangeText={text => setEx_shoroom_prise(text)}
        />
    </View>

    <View style={{ flex: 1 }}>
        <Text style={{ fontWeight: '600', fontSize: 15, marginTop: 0, color: 'black' }}>Insurance :</Text>
        <TextInput
            style={{
                borderColor: 'gray',
                color: 'black',
                width: '100%',
                borderWidth: 1,
                borderRadius: 10,
                padding: 10,
            }}
            value={insurance}
            onChangeText={text => setInsurance(text)}
        />
    </View>
</View>

 {/* one row to input field end */}


 <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
    <View style={{ flex: 1, marginRight: 10 }}>
        <Text style={{ fontWeight: '600', fontSize: 15, marginTop: 0, color: 'black' }}>Rto & Regi. Charges :</Text>
        <TextInput
            style={{
                borderColor: 'gray',
                color: 'black',
                width: '100%',
                borderWidth: 1,
                borderRadius: 10,
                padding: 10,
            }}
            value={rto_charges}
            onChangeText={text => setRto_charges(text)}
        />
    </View>

    <View style={{ flex: 1 }}>
        <Text style={{ fontWeight: '600', fontSize: 15, marginTop: 0, color: 'black' }}>Helmet :</Text>
        <TextInput
            style={{
                borderColor: 'gray',
                color: 'black',
                width: '100%',
                borderWidth: 1,
                borderRadius: 10,
                padding: 10,
            }}
            value={helmate}
            onChangeText={text => setHelmate(text)}
        />
    </View>
</View>




<View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
    <View style={{ flex: 1, marginRight: 10 }}>
        <Text style={{ fontWeight: '600', fontSize: 15, marginTop: 0, color: 'black' }}>Guard :</Text>
        <TextInput
            style={{
                borderColor: 'gray',
                color: 'black',
                width: '100%',
                borderWidth: 1,
                borderRadius: 10,
                padding: 10,
            }}
            value={guard}
            onChangeText={text => setGuard(text)}
        />
    </View>

    <View style={{ flex: 1 }}>
        <Text style={{ fontWeight: '600', fontSize: 15, marginTop: 0, color: 'black' }}>Foatrest (Saree Step) :</Text>
        <TextInput
            style={{
                borderColor: 'gray',
                color: 'black',
                width: '100%',
                borderWidth: 1,
                borderRadius: 10,
                padding: 10,
            }}
            value={footrest}
            onChangeText={text => setFootrest(text)}
        />
    </View>
</View>


<View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
    <View style={{ flex: 1, marginRight: 10 }}>
        <Text style={{ fontWeight: '600', fontSize: 15, marginTop: 0, color: 'black' }}>Mattin :</Text>
        <TextInput
            style={{
                borderColor: 'gray',
                color: 'black',
                width: '100%',
                borderWidth: 1,
                borderRadius: 10,
                padding: 10,
            }}
            value={mattin}
            onChangeText={text => setMattin(text)}
        />
    </View>

    <View style={{ flex: 1 }}>
        <Text style={{ fontWeight: '600', fontSize: 15, marginTop: 0, color: 'black' }}>Ex. Warranty (2+3) :</Text>
        <TextInput
            style={{
                borderColor: 'gray',
                color: 'black',
                width: '100%',
                borderWidth: 1,
                borderRadius: 10,
                padding: 10,
            }}
            value={ex_warenty}
            onChangeText={text => setEx_warenty(text)}
        />
    </View>
</View>

<View style={{ flex: 1 }}>
        <Text style={{ fontWeight: '600', fontSize: 15, marginTop: 0, color: 'black' }}>Hypothication Charges :</Text>
        <TextInput
            style={{
                borderColor: 'gray',
                color: 'black',
                width: '100%',
                borderWidth: 1,
                borderRadius: 10,
                padding: 10,
            }}
            value={hypontication_charges}
            onChangeText={text => setHypontication_charges(text)}
        />
    </View>



    <View style={{padding:20}}>
                   <Text style={{ fontSize:20,  fontWeight:"900",resizeMode: 'cover', color:'black',textAlign:'center'}}>"B" CUSTOMER DETAILS</Text>       
                   </View>
                   <View style={{padding:6}}>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >Model   : </Text>  Access 125</Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >Variant  : </Text>Access 125 Drum</Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >Color   : </Text> White</Text>
              </View>



              <View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>
            <Text style={{fontWeight:600,fontSize:15,marginTop:0,color:'black',}}>
            Chassis No* :</Text>
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
          placeholder={!isFocus ? 'Select Chassis No' : '...'}
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
        {/* one row to input field start */}
        <View style={{padding:20}}>
                   <Text style={{ fontSize:20,  fontWeight:"900",resizeMode: 'cover', color:'black',textAlign:'center'}}>INSURANCE DETAILS</Text>       
                   </View>
    
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
    <View style={{ flex: 1, marginRight: 10 }}>
        <Text style={{ fontWeight: '600', fontSize: 15, marginTop: 0, color: 'black' }}>Policy no :</Text>
        <TextInput
            style={{
                borderColor: 'gray',
                color: 'black',
                width: '100%',
                borderWidth: 1,
                borderRadius: 10,
                padding: 10,
            }}
            value={policy_no}
            onChangeText={text => setPolicy_no(text)}
        />
    </View>

    <View style={{ flex: 1 }}>
        <Text style={{ fontWeight: '600', fontSize: 15, marginTop: 0, color: 'black' }}>Name of nominee* :</Text>
        <TextInput
            style={{
                borderColor: 'gray',
                color: 'black',
                width: '100%',
                borderWidth: 1,
                borderRadius: 10,
                padding: 10,
            }}
            value={name_of_nominee}
            onChangeText={text => setName_of_nominee(text)}
        />
    </View>
</View>

 {/* one row to input field end */}

 {/* one row to input field start */}
 
    
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>

    <View style={{ flex: 1, marginRight: 10 }}>
        
<TouchableOpacity onPress={()=>{
  showDatePicker2()
}}>
<View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>


            <Text style={{fontWeight:600,fontSize:15,marginTop:0,color:'black',}}>
            Date of birth of nominee*</Text>

          

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
    </View>

    <View style={{ flex: 1 }}>
        <Text style={{ fontWeight: '600', fontSize: 15, marginTop: 0, color: 'black' }}>Relation with nominee* :</Text>
        <TextInput
            style={{
                borderColor: 'gray',
                color: 'black',
                width: '100%',
                borderWidth: 1,
                borderRadius: 10,
                padding: 10,
            }}
            value={relation_of_nominee}
            onChangeText={text => setRelation_of_nominee(text)}
        />
    </View>
</View>

 {/* one row to input field end */}






 <View style={{padding:20}}>
                   <Text style={{ fontSize:20,  fontWeight:"900",resizeMode: 'cover', color:'black',textAlign:'center'}}> PAYMENT DETAILS </Text>       
                   </View>
                   

        {/* one row to input field start */}

    
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
    <View style={{ flex: 1, marginRight: 10 }}>
        <Text style={{ fontWeight: '600', fontSize: 15, marginTop: 0, color: 'black' }}>Invoice amount*</Text>
        <TextInput
            style={{
                borderColor: 'gray',
                color: 'black',
                width: '100%',
                borderWidth: 1,
                borderRadius: 10,
                padding: 10,
            }}
            value={invoice_amount}
            onChangeText={text => setInvoice_amount(text)}
        />
    </View>

    <View style={{ flex: 1 }}>
        <Text style={{ fontWeight: '600', fontSize: 15, marginTop: 0, color: 'black' }}>Discount* :</Text>
        <TextInput
            style={{
                borderColor: 'gray',
                color: 'black',
                width: '100%',
                borderWidth: 1,
                borderRadius: 10,
                padding: 10,
            }}
            value={discount}
            onChangeText={text => setDiscount(text)}
        />
    </View>
</View>

 {/* one row to input field end */}

   {/* one row to input field start */}

    
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
    <View style={{ flex: 1, marginRight: 10 }}>
        <Text style={{ fontWeight: '600', fontSize: 15, marginTop: 0, color: 'black' }}>Total*</Text>
        <TextInput
            style={{
                borderColor: 'gray',
                color: 'black',
                width: '100%',
                borderWidth: 1,
                borderRadius: 10,
                padding: 10,
            }}
            value={total}
            onChangeText={text => setTotal(text)}
        />
    </View>

    <View style={{ flex: 1 }}>
        <Text style={{ fontWeight: '600', fontSize: 15, marginTop: 0, color: 'black' }}>Short or extra :</Text>
        <TextInput
            style={{
                borderColor: 'gray',
                color: 'black',
                width: '100%',
                borderWidth: 1,
                borderRadius: 10,
                padding: 10,
            }}
            value={short_extra}
            onChangeText={text => setShort_extra(text)}
        />
    </View>
</View>

 {/* one row to input field end */}

 <View style={{padding:20}}>
                   <Text style={{ fontSize:20,  fontWeight:"900",resizeMode: 'cover', color:'black',textAlign:'center'}}> AMOUNT RECEIVED-
Rs.0/- </Text>       
                   </View>
                   

                   <View style={{flexDirection:'row',marginTop:20}}>
             <Text style={{resizeMode: 'cover', color:'black',textAlign:'center' }} ></Text>
             <Button title="Submit" />
             </View>
   </View>
   </View>
   </ScrollView>
   
  );


}
export default edit_booking

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