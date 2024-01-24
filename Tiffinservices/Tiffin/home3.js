import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Text, Button, Card, Title, Paragraph } from 'react-native-paper';

const home3 = () => {
  const [couponCount, setCouponCount] = useState(60);
  const [validityDays, setValidityDays] = useState(35);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [showPopup, setShowPopup] = useState(false);

 


const saveData = async ()=>{
  const url = "https://6516d9b109e3260018ca64e4.mockapi.io/tiffin";
  let result = await fetch(url,{
    method:"POST",
    headers: {
      "Content-Type":"application/json"
    },
    body:JSON.stringify({date:currentDateTime,time:validityDays,coupon:couponCount})
  });


result= await result.json();
if(result){
  console.warn("Data Added")
}

}





  useEffect(() => {
    const calculateTimeUntilMidnight = () => {
      const now = new Date();
      const midnight = new Date(now);
      midnight.setHours(24, 0, 0, 0);

      return midnight - now;
    };

    const interval = setInterval(() => {
      setCurrentDateTime(new Date());

      const timeUntilMidnight = calculateTimeUntilMidnight();

      if (timeUntilMidnight <= 1000) {
        setValidityDays(35);
        setShowPopup(false);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const decrementInterval = setInterval(() => {
      if (validityDays > 0) {
        setValidityDays((prevValidityDays) => prevValidityDays - 1);

        if (validityDays === 5) {
          setShowPopup(true);
        }
      } else {
        clearInterval(decrementInterval);
      }
    }, 1000 * 60 * 60 * 24); // 1000 milliseconds * 60 seconds * 60 minutes * 24 hours

    return () => clearInterval(decrementInterval);
  }, [validityDays]);



  const handleCouponRedeem = async () => {
    if (couponCount > 0) {
     
      setCouponCount(couponCount - 1);

     
      await saveData();
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    if (showPopup) {
      Alert.alert(
        'Coupon Expiry Warning',
        'Only 5 days remaining for coupon validity!',
        [{ text: 'OK', onPress: handleClosePopup }]
      );
    }
  }, [showPopup]);

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>Welcome Back !</Title>
          <Text style={styles.dateTimeText}>{currentDateTime.toLocaleString()}</Text>
          <Paragraph style={styles.infoText}>
            Available Coupons: {couponCount}
          </Paragraph>
          <Paragraph style={styles.infoText}>
            Validity Remaining: {validityDays} days
          </Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button
            mode="contained"
            onPress={handleCouponRedeem}
            style={styles.redeemButton}
          >
            Redeem Coupon
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  card: {
    elevation: 4,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  dateTimeText: {
    fontSize: 20,
    marginBottom: 20,
  },
  infoText: {
    fontSize: 18,
    marginBottom: 10,
  },
  redeemButton: {
    marginTop: 10,
    backgroundColor: '#4CAF50',
  },
});

export default home3;