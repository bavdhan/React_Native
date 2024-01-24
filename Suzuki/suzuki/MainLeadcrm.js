import React, {  Component, useEffect, useState,setState, useMemo ,useCallback } from 'react';
import { Alert, Button, TextInput,View,Image,Modal,Text,Pressable,StatusBar,SafeAreaView,StyleSheet,navigation,FlatList,navigate,ScrollView } from 'react-native'
import { Link } from '@react-navigation/native';
import {DataTable} from 'react-native-paper';
import 'react-native-gesture-handler';

import createenquiry from './createenquiry';
import leadFollowup from './leadFollowup';
import create_booking from './create_booking';
import pement from './pement';
import prospectform_detail from './prospectform_detail';



function MainLeadcrm( navigation)  {



  return(
    <ScrollView>

<View style={{ flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:10}}>
  <Text style={{ fontWeight:700,fontSize:20,marginTop:0, color:'black', }}>LEADS CRM</Text>
  </View>


<View style={{flexDirection:'row'}}>





<Link to={{ screen: 'createenquiry', params: { id: 'createenquiry' } }}  style={{marginLeft: 20,marginTop:20 , borderColor:'blue', borderWidth: 2,paddingTop:10,paddingBottom:10,paddingLeft:10,
            shadowColor: '#00cccd',
            shadowOffset: {width:110, height: 40},
            shadowOpacity: 14,
            backgroundColor:'#00cccd',
            width: 120,
            shadowRadius: 12,}}>
 <Text style={{fontSize:12,  fontWeight:"600",resizeMode: 'cover', color:'white'}}> 🚀 Create New</Text>
</Link>



</View>
   
  <ScrollView
  horizontal={true}
  >
<DataTable style={styles.container}>
      <DataTable.Header style={styles.tableHeader}>
        <DataTable.Title style = {{marginRight:0,marginLeft:0}}>Full Name</DataTable.Title>
        <DataTable.Title style = {{marginRight:0,marginLeft:0}}>Expected Purchase Date</DataTable.Title>
        <DataTable.Title style = {{marginRight:0,marginLeft:0}}>  followups & Quotation</DataTable.Title>
        <DataTable.Title style = {{marginRight:0,marginLeft:70}}>  Order & Docket	</DataTable.Title>
        <DataTable.Title style = {{marginRight:0,marginLeft:140}}>Edit / Delete</DataTable.Title>
      </DataTable.Header>






      <DataTable.Row>
        <DataTable.Cell  style={{}}><Link to={{ screen: 'prospectform_detail', params: { id: 'prospectform_detail' } }} style={{ color:'blue'}}> Vinod Chwake </Link> </DataTable.Cell>
        <DataTable.Cell  style = {{ marginLeft:70 ,marginRight:20}}> 	9970437253 </DataTable.Cell>

        <DataTable.Cell  style = {{ marginLeft:40 ,marginRight:20}}>
        <View style={{flexDirection:'column'}}>
   
           	<Link to={{ screen: 'leadFollowup', params: { id: 'leadFollowup' } }}  style={styles.cbut}>
          <Text style={{fontSize:12,
        fontWeight:"600", color:'black'}}
        >    Follow up  </Text> </Link>

        <Link to={{ screen: '', params: { id: '' } }}  style={styles.cbut}>
          <Text style={{fontSize:12,
        fontWeight:"600", color:'black'}}
        >    Quotation </Text> </Link>

<Link to={{ screen: 'pement', params: { id: 'pement' } }}  style={styles.cbut}>
          <Text style={{fontSize:15,
        fontWeight:"600", color:'black'}}
        >    pement </Text> </Link>

          </View>

         </DataTable.Cell>







        <DataTable.Cell  style = {{ marginLeft:40 ,marginRight:40}}> 
        <View style={{flexDirection:'column'}}>
        <Link to={{ screen: 'create_booking', params: { id: 'create_booking' } }}  style={styles.cbut1}>
          <Text style={{fontSize:12,
        fontWeight:"600", color:'black'}}
        >  booking +  </Text> </Link>
        </View>

        </DataTable.Cell>


      <DataTable.Cell  style = {{ marginLeft:40 ,marginRight:40}}> 

      <View style={{flexDirection:'column'}}>

            <Link to={{ screen: '', params: { id: '' } }}  style={styles.cbut1}>
              <Text style={{fontSize:12,
            fontWeight:"600", color:'black'}}
            >   Edit  </Text> </Link>

        <Link to={{ screen: '', params: { id: '' } }}  style={styles.cbut1}>
              <Text style={{fontSize:12,
            fontWeight:"600", color:'black'}}
            >   Delete  </Text> </Link>

            </View>


       </DataTable.Cell>
      </DataTable.Row>

      </DataTable>
</ScrollView>





</ScrollView>
  );


}
export default MainLeadcrm


const styles = StyleSheet.create({
      cbut: {
        borderColor:'blue', borderWidth: 2,paddingTop:10,paddingBottom:10,paddingLeft:10,
            shadowColor: '#00cccd',
            shadowOffset: {width:110, height: 40},
            shadowOpacity: 14,
            backgroundColor:'#00cccd',
            width: 120,
            shadowRadius: 12,
            margin:6
      },
      cbut1: {
        borderColor:'blue', borderWidth: 2,paddingTop:10,paddingBottom:10,paddingLeft:10,
            shadowColor: '#00cccd',
            shadowOffset: {width:110, height: 40},
            shadowOpacity: 14,
            backgroundColor:'#00cccd',
            width: 120,
            shadowRadius: 12,
            margin:6
      },
    container: {
      padding: 15,
    },
    tableHeader: {
      backgroundColor: '#DCDCDC',
    },
    container: {
      backgroundColor: 'white',
      padding: 16,
    },
    dropdown: {
      height: 50,
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
    },
    icon: {
      marginRight: 5,
    },
    label: {
      position: 'absolute',
      backgroundColor: 'white',
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
  });