import React, { Component, useEffect, useState,setState } from 'react';
import { Alert, Button, TextInput,View,Image, Text,SafeAreaView,StyleSheet,navigation,FlatList,navigate,ScrollView } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import allstaff from './allstaff';
import salesExicutive from './salesExicutive';
import officeStaff from './officeStaff';
import salesStaffpermission from './salesStaffpermission';
import officestaffpermission from './officestaffpermission';
import closure_offer from './closure_offer';
import enquiry_offer from './enquiry_offer';
import achivers from './achivers';

const Tab = createMaterialTopTabNavigator();

function staff( navigation)  {
  return(
    <Tab.Navigator screenOptions={{
        tabBarActiveTintColor: 'blue', 
        tabBarScrollEnabled: true, height:58,
        animationEnabled:false,
        swipeEnabled:false,
        
        tabBarItemStyle: {
          width: 'auto',
          alignItems: 'flex-start',
        },
        tabBarLabelStyle: {
          fontSize: 15,
          height: 30,
          marginTop:10,
          fontWeight:"900",
        },
        
      }}>

        
      <Tab.Screen name='allstaff' component={allstaff}   options={{
          tabBarLabel: 'All Staff',
        }}/>
<Tab.Screen name='salesExicutive' component={salesExicutive}  options={{
          tabBarLabel: 'Sales Exicutive',
        }} />

<Tab.Screen name='officeStaff' component={officeStaff}   options={{
          tabBarLabel: 'Office Staff',
        }}/>

<Tab.Screen name='salesStaffpermission' component={salesStaffpermission}   options={{
          tabBarLabel: 'Sales Permission',
        }}/>

<Tab.Screen name='officestaffpermission' component={officestaffpermission}   options={{
          tabBarLabel: 'Office Permission',
        }}/>
 
 <Tab.Screen name='closure_offer' component={closure_offer}   options={{
          tabBarLabel: 'Closure Offer',
        }}/>
 
 <Tab.Screen name='enquiry_offer' component={enquiry_offer}   options={{
          tabBarLabel: 'Enquiry Offer',
        }}/>
 
 <Tab.Screen name='achivers' component={achivers}   options={{
          tabBarLabel: 'Achivers',
        }}/>
 

 




      </Tab.Navigator>
  );


}
export default staff