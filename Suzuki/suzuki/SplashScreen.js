// SplashScreen.js
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Animated ,Image } from 'react-native';
import LoginScreen from './LoginScreen';

const SplashScreen = ({ navigation }) => {




  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 5000,
        useNativeDriver: true,
      }
    ).start(() => {
      navigation.replace('LoginScreen');
    });
  }, [fadeAnim, navigation]);

  return (
   
    <View style={styles.container}>

<Image source={{
        uri: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0HDQ0HDQ0HBw0HBw0NDQ8IDQcNFREWFhURExMYHSggGBoxGxMTITEhJSk3Oi4uFx8zODMtNygtOisBCgoKDQ0NDg0NFS0ZFRkrKysrNy03Ky0tKysrKysrKysrLS0rKysrKysrKysrKy0tKy03LSsrKystNysrKysrK//AABEIAUIAnAMBIgACEQEDEQH/xAAbAAEBAQEBAQEBAAAAAAAAAAAAAQQCAwcGBf/EABgQAQEBAQEAAAAAAAAAAAAAAAACARIR/8QAGAEBAQEBAQAAAAAAAAAAAAAAAgEFAwb/xAAXEQEBAQEAAAAAAAAAAAAAAAAAAREC/9oADAMBAAIRAxEAPwD+nNvSbY5t6TbzVj3d4a8p6ZTJNvTLTHO8tWU7ymXKemUNjneWjKemUzZTvKHHO8tOU6ymbKd5Q4F5acp3lM2U7yhxzvLTlOspnyneUmBeWjKdZTPlO8pMC8tGU6ynhlOsocC8vf0eeU66QMfPpt6TbHNvSbaePU3hsm3rNsU29JsbHK8Ns27mmSbek2GOV4asp6ZTLNu8pMc7y1ZTvKZcp6ZQ2Od5aMp3lM+U6yhxzvLTlO8pmyneUOBeWnKd5TNlO8pMc7y0ZTvKZ8p3lDgXloynXTPlO+kwLy+czb0m2X11NNSx6u8tc29Ztjm3pNjY53lsm3pNsc29JsbHK8Nk29Jtjm3pNjY53hsmneUyTb0mxscry1ZTvKZsp3lDY53lqynWUzZTvKGxzvLTlO8pnynWUOOd5acp3lM2U7yhwLy05TrpnyneUmBeXz0Bq49Lq5rqacA2K95t6TbL66yxsG8tk29Jtjm3pljY53hsm3pNsc29JsbHK8Nk29Jtjm3pNhY5XhsyneUyTb0y0sc7y1ZTvKZsp3lDjneWnKd5TNlO8obHO8tOU7ymbKd9DgXl+JAauNzVEBxdUBMXR1lOQbFe029JtldZY2DeWybek2xzb0mxsc7w2zb0m2Kbes2NjleGybemWxzb0mxscrw15TvKZZt3lDY53lqyneUzZTrobHO8vywDVxo6ADhaoA4UoAmLoANi6O8pwDYr3m3pNsua6yhsG8tk29Jtjm3pNjY53hsm3pNsc29JsbHK8Nk27ymSbemWOOV4fwlQamO2qIo4WioJi6oijhaADi6AJhaADYurjrKcKNivabek2yusobBvLZNu8tkm3eWNjneGMBp44aoiphaADi6ADhaoCWLoAOFoAmLooDhaADYujrpyDivMRWnjO1RFHC0VAcLVATF0VAcLVEVMLQAcXRUUcLQBMXQAcLXkA0sZuioDhaqoJi6oA2FqiKOFKAJi6oijhaAJi6KgOFqgDi68VQaWM7VEUcXVEEwtUAcLVEVMXRUBwtUAbC1RFTF0AHC0VBMXXkINHGbKoA4WqIqYWioDYuqIqYWioDhaqoJi6oijhaogmFqgDi68QGljM0VAcKVRFHClUQTC1QBwtUQTF1VQHC1QBwtUQTF1QBsLXiA0sZmqIqYsoANhaogOFqqgOFqiKmFKKgOFqgJiyqIo4WgCYuvIRWlYzNFQGwtURRxdABwpRUEwtUAcKVRAcKVQEwtURRwtFQTF15ANPGXKoijYUoANhSqIo2FKADiygCYUqgDhaKgOFKoijhSqIJha8wGpYytABsLRUBsKVQBsLRUBwpVEUbC0VAbFlUBMLQAcKVRAcLXIDVsZeoKDYuoANhSgA2FqiKNhaADYUoqA2FqgDhaKiji6AJhaiKNaxlyoKgWFKADhaiiDYsqiKNhaADYWgA2FKKgNhSqIo2FKADhaqKNexlagA2FKIoNhSoKgWFoANhSgA2LoANhaADYWgA4UoqA4UroBq1mAAkgA1YADSQAaYAFWAA0oCCUoKAUjABqv/9k=',
      }} style={styles.background} />



      <Animated.View style={{ opacity: fadeAnim }}>
        <Text style={styles.text}>Suzuki</Text>
      </Animated.View>
    </View>
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 36,
    fontWeight: 'bold',
    color:'white'
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', 
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});

export default SplashScreen;
