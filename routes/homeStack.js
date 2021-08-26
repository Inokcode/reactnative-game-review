import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';

const mystack = createStackNavigator();

export default () => (
  <NavigationContainer>
    <mystack.Navigator>
      <mystack.Screen name="Home" component={Home} />
      <mystack.Screen name="Review Details" component={ReviewDetails} />
    </mystack.Navigator>
  </NavigationContainer>
);
