import React from 'react';
import { View, Text, StyleSheet, ScrollView,TouchableOpacity,Linking ,Platform   } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Link } from '@react-navigation/native';
import leadFollowup from './leadFollowup';

const allfollowup = () => {

  const data = [
    {
      fullName: 'Abhijeet Pisal',
      lastCallDetails: 'Received',
      nextCallDate: 'Sept. 28, 2023',
      nextCallTime: '11:27 p.m.',
      mobile: '9579299359',
      callStatus: 'Received',
    },
  ];


  const handleWhatsAppPress = (phoneNumber) => {
    const whatsappUrl = `whatsapp://send?phone=${phoneNumber}`;

    Linking.canOpenURL(whatsappUrl)
      .then((supported) => {
        if (supported) {
          return Linking.openURL(whatsappUrl);
        } else {
          console.log("WhatsApp is not installed on the device");
        }
      })
      .catch((err) => console.error('An error occurred', err));
  };





  const handleCallPress = (phoneNumber) => {
    const telUrl = `tel:${phoneNumber}`;

    Linking.canOpenURL(telUrl)
      .then((supported) => {
        if (supported) {
          return Linking.openURL(telUrl);
        } else {
          console.log("Phone calling is not supported on the device");
        }
      })
      .catch((err) => console.error('An error occurred', err));
  };


  return (

    <ScrollView>

<View style={{ flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:20 , marginBottom:20}}>
  <Text style={{ fontWeight:700,fontSize:20,marginTop:0,color:'black', }}>FOLLOWUPS</Text>
  </View>
    
    <ScrollView horizontal={true}>




      <View style={styles.table}>
        <View style={styles.row}>
          <Text style={styles.header}>full name</Text>
          <Text style={styles.header}>Last call details</Text>
          <Text style={styles.header}>Next Call Date</Text>
          <Text style={styles.header}>Next Call Time</Text>
          <Text style={styles.header}>Mobile</Text>
          <Text style={styles.header}>Call Status </Text>
        </View>

        {data.map((item, index) => (
        <View style={styles.row} key={index}>
        <Text style={styles.cell}>{item.fullName}
        <Link to={{ screen: 'leadFollowup', params: { id: 'leadFollowup' } }}  style={{}}>
  <Text style={{ fontWeight:400,fontSize:14,color:'blue',}}>   Follow Up</Text>       
    </Link>
        </Text>
          <Text style={styles.cell}>{item.lastCallDetails}</Text>
          <Text style={styles.cell}>{item.nextCallDate}</Text>
          <Text style={styles.cell}>{item.nextCallTime}</Text>

          <Text style={styles.cell}>{item.mobile}
          <View style={{flexDirection:'row'}}>
          <TouchableOpacity
          style={styles.button}
          onPress={() => handleCallPress(item.mobile)}>

          <Icon name="call" size={15} color="#fff" />
        </TouchableOpacity>

    
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleWhatsAppPress(item.mobile)}>
          <Icon name="logo-whatsapp" size={15} color="#fff" />
        </TouchableOpacity>
          
          </View>
          
          </Text>
          <Text style={styles.cell}>{item.callStatus}</Text>
        </View>

))}
     
      


      </View>
    </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  table: {
    borderWidth: 1,
    borderColor: '#000',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
  },
  header: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#000',
    color:'black',
    padding: 8,
    fontWeight: 'bold',
    fontSize:18,
    textAlign: 'center',
    width:200
  },
  cell: {
    flex: 1,
    borderWidth: 1,
    color:'black',
    borderColor: '#000',
    padding: 8,
    textAlign: 'center',
    width:200
  },
  button: {
    backgroundColor: 'blue',
    padding: 5,
    borderRadius: 5,
    marginLeft: 5,
  },
});

export default allfollowup;
