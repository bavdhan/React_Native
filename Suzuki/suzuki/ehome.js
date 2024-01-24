import React, { Component, useEffect, useState,setState } from 'react';
import { Alert, Button, TextInput,View,Image, Text,SafeAreaView,StyleSheet,navigation,FlatList,navigate,ScrollView } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import home3 from './home3';
import leadcrm from './leadcrm';
import report from './report';
import More from './More';
import product from './product';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function ehome( navigation)  {
  return(
    <Tab.Navigator>
        <Tab.Screen name="home3" component={home3}  options={{
           headerShown:false ,
           tabBarLabel: ({ focused, color, size }) => (
            <Text style={{ fontSize: 14, color: focused ? 'blue' : 'black' }}>
              Home
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-sharp" size={25} color="black" />
          ),
         
        }} />
          <Tab.Screen name="leadcrm" component={leadcrm}options={{
              headerShown:false ,
              tabBarLabel: ({ focused, color, size }) => (
                <Text style={{ fontSize: 14, color: focused ? 'blue' : 'black' }}>
                  Lead CRM
                </Text>
              ),
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people-circle-outline" size={25} color="black" />
          ),
         
        }} />
        <Tab.Screen name="product" component={product} options={{
              headerShown:false ,
              tabBarLabel: ({ focused, color, size }) => (
                <Text style={{ fontSize: 14, color: focused ? 'blue' : 'black' }}>
                  Product
                </Text>
              ),      
                  tabBarIcon: ({ color, size }) => (
            <Ionicons name="bicycle" size={25} color="black" />
          ),
         
        }}/>
      
        <Tab.Screen name="More" component={More}  options={{
              headerShown:false ,
              tabBarLabel: ({ focused, color, size }) => (
                <Text style={{ fontSize: 14, color: focused ? 'blue' : 'black' }}>
                  More
                </Text>
              ),       
                 tabBarIcon: ({ color, size }) => (
            <Ionicons name="ellipsis-horizontal" size={25} color="black" />
          ),
         
        }} />

        
      </Tab.Navigator>
  );


}
export default ehome