import { useState, useEffect, useRef } from 'react';
import { Text, View, Button, Platform,Image,TouchableOpacity,StyleSheet } from 'react-native';

import { Link } from '@react-navigation/native';

import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ehome from './suzuki/ehome';
import createenquiry from './suzuki/createenquiry';
import leadFollowup from './suzuki/leadFollowup';
import catagoriesModel from './suzuki/catagoriesModel';
import followup from './suzuki/followup';
import Inventory from './suzuki/Inventory';
import buisness from './suzuki/buisness';
import staff from './suzuki/staff';
import report from './suzuki/report';
import SplashScreen from './suzuki/SplashScreen';
import LoginScreen from './suzuki/LoginScreen';
import add_staff from './suzuki/add_staff';
import create_bike_inventory from './suzuki/create_bike_inventory';
import master from './suzuki/master';
import create_booking from './suzuki/create_booking';
import pement from './suzuki/pement';
import add_new_pement from './suzuki/add_new_pement';
import edit_booking from './suzuki/edit_booking';
import edit_doket from './suzuki/edit_doket';
import prospectform_detail from './suzuki/prospectform_detail';
import bikewise_variant from './suzuki/bikewise_variant';
import create_variant from './suzuki/create_variant';
import create_model from './suzuki/create_model';
import add_new_followup from './suzuki/add_new_followup';
import enquiry_offer from './suzuki/enquiry_offer';
import closure_offer from './suzuki/closure_offer';
import achivers from './suzuki/achivers';

import test_page1 from './suzuki/test_page1';
import test_page2 from './suzuki/test_page2';
import dnavigator from './suzuki/dnavigator';


const Stack= createNativeStackNavigator();




export default function App() {



  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SplashScreen'  screenOptions={{
     }}>


<Stack.Screen name="SplashScreen" component={SplashScreen}   options={{ headerShown: false }} />
<Stack.Screen name="LoginScreen" component={LoginScreen}   options={{ headerShown: false }} />


    
    <Stack.Screen name='ehome' component={ehome}  options={{
      headerLeft:()=>(
        <View style={{ flexDirection: 'row', marginTop:0,
              backgroundColor:'black',borderWidth: 0,width:'100%'
             }}>


                <Image 
                 style={{
                  resizeMode: 'cover',
                  height: 40,
                  width: 60,
                  marginLeft: 50,
                  marginTop:40,
                  marginBottom:20,
                }}
                source={require('./assets/suzukimainlogo.png')} 
                />

<TouchableOpacity      style={{marginLeft: 180, top:40,marginRight: 50,flexDirection:'row'}}>
<Link to={{ screen: 'LoginScreen', params: { id: 'LoginScreen' } }}  style={{}}>
<Icon name="login" size={40} color="white" />

</Link>

</TouchableOpacity>

                </View>
      )
    }}/>


<Stack.Screen name='createenquiry' component={createenquiry} options={{
}} />

<Stack.Screen name='leadFollowup' component={leadFollowup} options={{
}} />

<Stack.Screen name='catagoriesModel' component={catagoriesModel} options={{
}} />

<Stack.Screen name='followup' component={followup} options={{
}} />



<Stack.Screen name='Inventory' component={Inventory} options={{
}} />

<Stack.Screen name='buisness' component={buisness} options={{
}} />

<Stack.Screen name='staff' component={staff} options={{
}} />

<Stack.Screen name='report' component={report} options={{
}} />

<Stack.Screen name='master' component={master} options={{
}} />

<Stack.Screen name='create_booking' component={create_booking} options={{
}} />

<Stack.Screen name='create_variant' component={create_variant} options={{
}} />

<Stack.Screen name='create_model' component={create_model} options={{
}} />


<Stack.Screen name='add_new_followup' component={add_new_followup} options={{
}} />


<Stack.Screen name='enquiry_offer' component={enquiry_offer} options={{
}} />

<Stack.Screen name='closure_offer' component={closure_offer} options={{
}} />

<Stack.Screen name='achivers' component={achivers} options={{
}} />





<Stack.Screen name='pement' component={pement} options={{
}} />

<Stack.Screen name='add_new_pement' component={add_new_pement} options={{
}} />

<Stack.Screen name='edit_doket' component={edit_doket} options={{
}} />

<Stack.Screen name='prospectform_detail' component={prospectform_detail} options={{
}} />

<Stack.Screen name='bikewise_variant' component={bikewise_variant} options={{
}} />



<Stack.Screen name='edit_booking' component={edit_booking} options={{
}} />

<Stack.Screen name='add_staff' component={add_staff} options={{
}} />

<Stack.Screen name='create_bike_inventory' component={create_bike_inventory} options={{
}} />

<Stack.Screen name='test_page1' component={test_page1} options={{
}} />

<Stack.Screen name='test_page2' component={test_page2} options={{
}} />


<Stack.Screen name='dnavigator' component={dnavigator} options={{
}} />

      </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  text:{
    fontWeight:400,fontSize:15,color:'white',marginLeft: 5,
  }
 
});