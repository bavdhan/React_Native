
import React, { useEffect,useState  } from 'react';
import { View, Text } from 'react-native';
import WebView from 'react-native-webview';
import axios from 'axios';

import CalculatorPage from './CalculatorPage';
import Main from '../src/screen/Main';

const WEBSITE_URL = 'https://biznative.com/android/100/'; 

const WebsiteChecker = ({ navigation }) => {

 const [webPageTitle, setWebPageTitle] = useState('');

  useEffect(() => {
    axios.get('https://biznative.com/android/100/')
      .then(response => {
        if (response.status === 200) {
          const title = response.data.match(/<title>(.*?)<\/title>/i);
          if (title) {
            const pageTitle = title[1];
            if (pageTitle === '404') {
              navigation.navigate('CalculatorPage');
            } else {
              navigation.navigate('Main');
            }
          }
        } else {
          console.error('Website is not available');
        }
      })
      .catch(error => {
        console.error('Error fetching website:', error);
      });
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    {webPageTitle ? (
      <Text>{webPageTitle}</Text>
    ) : (
      <Text>Loading...</Text>
    )}
  </View>
  );
};

export default WebsiteChecker;
