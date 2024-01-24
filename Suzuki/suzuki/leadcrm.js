import React, { Component, useEffect, useState,setState } from 'react';
import { Alert, Button, TextInput,View,Image, Text,SafeAreaView,StyleSheet,navigation,FlatList,navigate,ScrollView } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import MainLeadcrm from './MainLeadcrm';
import booking_lead from './booking_lead';


const Tab = createMaterialTopTabNavigator();

function leadcrm( navigation)  {
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

      <Tab.Screen name='MainLeadcrm' component={MainLeadcrm}   options={{
          tabBarLabel: 'Lead CRM',
        }}/>

      <Tab.Screen name='booking_lead' component={booking_lead}   options={{
          tabBarLabel: 'Booking Lead',
        }}/>

      </Tab.Navigator>
  );


}
export default leadcrm