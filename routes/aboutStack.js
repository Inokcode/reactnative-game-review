import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';
import About from '../screens/about';

const aboutStack = createStackNavigator();

export default () => (
  //   <NavigationContainer>
  <aboutStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#eee',
        //   height: 120,
      },
      headerTintColor: '#444',
    }}
  >
    <aboutStack.Screen
      name="About"
      component={About}
      options={{
        title: 'About GameZone',
      }}
    />
  </aboutStack.Navigator>
  //   </NavigationContainer>
);
