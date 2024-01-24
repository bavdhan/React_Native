import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import WebsiteChecker from './website/WebsiteChecker';
import CalculatorPage from './website/CalculatorPage';


import Main from './src/screen/Main';

const Stack = createStackNavigator();

function App() {


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WebsiteChecker">

      <Stack.Screen name="WebsiteChecker" component={WebsiteChecker}  options={{
            headerShown: false,
          }} />


        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            headerShown: false,
          }}
        />

<Stack.Screen name="CalculatorPage" component={CalculatorPage}  options={{
            headerShown: false,
          }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
