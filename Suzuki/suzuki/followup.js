import React, { Component, useEffect, useState,setState } from 'react';
import { Alert, Button, TextInput,View,Image, Text,SafeAreaView,StyleSheet,navigation,FlatList,navigate,ScrollView } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import allfollowup from './allfollowup';
import yesterdayfolloup from './yesterdayfolloup';
import todayfollowup from './todayfollowup';
import tommarowfollowup from './tommarowfollowup';

const Tab = createMaterialTopTabNavigator();

function followup( navigation)  {
  return(
    <Tab.Navigator screenOptions={{
        tabBarActiveTintColor: 'orange', 
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
      <Tab.Screen name='allfollowup' component={allfollowup}   options={{
          tabBarLabel: 'All',
        }}/>
<Tab.Screen name='yesterdayfolloup' component={yesterdayfolloup}  options={{
          tabBarLabel: 'Yesterday',
        }} />

<Tab.Screen name='todayfollowup' component={todayfollowup}   options={{
          tabBarLabel: 'Today',
        }}/>

<Tab.Screen name='tommarowfollowup' component={tommarowfollowup}   options={{
          tabBarLabel: 'Tomarrow',
        }}/>
 
        
      </Tab.Navigator>
  );


}
export default followup