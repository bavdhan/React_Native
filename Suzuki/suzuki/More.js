import React, {  Component, useEffect, useState,setState, useMemo ,useCallback } from 'react';
import { Alert, Button, TextInput,View,Image,Modal,Text,Pressable,StatusBar,SafeAreaView,StyleSheet,navigation,FlatList,navigate,ScrollView } from 'react-native'
import { Link } from '@react-navigation/native';
import 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LoginScreen from './LoginScreen';


import home3 from './home3';
import leadcrm from './leadcrm';
import product from './product';
import followup from './followup';
import Inventory from './Inventory';
import buisness from './buisness';
import staff from './staff';
import report from './report';
import master from './master';

import test_page1 from './test_page1';
import test_page2 from './test_page2';
import dnavigator from './dnavigator';


function More( navigation)  {
  return(
    <ScrollView style={{marginTop:0,backgroundColor:'white'}}> 

      <View  style={{ marginLeft: 20,marginTop:13, }}>
        <View  style={{flexDirection:'row', margin:20, }}>
 <Image
  source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxGhXTEp-G9Z1SBNez2KK6gAeeIbMfRgz-FQ&usqp=CAU',
}}
  style={{width: 90, height: 90}}
/>

      <View style={{ marginLeft:15,}} >
      <Text  style={{fontWeight:600,fontSize:18, marginTop:13,color:'black',}}>Abhi Pisal</Text>
      <View style={{flexDirection:'row',marginTop:13,}}>
      <Ionicons name="ribbon" size={25} color="black" />

      <Text  style={{fontWeight:400,fontSize:14,color:'black', }}>Admin</Text>
      </View>
      </View>
        </View>
        </View>


        <View style={{flex: 1, height: 1, backgroundColor: '#c0c0c0', marginTop:25,marginLeft:30,marginRight:30,marginBottom:30,}} />


<View style={{marginLeft:30,marginTop:10}}>

<View style={{ marginTop:30}}>
    <Link to={{ screen: 'home3', params: { id: 'home3' } }}  style={{}}>
    <Ionicons name="home-sharp" size={25} color="blue" />

  <Text style={{ fontWeight:400,fontSize:14, marginBottom:5,color:'black',}}>     Dashboard</Text>       
    </Link>
    </View>

    <View style={{ marginTop:10}}>
    <Link to={{ screen: 'leadcrm', params: { id: 'leadcrm' } }}  style={{}}>
    <Ionicons name="people-circle-outline" size={25} color="blue" />
  <Text style={{ fontWeight:400,fontSize:14, marginBottom:5,color:'black',}}>     Lead CRM</Text>       
    </Link>
    </View>

    <View style={{ marginTop:10}}>
    <Link to={{ screen: 'followup', params: { id: 'followup' } }}  style={{}}>
    <Ionicons name="tablet-portrait-sharp" size={25} color="blue" />
     <Text style={{ fontWeight:400,fontSize:14, marginBottom:5,color:'black',}}>     Follow Ups</Text>       
    </Link>
    </View>
    <View style={{ marginTop:10}}>
    <Link to={{ screen: 'Inventory', params: { id: 'Inventory' } }}  style={{}}>
    <Ionicons name="receipt" size={25} color="blue" />
      <Text style={{ fontWeight:400,fontSize:14, marginBottom:5,color:'black',}}>     Inventory</Text>       
    </Link>
    </View>

    <View style={{ marginTop:10}}>
    <Link to={{ screen: 'product', params: { id: 'product' } }}  style={{}}>
    <Ionicons name="bicycle" size={25} color="blue" />
     <Text style={{ fontWeight:400,fontSize:14, marginBottom:5,color:'black',}}>     Product</Text>       
    </Link>
    </View>

    <View style={{ marginTop:10}}>
    <Link to={{ screen: 'buisness', params: { id: 'buisness' } }}  style={{}}>
    <Ionicons name="bag-sharp" size={25} color="blue" />
     <Text style={{ fontWeight:400,fontSize:14, marginBottom:5,color:'black',}}>     Buisness</Text>       
    </Link>
    </View>

    <View style={{ marginTop:10}}>
    <Link to={{ screen: 'test_page1', params: { id: 'test_page1' } }}  style={{}}>
    <Ionicons name="bag-sharp" size={25} color="blue" />
     <Text style={{ fontWeight:400,fontSize:14, marginBottom:5,color:'black',}}>     test_page1</Text>       
    </Link>
    </View>

    <View style={{ marginTop:10}}>
    <Link to={{ screen: 'test_page2', params: { id: 'test_page2' } }}  style={{}}>
    <Ionicons name="bag-sharp" size={25} color="blue" />
     <Text style={{ fontWeight:400,fontSize:14, marginBottom:5,color:'black',}}>     test_page2</Text>       
    </Link>
    </View>
    
</View>

<View style={{flex: 1, height: 1, backgroundColor: '#c0c0c0', marginTop:25,marginLeft:30,marginRight:30,marginBottom:30,}} />

<View style={{marginLeft:30,marginTop:0}}>

<View style={{ marginTop:0}}>
    <Link to={{ screen: 'staff', params: { id: 'staff' } }}  style={{}}>
    <Ionicons name="people-sharp" size={25} color="blue" />

  <Text style={{ fontWeight:400,fontSize:14, marginBottom:5,color:'black',}}>     Staff</Text>       
    </Link>
    </View>

    <View style={{ marginTop:0}}>
    <Link to={{ screen: 'master', params: { id: 'master' } }}  style={{}}>
    <Ionicons name="sparkles" size={25} color="blue" />

  <Text style={{ fontWeight:400,fontSize:14, marginBottom:5,color:'black',}}>     Master</Text>       
    </Link>
    </View>

 

   

    <View style={{ marginTop:10}}>
    <Link to={{ screen: 'report', params: { id: 'report' } }}  style={{}}>
    <Ionicons name="reader-sharp" size={25} color="blue" />
     <Text style={{ fontWeight:400,fontSize:14, marginBottom:5,color:'black',}}>     Report</Text>       
    </Link>
    </View>



    <View style={{ marginTop:10}}>
    <Link to={{ screen: 'dnavigator', params: { id: 'dnavigator' } }}  style={{}}>
    <Ionicons name="reader-sharp" size={25} color="blue" />
     <Text style={{ fontWeight:400,fontSize:14, marginBottom:5,color:'black',}}>     Report</Text>       
    </Link>
    </View>
    

</View>

<View style={{flex: 1, height: 1, backgroundColor: '#c0c0c0', marginTop:25,marginLeft:30,marginRight:30,marginBottom:30,}} />

<View style={{marginLeft:30,marginTop:0}}>

 

    <View style={{ marginTop:10}}>
    <Link to={{ screen: '', params: { id: '' } }}  style={{}}>
    <Ionicons name="server" size={25} color="blue" />
     <Text style={{ fontWeight:400,fontSize:14, marginBottom:5,color:'black',}}>     Privacy & Policy</Text>       
    </Link>
    </View>

    <View style={{ marginTop:10}}>
    <Link to={{ screen: '', params: { id: '' } }}  style={{}}>
    <Ionicons name="at-circle" size={25} color="blue" />
      <Text style={{ fontWeight:400,fontSize:14, marginBottom:5,color:'black',}}>     About Suzuki</Text>       
    </Link>
    </View>


    <View style={{ marginTop:10 , marginBottom:25}}>
    <Link to={{ screen: 'LoginScreen', params: { id: 'LoginScreen' } }}  style={{}}>
    <Ionicons name="log-in-outline" size={25} color="blue" />
     <Text style={{ fontWeight:400,fontSize:14, marginBottom:5,color:'black',}}>     Logout</Text>       
    </Link>
    </View>
</View>

 </ScrollView>
  );


}
export default More