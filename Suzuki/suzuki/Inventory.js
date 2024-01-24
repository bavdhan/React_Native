import React, { Component, useEffect, useState,setState } from 'react';
import { Alert, Button, TextInput,View,Image, Text,SafeAreaView,StyleSheet,navigation,FlatList,navigate,ScrollView } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import all_inventory from './all_inventory';
import sold_inventory from './sold_inventory';
import unsold_inventory from './unsold_inventory';

const Tab = createMaterialTopTabNavigator();

function Inventory( navigation)  {
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
      <Tab.Screen name='all_inventory' component={all_inventory}   options={{
          tabBarLabel: 'All Invntory',
        }}/>
<Tab.Screen name='sold_inventory' component={sold_inventory}  options={{
          tabBarLabel: 'Sold Invntory',
        }} />

<Tab.Screen name='unsold_inventory' component={unsold_inventory}   options={{
          tabBarLabel: 'Unold Inventory',
        }}/>


 
        
      </Tab.Navigator>
  );


}
export default Inventory