import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const tommarowfollowup = () => {
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

      
        <View style={styles.row}>
          <Text style={styles.cell}>Abhijeet Pisal</Text>
          <Text style={styles.cell}>Received</Text>
          <Text style={styles.cell}>Sept. 28, 2023</Text>
          <Text style={styles.cell}>11:27 p.m.</Text>
          <Text style={styles.cell}>9579299359</Text>
          <Text style={styles.cell}>Received</Text>
        </View>

       
        <View style={styles.row}>
          <Text style={styles.cell}>None</Text>
          <Text style={styles.cell}>Received</Text>
          <Text style={styles.cell}>Sept. 28, 2023</Text>
          <Text style={styles.cell}>11:27 p.m.</Text>
          <Text style={styles.cell}>9579299359</Text>
          <Text style={styles.cell}>Received</Text>
        </View>



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
    padding: 8,
    color:'black',
    fontWeight: 'bold',
    fontSize:18,
    textAlign: 'center',
    width:200
  },
  cell: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#000',
    color:'black',
    padding: 8,
    textAlign: 'center',
    width:200
  },
});

export default tommarowfollowup;
