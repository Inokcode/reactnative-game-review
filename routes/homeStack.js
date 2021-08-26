import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';

const mystack = createStackNavigator();

export default () => (
  // <NavigationContainer>
  <mystack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#eee',
        //   height: 120,
      },
      headerTintColor: '#444',
    }}
  >
    <mystack.Screen
      name="Home"
      component={Home}
      options={{
        title: 'GameZone',
      }}
    />
    <mystack.Screen
      name="Review Details"
      component={ReviewDetails}
      options={{
        title: 'Review Details',
      }}
    />
  </mystack.Navigator>
  // </NavigationContainer>
);
