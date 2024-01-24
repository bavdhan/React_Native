import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { Text } from 'react-native-paper';


const BarChartComponent = () => {
  const data = {
    labels: ['Dliverd', 'pending', 'processing', 'cancelld', 'Booked'],
    datasets: [
      {
        data: [30, 45, 28, 80, 99],
      },
    ],
  };

  return (
    <View style={styles.container}>
  <Text style={{ fontSize:20,  fontWeight:"900",resizeMode: 'cover', color:'blue',textAlign:'center', margin:20}}>WorkFlow Summery</Text>
      <BarChart
        data={data}
        width={Dimensions.get('window').width - 16}
        height={220}
        yAxisLabel=" "
        chartConfig={{
          backgroundGradientFrom: '#fff',
          backgroundGradientTo: '#fff',
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  
    
  },
});

export default BarChartComponent;
