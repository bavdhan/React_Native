import React from 'react';
import { View, StyleSheet, Dimensions,ScrollView } from 'react-native';
import { Text } from 'react-native-paper';
import {LineChart } from 'react-native-chart-kit';
import BarChartComponent from './BarChartComponent';


const home3 = () => {

  const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'jun', 'july', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99,20, 45, 28, 80, 99,55,47],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
        strokeWidth: 2,
      },
    ],
  };

  return (
    <ScrollView>
    <View style={styles.container}>
    <BarChartComponent />

    <View style={styles.chartContainer}>
        <Text style={styles.title}>Sales Summary</Text>
        <LineChart
          data={lineChartData}
          width={Dimensions.get('window').width - 16}
          height={220}
          yAxisLabel=""
          chartConfig={{
            backgroundGradientFrom: '#fff',
            backgroundGradientTo: '#fff',
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          }}
        />
      </View>
  </View>
  </ScrollView> 
  );
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:30,
  },
  chartContainer: {
    marginVertical: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '900',
    color: 'blue',
    textAlign: 'center',
    margin: 20,
  },

});

export default home3;
