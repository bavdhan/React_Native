import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import ehome from './ehome';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === '123' && password === '123') {
      navigation.navigate('ehome');

      Alert.alert('Login Successful', 'Welcome!');
    } else {
      Alert.alert('Login Failed', 'Invalid username or password');
    }
  };

  return (
   

    <View style={styles.container}>

    <Image source={{
        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS60IQZdARIzVreXXm1nbNVL5CC834SCZJtIA&usqp=CAU',
      }} style={styles.background} />


    <View style={styles.content}>

      <Image  source={{
          uri: 'https://shrivinayaksuzuki.com/static/suzukilogo.png',
        }} style={styles.logo} />

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Username:</Text>
        <TextInput
          style={styles.input}
          
          onChangeText={(text) => setUsername(text)}
          value={username}
          placeholder="Enter your username"
          placeholderTextColor='black'
        />

        <Text style={styles.label}>Password:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry
          placeholder="Enter your password"
          placeholderTextColor='black'
        />

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      background: {
        position: 'absolute',
        width: '100%',
        height: '100%',
      },
      content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      logo: {
        width: 150,
        height: 150,
        marginBottom: 20,
      },
      inputContainer: {
        width: '80%',
      },
      label: {
        marginBottom: 5,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ffffff', // Set text color to be visible on the background
      },
      input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 15,
        color:'black', 
        paddingLeft: 10,
        backgroundColor: 'rgba(255,255,255,0.8)', // Set a semi-transparent background color
      },
      displayText: {
        marginBottom: 10,
        fontSize: 14,
        color: '#ffffff', // Set text color to be visible on the background
      },
      loginButton: {
        backgroundColor: '#3498db',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
      },
      buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
      },
});

export default LoginScreen;
