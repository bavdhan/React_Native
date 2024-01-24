import { useState, useEffect, useRef } from 'react';
import { Text, View, Button, Platform,Image,TouchableOpacity,StyleSheet } from 'react-native';

import { Link } from '@react-navigation/native';

import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import ehome from './Tiffin/ehome';



const Stack= createNativeStackNavigator();




export default function App() {



  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='ehome'  screenOptions={{
     }}>





    
    <Stack.Screen name='ehome' component={ ehome}  options={{
      headerLeft:()=>(
        <View style={{ flexDirection: 'row', marginTop:0,
              backgroundColor:'red',borderWidth: 0,width:'100%'
             }}>


                <Image 
                 style={{
                  resizeMode: 'cover',
                  height: 40,
                  width: 80,
                  marginLeft: 50,
                  marginTop:40,
                  marginBottom:20,
                }}
                source={require('./assets/tiffin.png')} 
                />

<TouchableOpacity      style={{marginLeft: 180, top:40,marginRight: 50,flexDirection:'row'}}>
<Link to={{ screen: '', params: { id: '' } }}  style={{}}>
<Icon name="login" size={40} color="white" />

</Link>

</TouchableOpacity>

                </View>
      )
    }}/>







      </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  text:{
    fontWeight:400,fontSize:15,color:'white',marginLeft: 5,
  }
 
});