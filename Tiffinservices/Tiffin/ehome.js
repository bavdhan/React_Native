import React, { Component, useEffect, useState,setState } from 'react';
import { Alert, Button, TextInput,View,Image, Text,SafeAreaView,StyleSheet,navigation,FlatList,navigate,ScrollView } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import home3 from './home3';
import specialmenu from './specialmenu';
import Notification from './Notification';
import History from './History';

import Ionicons from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();


function ehome( navigation)  {
  return(
    <Tab.Navigator>
        <Tab.Screen name="home3" component={home3}  options={{
           headerShown:false ,
           tabBarLabel: ({ focused, color, size }) => (
            <Text style={{ fontSize: 14, color: focused ? 'red' : 'black' }}>
              Home
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-sharp" size={25} color="black" />
          ),
         
        }} />
          <Tab.Screen name="specialmenu" component={specialmenu}options={{
              headerShown:false ,
              tabBarLabel: ({ focused, color, size }) => (
                <Text style={{ fontSize: 14, color: focused ? 'red' : 'black' }}>
                 Today Special
                </Text>
              ),
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people-circle-outline" size={25} color="black" />
          ),
         
        }} />
        <Tab.Screen name="Notification" component={Notification} options={{
              headerShown:false ,
              tabBarLabel: ({ focused, color, size }) => (
                <Text style={{ fontSize: 14, color: focused ? 'red' : 'black' }}>
                  Notification
                </Text>
              ),      
                  tabBarIcon: ({ color, size }) => (
                    <Ionicons name="notifications-outline" size={25} color="black" />    
                    ),
         
        }}/>
      
        <Tab.Screen name="History" component={History}  options={{
              headerShown:false ,
              tabBarLabel: ({ focused, color, size }) => (
                <Text style={{ fontSize: 14, color: focused ? 'red' : 'black' }}>
                  History
                </Text>
              ),       
                 tabBarIcon: ({ color, size }) => (
            <Ionicons name="grid-outline" size={25} color="black" />
          ),
         
        }} />

        
      </Tab.Navigator>
  );


}
export default ehome