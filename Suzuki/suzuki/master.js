import React, { Component, useEffect, useState,setState } from 'react';
import { Alert, Button, TextInput,View,Image, Text,SafeAreaView,StyleSheet,navigation,FlatList,navigate,ScrollView } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import enquirysource from './enquirysource';
import enquirystatus from './enquirystatus';
import enquirytype from './enquirytype';
import proffesion from './proffesion';
import bankers from './bankers';
import finance from './finance';

const Tab = createMaterialTopTabNavigator();

function master( navigation)  {
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
      <Tab.Screen name='enquirysource' component={enquirysource}  options={{
          tabBarLabel: 'Enqiry Source',
        }} />

<Tab.Screen name='enquirytype' component={enquirytype}   options={{
          tabBarLabel: 'Enqiry Type',
        }}/>

<Tab.Screen name='proffesion' component={proffesion}   options={{
          tabBarLabel: 'Proffesion',
        }}/>
 <Tab.Screen name='enquirystatus' component={enquirystatus}  options={{
          tabBarLabel: 'Enquiry Status',
        }}/>

<Tab.Screen name='bankers' component={bankers}   options={{
          tabBarLabel: 'Bankers',
        }}/>
 <Tab.Screen name='finance' component={finance}  options={{
          tabBarLabel: 'Finance',
        }}/>


 
        
      </Tab.Navigator>
  );


}
export default master