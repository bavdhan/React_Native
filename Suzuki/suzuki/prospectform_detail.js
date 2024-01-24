import React, { Component, useEffect, useState,setState } from 'react';
import { Alert, Button, TextInput,View,Image,Modal, Text,SafeAreaView,StyleSheet,navigation,FlatList,navigate,ScrollView,DatePickerAndroid, TimePickerAndroid, TouchableOpacity  } from 'react-native'
import 'react-native-gesture-handler';



function prospectform_detail({ navigation })  {


    
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
        <Text style={{ fontSize:18,  fontWeight:"600",resizeMode: 'cover', color:'blue',textAlign:'center'}}>GAURAV SANJAY RAORANE
 
 </Text>  
    </View>


    <View style={{padding:20}}>
                   </View>
                   <View style={{padding:6}}>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >created_at  : </Text>  	Nov. 7, 2023, 9:17 a.m.</Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >first_name : </Text>GAURAV</Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >middle_name  : </Text>  SANJAY</Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >last_name  : </Text>  RAORANE</Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >enquiry_type  : </Text>  INDIVIDUAL</Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >status  : </Text>    </Text> 
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >gender  : </Text> MALE </Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >test_ride_time  : </Text>    </Text>  

              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >test_ride_kilometers  : </Text>  	</Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >mobile : </Text>9067569252</Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >sales_executive  : </Text>  	TEJAS SANDIP SAWANT</Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >email_id  : </Text>  None</Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >pincode  : </Text>  416810</Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >city  : </Text>  ACHIRNE  </Text> 
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >taluka  : </Text> VAIBHAVWADI </Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >district  : </Text> SINDHUDURG   </Text> 

              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >state  : </Text> MAHARASHTRA 	</Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >age : </Text>  </Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >profession  : </Text>  	TSALARIED PRIVATE</Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >selected_bike  : </Text>  ACCESS 125</Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >selected_varient  : </Text>  None</Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >selected_color  : </Text>  	MATTE BLACK  </Text> 
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >profile  : </Text>   </Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >old_vehicle  : </Text> None   </Text> 

              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >other_models_in_consideration  : </Text>   	</Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >any_competitor_model_test_ride_taken : </Text>   </Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >points_liked  : </Text>  	 </Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >points_disliked  : </Text>  </Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >interested_in_testride  : </Text>  False</Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >testride_scheduled  : </Text>  	False  </Text> 
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >testride_date_and_time_preference  : </Text> None  </Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >testride_place_preference  : </Text> None   </Text> 

              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >exchange_required  : </Text>  False 	</Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >exchange_vehicle_loan_amount : </Text> None  </Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >exchange_vehicle_roi  : </Text>  None	 </Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >exchange_vehicle_emi  : </Text> None </Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >exchange_vehicle_margin_money  : </Text>  None</Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >exchange_vehicle_banker  : </Text>  	None  </Text> 
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >liked_dealer_reputation  : </Text> False  </Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >liked_brand  : </Text> False   </Text> 

              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >liked_product_features  : </Text>  False 	</Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >liked_recommendations : </Text> False  </Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >liked_service  : </Text>  False	 </Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >liked_product_availability  : </Text> False </Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >liked_value_for_money_offer  : </Text>  False</Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >specify_other_reasons_of_buying  : </Text>  	   </Text> 
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >disliked_dealer_reputation  : </Text> False  </Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >disliked_brand  : </Text> False   </Text>

              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >disliked_product_features  : </Text>  False 	</Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >disliked_recommendations : </Text> False  </Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >disliked_service  : </Text>  False	 </Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >disliked_product_availability  : </Text> False </Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >disliked_value_for_money_offer  : </Text>  False</Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >specify_other_reasons_of_not_buying  : </Text>  	   </Text> 
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >booking_date  : </Text> 	2023-11-10  </Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >booking_amount  : </Text> 0   </Text>

              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >expected_delivery_date  : </Text>  	Nov. 10, 2023 	</Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >actual_delivery_date : </Text> None  </Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >sales_manager_remarks  : </Text>  CUSTOMER LA FINANCE PROCESS KARAYCHI AAHE 10/11/2023 LA GADI GHYAYCHI AAHE.	 </Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >customer_rating  : </Text> 07 </Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >customer_review  : </Text>   </Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >features_and_benefits_explained  : </Text>  	   </Text> 
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >test_ride_taken  : </Text>  </Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >ease_availability_of_parts_explained  : </Text>    </Text>

              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >service_network_explained  : </Text>  	</Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >finance_options_explained : </Text>    </Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >expected_purchase_date  : </Text>  Nov. 10, 2023 </Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >dealer_remarks  : </Text>   </Text>
              <Text style={{marginBottom:6,color:'black',}}>  <Text style={{fontSize:15, fontWeight:"600", color:'black'}} >expected_delivery_date  : </Text>  	Nov. 10, 2023 </Text>
              </View>


   </View>
   </View>
   </ScrollView>
   
  );


}
export default prospectform_detail

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