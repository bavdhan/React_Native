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



function edit_doket({ navigation })  {


  // checklist values

    const [checked, setChecked] = React.useState(false);     // order booking form
    const [checked2, setChecked2] = React.useState(false);   // recipt
    const [checked3, setChecked3] = React.useState(false);     // sales letter colpy
    const [checked4, setChecked4] = React.useState(false);    // invoice copy
    const [checked5, setChecked5] = React.useState(false);    // registration receipt
    const [checked6, setChecked6] = React.useState(false);   //  statment of account
    const [checked7, setChecked7] = React.useState(false);    // delivery challan
    const [checked8, setChecked8] = React.useState(false);     // owers mannually given
    const [checked9, setChecked9] = React.useState(false);    // finance cheklist
    const [checked10, setChecked10] = React.useState(false);   //  bank hypothencation letter
    const [checked11, setChecked11] = React.useState(false);  // corparate document

    const [checked00, setChecked00] = React.useState(false);     // is cancelled        last  L remark

       // text input field values
           
       // C insurance details
    const [insurance_company_name, setInsurance_company_name] = useState('');
    const [insuranc_cover_note_no, setInsuranc_cover_note_no] = useState('');
       // D registration details
    const [registration_no, setRegistration_no] = useState('');
           // H  exchange details
    const [value_of_oldvechical, setValue_of_oldvechical] = useState('');
    const [exchange_bonus, setExchange_bonus] = useState('');
    const [total_value, setTotal_value] = useState('');
         //DSA brokarage
    const [policy_number, setPolicy_number] = useState('');
     //  J final payment details
     const [invoice_amount, setInvoice_amount] = useState('');
     const [less_finance_amount, setLess_finance_amount] = useState('');
     const [add_margin_amount, setAdd_margin_amount] = useState('');
     const [add_aporon_charge, setAdd_aporon_charge] = useState('');
     const [total, setTotal] = useState('');
      // K DMS details
      const [dms_customer_id, setDms_customer_id] = useState('');
      const [dms_enquiry_no, setDms_enquiry_no] = useState('');
      const [dms_allotment_no, setDms_allotment_no] = useState('');
      const [dms_booking_no, setDms_booking_no] = useState('');
      const [dms_invoice_no, setDms_invoice_no] = useState('');
      // L remark
      const [remark, setRemark] = useState('');
      const [sales_remark, setSales_remark] = useState('');
      const [delar_remark, setDelar_remark] = useState('');
      

   //  dropdown valus
    const [value, setValue] = useState(null);      // select dsa
    const [isFocus, setIsFocus] = useState(false);

    // date value

    const [selectedDate2 , setSelectedDate2]= useState('Selected Date')        // Date of insurance value
    const [selectedDate3 , setSelectedDate3]= useState('Selected Date')     // Date of insurance expiry* value
    const [selectedDate4 , setSelectedDate4]= useState('Selected Date')     //DMS invoice date    value

    
    // date picker 1 start
   


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


    
    // date picker 1 start
  


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




    // date picker 1 end

    
    // date picker 2 start
   


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




    // date picker 2 end




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
        <Text style={{ fontSize:18,  fontWeight:"900",resizeMode: 'cover', color:'blue',textAlign:'center'}}>Customer Docket</Text>
        <Text style={{ fontSize:16,  fontWeight:"600",resizeMode: 'cover', color:'black',textAlign:'center'}}>VAIBHAV SHAM ASWALE</Text>  
    </View>


    <View style={{padding:20}}>
                   <Text style={{ fontSize:20,  fontWeight:"900",resizeMode: 'cover', color:'black',textAlign:'center'}}>"A" CUSTOMER DETAILS</Text>       
                   </View>
                   <View style={{padding:6}}>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >Name  : </Text>  Vaibhav Sham Aswale</Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >Address : </Text>sajani hatkanangle kolhapur kolhapur None</Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >Gender   : </Text>  Male</Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >Taluka  : </Text>Kolhapur</Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >City   : </Text>  Shahu Nagar</Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >District  : </Text>  Kolhapur</Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:18, fontWeight:"600", color:'black'}} >State  : </Text>  Maharashtra</Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >Mobile  : </Text>9579299359</Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >Email Id : </Text> None</Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >Date Of Birth - : </Text>Sept. 4, 2003</Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >GST No : </Text>None</Text>
              </View>

              <View style={{ width: '100%',  height: 1,backgroundColor: 'black',  marginVertical: 10,}} />


              <View style={{padding:20}}>
                   <Text style={{ fontSize:20,  fontWeight:"900",resizeMode: 'cover', color:'black',textAlign:'center'}}>Profesional details :</Text>       
                   </View>
                   <View style={{padding:6}}>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >PROFESSION   : </Text>  RETIRED</Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >ENQUIRY TYPE  : </Text>INDIVIDUAL</Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >ENQUIRY SOURCE   : </Text>  LOCAL TV AD</Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >ENQUIRY STATUS  : </Text> MARGIN MONEY</Text>
              </View>

              <View style={{ width: '100%',  height: 1,backgroundColor: 'black',  marginVertical: 10,}} />

              <View style={{padding:20}}>
                   <Text style={{ fontSize:20,  fontWeight:"900",resizeMode: 'cover', color:'black',textAlign:'center'}}>KYC DETAILS : -</Text>       
                   </View>
                   <View style={{padding:6}}>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >AADHAR No   : </Text>  452657859577</Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >PAN No  : </Text>None</Text>
              </View>

              <View style={{ width: '100%',  height: 1,backgroundColor: 'black',  marginVertical: 10,}} />



              <View style={{padding:20}}>  
                   </View>
                   <View style={{padding:6}}>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >Model    : </Text>  Access 125</Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >Variant   : </Text>Access 125 Drum</Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >Color    : </Text>White</Text>

              </View>

              <View style={{ width: '100%',  height: 1,backgroundColor: 'black',  marginVertical: 10,}} />


              
              <View style={{padding:20}}>
                   <Text style={{ fontSize:20,  fontWeight:"900",resizeMode: 'cover', color:'black',textAlign:'center'}}>"B" INVENTORY DETAILS :</Text>       
                   </View>
                   <View style={{padding:6}}>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >VSL No    : </Text>  </Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >Model    : </Text>  </Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >Variant Color  : </Text> </Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >MU No   : </Text>  </Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >Mfg No  : </Text> </Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >Chassis No   : </Text>  </Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >Engine No  : </Text> </Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >Key No   : </Text>  </Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >Battery Make   : </Text> </Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >Battery No   : </Text>  </Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >FR Tyre No  : </Text> </Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >RR Tyre No : </Text> </Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >Location : </Text> </Text>
              </View>

              <View style={{ width: '100%',  height: 1,backgroundColor: 'black',  marginVertical: 10,}} />


              <View style={{padding:20}}>  
              <Text style={{ fontSize:20,  fontWeight:"900",resizeMode: 'cover', color:'black',textAlign:'center'}}>"C" INSURANCE DETAILS :</Text> 
                   </View>
                   <View style={{padding:6}}>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >Policy No    : </Text> None</Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >Name Of Nominee    : </Text>None</Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >Date Of Birth Of Nominee    : </Text>None</Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >Relation With Nominee   : </Text>None</Text>
              </View>

              <View style={{ width: '100%',  height: 1,backgroundColor: 'black',  marginVertical: 10,}} />


        {/* one row to input field start */}
    
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
    <View style={{ flex: 1, marginRight: 10 }}>
        <Text style={{ fontWeight: '600', fontSize: 15, marginTop: 0, color: 'black' }}>Insurance company name* :</Text>
        <TextInput
            style={{
                borderColor: 'gray',
                color: 'black',
                width: '100%',
                borderWidth: 1,
                borderRadius: 10,
                padding: 10,
            }}
            value={insurance_company_name}
            onChangeText={text => setInsurance_company_name(text)}
        />
    </View>

    <View style={{ flex: 1 }}>
        <Text style={{ fontWeight: '600', fontSize: 15, marginTop: 0, color: 'black' }}>Insurance cover note no* :</Text>
        <TextInput
            style={{
                borderColor: 'gray',
                color: 'black',
                width: '100%',
                borderWidth: 1,
                borderRadius: 10,
                padding: 10,
            }}
            value={insuranc_cover_note_no}
            onChangeText={text => setInsuranc_cover_note_no(text)}
        />
    </View>
</View>

 {/* one row to input field end */}


        
<TouchableOpacity onPress={()=>{
  showDatePicker2()
}}>
<View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>


            <Text style={{fontWeight:600,fontSize:15,marginTop:0,color:'black',}}>
            Date of insurance*</Text>

          

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
            Date of insurance expiry*</Text>

          

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


   



<View style={{ width: '80%',  height: 1,backgroundColor: 'black',  marginVertical: 10,}} />


              <View style={{padding:20}}>  
              <Text style={{ fontSize:20,  fontWeight:"900",resizeMode: 'cover', color:'black',textAlign:'center'}}>"D" REGISTRATION DETAILS :</Text> 
                   </View>
                   <View style={{padding:6}}>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >Name     : </Text>  Vaibhav Sham Aswale</Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >Address     : </Text>Sajani Hatkanangle Kolhapur Kolhapur None Shahu Nagar Kolhapur Kolhapur Maharashtra</Text>
              </View>

              <View style={{ width: '100%',  height: 1,backgroundColor: 'black',  marginVertical: 10,}} />


<View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
    <View style={{ flex: 1, marginRight: 10 }}>
        <Text style={{ fontWeight: '600', fontSize: 15, marginTop: 0, color: 'black' }}>Registration no :</Text>
        <TextInput
            style={{
                borderColor: 'gray',
                color: 'black',
                width: '100%',
                borderWidth: 1,
                borderRadius: 10,
                padding: 10,
            }}
            value={registration_no}
            onChangeText={text => registration_no(text)}
        />
    </View>

    
</View>


<View style={{ width: '80%',  height: 1,backgroundColor: 'black',  marginVertical: 10,}} />


              <View style={{padding:20}}>  
              <Text style={{ fontSize:20,  fontWeight:"900",resizeMode: 'cover', color:'black',textAlign:'center'}}>"E" HYPOTHECATION :</Text> 
                   </View>
                   <View style={{padding:6}}>
                   <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >FINANCE DONE BY     : </Text>  Indisuland Finance</Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >BANK OF FINANCE     : </Text>None</Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >FINANCE AMOUNT     : </Text>0</Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >EMI     : </Text>  0</Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >TENURE IN MONTHS     : </Text>None</Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >MARGIN MONEY     : </Text> None</Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >LOAN ROI      : </Text>None</Text>
              </View>

              <View style={{ width: '100%',  height: 1,backgroundColor: 'black',  marginVertical: 10,}} />





              <View style={{ width: '100%',  height: 1,backgroundColor: 'black',  marginVertical: 10,}} />


<View style={{padding:20}}>  
<Text style={{ fontSize:20,  fontWeight:"900",resizeMode: 'cover', color:'black',textAlign:'center'}}>"F" DELIVERY DETAILS :</Text> 
     </View>
     <View style={{padding:6}}>
     
     <View style={{marginTop:20,flexDirection:'row',marginBottom:0}}>
    <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          color='black'
          onPress={() => {
            setChecked(!checked);
          }}
        />
        <Text style={{fontWeight:600,fontSize:15,marginTop:7,color:'black',}}> Order booking form</Text>
    </View>


    <View style={{marginTop:20,flexDirection:'row',marginBottom:0}}>
    <Checkbox
          status={checked2 ? 'checked' : 'unchecked'}
          color='black'
          onPress={() => {
            setChecked2(!checked2);
          }}
        />
        <Text style={{fontWeight:600,fontSize:15,marginTop:7,color:'black',}}>Receipts</Text>
    </View>


    <View style={{marginTop:20,flexDirection:'row',marginBottom:0}}>
    <Checkbox
          status={checked3 ? 'checked' : 'unchecked'}
          color='black'
          onPress={() => {
            setChecked3(!checked3);
          }}
        />
        <Text style={{fontWeight:600,fontSize:15,marginTop:7,color:'black',}}>Sales letter copy</Text>
    </View>

    <View style={{marginTop:20,flexDirection:'row',marginBottom:0}}>
    <Checkbox
          status={checked4 ? 'checked' : 'unchecked'}
          color='black'
          onPress={() => {
            setChecked4(!checked4);
          }}
        />
        <Text style={{fontWeight:600,fontSize:15,marginTop:7,color:'black',}}>Invoice copy</Text>
    </View>

    <View style={{marginTop:20,flexDirection:'row',marginBottom:0}}>
    <Checkbox
          status={checked5 ? 'checked' : 'unchecked'}
          color='black'
          onPress={() => {
            setChecked5(!checked5);
          }}
        />
        <Text style={{fontWeight:600,fontSize:15,marginTop:7,color:'black',}}>Registration receipt</Text>
    </View>

    <View style={{marginTop:20,flexDirection:'row',marginBottom:0}}>
    <Checkbox
          status={checked6 ? 'checked' : 'unchecked'}
          color='black'
          onPress={() => {
            setChecked6(!checked6);
          }}
        />
        <Text style={{fontWeight:600,fontSize:15,marginTop:7,color:'black',}}>Statement of account</Text>
    </View>

    <View style={{marginTop:20,flexDirection:'row',marginBottom:0}}>
    <Checkbox
          status={checked7 ? 'checked' : 'unchecked'}
          color='black'
          onPress={() => {
            setChecked7(!checked7);
          }}
        />
        <Text style={{fontWeight:600,fontSize:15,marginTop:7,color:'black',}}>Delivery challan</Text>
    </View>


    <View style={{marginTop:20,flexDirection:'row',marginBottom:0}}>
    <Checkbox
          status={checked8 ? 'checked' : 'unchecked'}
          color='black'
          onPress={() => {
            setChecked8(!checked8);
          }}
        />
        <Text style={{fontWeight:600,fontSize:15,marginTop:7,color:'black',}}>Owners mannual given</Text>
    </View>


    <View style={{marginTop:20,flexDirection:'row',marginBottom:0}}>
    <Checkbox
          status={checked9 ? 'checked' : 'unchecked'}
          color='black'
          onPress={() => {
            setChecked9(!checked9);
          }}
        />
        <Text style={{fontWeight:600,fontSize:15,marginTop:7,color:'black',}}>Finance checklist</Text>
    </View>


    <View style={{marginTop:20,flexDirection:'row',marginBottom:0}}>
    <Checkbox
          status={checked10 ? 'checked' : 'unchecked'}
          color='black'
          onPress={() => {
            setChecked10(!checked10);
          }}
        />
        <Text style={{fontWeight:600,fontSize:15,marginTop:7,color:'black',}}>Bank hypothecation letter</Text>
    </View>


    <View style={{marginTop:20,flexDirection:'row',marginBottom:0}}>
    <Checkbox
          status={checked11 ? 'checked' : 'unchecked'}
          color='black'
          onPress={() => {
            setChecked11(!checked11);
          }}
        />
        <Text style={{fontWeight:600,fontSize:15,marginTop:7,color:'black',}}>Corporate documents</Text>
    </View>





</View>




<View style={{ width: '80%',  height: 1,backgroundColor: 'black',  marginVertical: 10,}} />


              <View style={{padding:20}}>  
              <Text style={{ fontSize:20,  fontWeight:"900",resizeMode: 'cover', color:'black',textAlign:'center'}}>"G" PAYMENT HISTORY :</Text> 
                   </View>
              

              <View style={{ width: '100%',  height: 1,backgroundColor: 'black',  marginVertical: 10,}} />





<View style={{padding:20}}>  
<Text style={{ fontSize:20,  fontWeight:"900",resizeMode: 'cover', color:'black',textAlign:'center'}}>"H" EXCHANGE DETAILS :</Text> 
     </View>
     <View style={{padding:6}}>
     <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >EXISTING CUSTOMER MODEL     : </Text>  None</Text>
<Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >EXISTING CUSTOMER VARIANT     : </Text>None</Text>
<Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >EXISTING VEHICLE YEAR  : </Text>0</Text>
<Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >CUSTOMER EXPECTED PRICE FOR EXISTING VEHICLE : </Text>  None</Text>
<Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >MARKET PRICE FOR EXISTING VEHICLE      : </Text>None</Text>
<Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >VALUATION FOR EXISTING VEHICLE   : </Text> None</Text>
</View>

<View style={{ width: '80%',  height: 1,backgroundColor: 'black',  marginVertical: 10,}} />


<View style={{ flex: 1 }}>
        <Text style={{ fontWeight: '600', fontSize: 15, marginTop: 0, color: 'black' }}>Value of old vehicle :</Text>
        <TextInput
            style={{
                borderColor: 'gray',
                color: 'black',
                width: '100%',
                borderWidth: 1,
                borderRadius: 10,
                padding: 10,
            }}
            value={value_of_oldvechical}
            onChangeText={text => setValue_of_oldvechical(text)}
        />
    </View>

    <View style={{ flex: 1 }}>
        <Text style={{ fontWeight: '600', fontSize: 15, marginTop: 0, color: 'black' }}>Exchange bonus :</Text>
        <TextInput
            style={{
                borderColor: 'gray',
                color: 'black',
                width: '100%',
                borderWidth: 1,
                borderRadius: 10,
                padding: 10,
            }}
            value={exchange_bonus}
            onChangeText={text => setExchange_bonus(text)}
        />
    </View>

    <View style={{ flex: 1 }}>
        <Text style={{ fontWeight: '600', fontSize: 15, marginTop: 0, color: 'black' }}>Total value :</Text>
        <TextInput
            style={{
                borderColor: 'gray',
                color: 'black',
                width: '100%',
                borderWidth: 1,
                borderRadius: 10,
                padding: 10,
            }}
            value={total_value}
            onChangeText={text => setTotal_value(text)}
        />
    </View>
    <View style={{ width: '100%',  height: 1,backgroundColor: 'black',  marginVertical: 10,}} />




    <View style={{padding:20}}>
                   <Text style={{ fontSize:20,  fontWeight:"900",resizeMode: 'cover', color:'black',textAlign:'center'}}>"I" DSA :</Text>       
                   </View>


              <View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>
            <Text style={{fontWeight:600,fontSize:15,marginTop:0,color:'black',}}>
            Dsa :</Text>
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
          placeholder={!isFocus ? 'Select Dsa' : '...'}
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




<View style={{padding:20}}>
                   <Text style={{ fontSize:20,  fontWeight:"900",resizeMode: 'cover', color:'black',textAlign:'center'}}>Dsa brokerage</Text>       
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
            value={policy_number}
            onChangeText={text => setPolicy_number(text)}
        />
    </View>
    </View>

    <View style={{ width: '100%',  height: 1,backgroundColor: 'black',  marginVertical: 10,}} />


    <View style={{padding:20}}>  
<Text style={{ fontSize:20,  fontWeight:"900",resizeMode: 'cover', color:'black',textAlign:'center'}}>"J" FINAL PAYMENT DETAILS :</Text> 
     </View>
     <View style={{padding:6}}>
     <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >Ex-Showroom Price    : </Text>  Rs.81571/-</Text>
</View>



<View style={{ width: '80%',  height: 1,backgroundColor: 'black',  marginVertical: 10,}} />




     <View style={{padding:6}}>
     <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >Invoice Amount      : </Text>  Rs.107054/-</Text>
<Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >Discount   : </Text>Rs.0/-</Text>
<Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >Payment Received   : </Text>Rs.0/-</Text>
<Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >Extra Or Short: </Text>  Rs.None /-</Text>
</View>

<View style={{ width: '80%',  height: 1,backgroundColor: 'black',  marginVertical: 10,}} />







        {/* one row to input field start */}

    
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
    <View style={{ flex: 1, marginRight: 10 }}>
        <Text style={{ fontWeight: '600', fontSize: 15, marginTop: 0, color: 'black' }}>Invoice amount :</Text>
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
        <Text style={{ fontWeight: '600', fontSize: 15, marginTop: 0, color: 'black' }}>Less Finance Amount :</Text>
        <TextInput
            style={{
                borderColor: 'gray',
                color: 'black',
                width: '100%',
                borderWidth: 1,
                borderRadius: 10,
                padding: 10,
            }}
            value={less_finance_amount}
            onChangeText={text => setLess_finance_amount(text)}
        />
    </View>
</View>

 {/* one row to input field end */}



        {/* one row to input field start */}

    
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
    <View style={{ flex: 1, marginRight: 10 }}>
        <Text style={{ fontWeight: '600', fontSize: 15, marginTop: 0, color: 'black' }}>Add Margin Amount :</Text>
        <TextInput
            style={{
                borderColor: 'gray',
                color: 'black',
                width: '100%',
                borderWidth: 1,
                borderRadius: 10,
                padding: 10,
            }}
            value={add_margin_amount}
            onChangeText={text => setAdd_margin_amount(text)}
        />
    </View>

    <View style={{ flex: 1 }}>
        <Text style={{ fontWeight: '600', fontSize: 15, marginTop: 0, color: 'black' }}>Add Appron Charges:</Text>
        <TextInput
            style={{
                borderColor: 'gray',
                color: 'black',
                width: '100%',
                borderWidth: 1,
                borderRadius: 10,
                padding: 10,
            }}
            value={add_aporon_charge}
            onChangeText={text => setAdd_aporon_charge(text)}
        />
    </View>
</View>

 {/* one row to input field end */}

 <View style={{ flex: 1 }}>
        <Text style={{ fontWeight: '600', fontSize: 15, marginTop: 0, color: 'black' }}>Total:</Text>
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




    <View style={{ width: '100%',  height: 1,backgroundColor: 'black',  marginVertical: 10,}} />

 <View style={{padding:20}}>
                   <Text style={{ fontSize:20,  fontWeight:"900",resizeMode: 'cover', color:'black',textAlign:'center'}}> "K" DMS DETAILS </Text>       
                   </View>
                   

        {/* one row to input field start */}

    
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
    <View style={{ flex: 1, marginRight: 10 }}>
        <Text style={{ fontWeight: '600', fontSize: 15, marginTop: 0, color: 'black' }}>DMS customer id</Text>
        <TextInput
            style={{
                borderColor: 'gray',
                color: 'black',
                width: '100%',
                borderWidth: 1,
                borderRadius: 10,
                padding: 10,
            }}
            value={dms_customer_id}
            onChangeText={text => setDms_customer_id(text)}
        />
    </View>

    <View style={{ flex: 1 }}>
        <Text style={{ fontWeight: '600', fontSize: 15, marginTop: 0, color: 'black' }}>DMS enquiry no :</Text>
        <TextInput
            style={{
                borderColor: 'gray',
                color: 'black',
                width: '100%',
                borderWidth: 1,
                borderRadius: 10,
                padding: 10,
            }}
            value={dms_enquiry_no}
            onChangeText={text => setDms_enquiry_no(text)}
        />
    </View>
</View>

 {/* one row to input field end */}

   {/* one row to input field start */}

    
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
    <View style={{ flex: 1, marginRight: 10 }}>
        <Text style={{ fontWeight: '600', fontSize: 15, marginTop: 0, color: 'black' }}>DMS allotment no</Text>
        <TextInput
            style={{
                borderColor: 'gray',
                color: 'black',
                width: '100%',
                borderWidth: 1,
                borderRadius: 10,
                padding: 10,
            }}
            value={dms_allotment_no}
            onChangeText={text => setDms_allotment_no(text)}
        />
    </View>

    <View style={{ flex: 1 }}>
        <Text style={{ fontWeight: '600', fontSize: 15, marginTop: 0, color: 'black' }}>DMS booking no :</Text>
        <TextInput
            style={{
                borderColor: 'gray',
                color: 'black',
                width: '100%',
                borderWidth: 1,
                borderRadius: 10,
                padding: 10,
            }}
            value={dms_booking_no}
            onChangeText={text => setDms_booking_no(text)}
        />
    </View>
</View>

 {/* one row to input field end */}



    {/* one row to input field start */}

    
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
    <View style={{ flex: 1, marginRight: 10 }}>
        <Text style={{ fontWeight: '600', fontSize: 15, marginTop: 0, color: 'black' }}>DMS invoice no</Text>
        <TextInput
            style={{
                borderColor: 'gray',
                color: 'black',
                width: '100%',
                borderWidth: 1,
                borderRadius: 10,
                padding: 10,
            }}
            value={dms_invoice_no}
            onChangeText={text => setDms_invoice_no(text)}
        />
    </View>

    <View style={{ flex: 1 }}>
        

    <TouchableOpacity onPress={()=>{
  showDatePicker2()
}}>
<View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>


            <Text style={{fontWeight:600,fontSize:15,marginTop:0,color:'black',}}>
            DMS invoice date :</Text>

          

        </View>
        <TextInput style={{ borderColor: "gray",color:'black',
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,}} 
    value={selectedDate4} />

      </TouchableOpacity>


      <DateTimePickerModal
        isVisible={isDatePickerVisible2}
        mode="date"
        onConfirm={handleDateConfirm4}
        onCancel={hideDatePicker4}
      />



    </View>
</View>

 {/* one row to input field end */}


 <View style={{ width: '100%',  height: 1,backgroundColor: 'black',  marginVertical: 10,}} />

 
<View style={{padding:20}}>  
<Text style={{ fontSize:20,  fontWeight:"900",resizeMode: 'cover', color:'black',textAlign:'center'}}>"L" REMARKS :</Text> 
     </View>
     <View style={{padding:6}}>
     <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >SALES EXECUTIVE REMARKS    : </Text>  customer process complete zali ( gidvani Kolhapur )</Text>
<Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >DEALER REMARKS   : </Text>  </Text>
</View>

<View style={{ width: '100%',  height: 1,backgroundColor: 'black',  marginVertical: 10,}} />

<View style={{ flex: 1, marginRight: 10 }}>
        <Text style={{ fontWeight: '600', fontSize: 15, marginTop: 0, color: 'black' }}>Remarks</Text>
        <TextInput
            style={{
                borderColor: 'gray',
                color: 'black',
                width: '100%',
                borderWidth: 1,
                borderRadius: 10,
                padding: 10,
            }}
            value={remark}
            onChangeText={text => setRemark(text)}
        />
    </View>


    <View style={{marginTop:20,flexDirection:'row',marginBottom:0}}>
    <Checkbox
          status={checked00 ? 'checked' : 'unchecked'}
          color='black'
          onPress={() => {
            setChecked00(!checked00);
          }}
        />
        <Text style={{fontWeight:600,fontSize:15,marginTop:7,color:'black',}}> Is cancelled</Text>
    </View>



    <View style={{ flex: 1, marginRight: 10 }}>
        <Text style={{ fontWeight: '600', fontSize: 15, marginTop: 0, color: 'black' }}>Sales executive cancellation remarks</Text>
        <TextInput
            style={{
                borderColor: 'gray',
                color: 'black',
                width: '100%',
                borderWidth: 1,
                borderRadius: 10,
                padding: 10,
            }}
            value={sales_remark}
            onChangeText={text => setSales_remark(text)}
        />
    </View>

    <View style={{ flex: 1, marginRight: 10 }}>
        <Text style={{ fontWeight: '600', fontSize: 15, marginTop: 0, color: 'black' }}>Dealer cancellation remarks</Text>
        <TextInput
            style={{
                borderColor: 'gray',
                color: 'black',
                width: '100%',
                borderWidth: 1,
                borderRadius: 10,
                padding: 10,
            }}
            value={delar_remark}
            onChangeText={text => setDelar_remark(text)}
        />
    </View>


    <View style={{ width: '100%',  height: 1,backgroundColor: 'black',  marginVertical: 10,}} />
                   

                   <View style={{flexDirection:'row',marginTop:20}}>
             <Text style={{resizeMode: 'cover', color:'black',textAlign:'center' }} ></Text>
             <Button title="Submit" />
             </View>
   


             </View>

</View>

   
   </ScrollView>
   
  );


}
export default edit_doket

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