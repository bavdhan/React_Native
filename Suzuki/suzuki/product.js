import React, { Component, useEffect, useState,setState } from 'react';
import { Alert, Button, TextInput,View,Image, Text,SafeAreaView,StyleSheet,navigation,FlatList,navigate,ScrollView } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import bikes from './bikes';
import variant from './variant';
import charges from './charges';
import catagories from './catagories';
import features from './features';
import colour from './colour';




const Tab = createMaterialTopTabNavigator();

function product( navigation)  {
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
      <Tab.Screen name='bikes' component={bikes}   options={{
          tabBarLabel: 'Models',
        }}/>
<Tab.Screen name='variant' component={variant}  options={{
          tabBarLabel: 'Variant',
        }} />

<Tab.Screen name='charges' component={charges}   options={{
          tabBarLabel: 'Charges',
        }}/>

<Tab.Screen name='catagories' component={catagories}   options={{
          tabBarLabel: 'Catagories',
        }}/>
 <Tab.Screen name='features' component={features}  options={{
          tabBarLabel: 'Features',
        }}/>

<Tab.Screen name='colour' component={colour}   options={{
          tabBarLabel: 'Colour',
        }}/>


        
      </Tab.Navigator>
  );


}
export default product