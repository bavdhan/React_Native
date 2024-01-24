import React, { Component, useEffect, useState,setState } from 'react';
import { Alert, Button, TextInput,View,Image, Text,SafeAreaView,StyleSheet,navigation,FlatList,navigate,ScrollView } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Leadreport from './Leadreport';
import Salesreport from './Salesreport';

const Tab = createMaterialTopTabNavigator();

function report( navigation)  {
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
      <Tab.Screen name='Leadreport' component={Leadreport}   options={{
          tabBarLabel: '        Lead Report               ',
        }}/>
<Tab.Screen name='Salesreport' component={Salesreport}  options={{
          tabBarLabel: 'Sales Report',
        }} />


 
        
      </Tab.Navigator>
  );


}
export default report