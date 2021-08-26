import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HomeStack from './homeStack';
import AboutStack from './aboutStack';

const drawer = createDrawerNavigator();

export default () => (
  <NavigationContainer>
    <drawer.Navigator>
      <drawer.Screen name="HomeStack" component={HomeStack} />
      <drawer.Screen name="AboutStack" component={AboutStack} />
    </drawer.Navigator>
  </NavigationContainer>
);
