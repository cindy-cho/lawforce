import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import Loginscreen from './Screens/loginscreen';
import Homescreen from './Screens/homescreen';

export default class App extends React.Component{
  render(){
    return(
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Homescreen}/>
          <Stack.Screen name="Login" component={Loginscreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}