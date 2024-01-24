import React ,{useEffect,useState} from 'react';
import { View, Text, FlatList } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import moment from 'moment';




const History = () => {

  const [data, setData] = useState([]);

 

  const fetchData = async () => {
  
      const url = "https://6516d9b109e3260018ca64e4.mockapi.io/tiffin" ;
     let result =await fetch(url);
     result = await result.json();
     setData(result)
   
  };

  useEffect(() => {
    fetchData();
  }, []);


  const renderDateAndTime = (dateString) => {
    const momentDate = moment(dateString);
    const formattedDate = momentDate.format('YYYY-MM-DD');
    const localFormattedDate = momentDate.local().format('YYYY-MM-DD');
    const formattedTime = momentDate.format('h:mm A');
    const localFormattedTime = momentDate.local().format('h:mm A');
    
    return (
      <View>
        <Title>Date : {localFormattedDate}</Title>
        <Paragraph>Time : {localFormattedTime}</Paragraph>
      </View>
    );
  };
  


  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 20, marginBottom: 10,color:'black' }}>History</Text>

      {
        data.length?
       
      <FlatList
        data={data}
        renderItem={({ item}) => <Card style={{ margin: 10 }}>
    
        <Card.Content>
          {renderDateAndTime(item.date)}
          <Paragraph> Remaing Days :{item.time}</Paragraph>
          <Paragraph> Remaing Coupon : {item.coupon}</Paragraph>
          <Paragraph> Use Coupon : 1</Paragraph>
        </Card.Content>

      </Card>}
      />

      
      
      :null
    }
    </View>
  );
};

export default History;
