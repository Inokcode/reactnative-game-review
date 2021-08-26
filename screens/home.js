import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function ReviewDetails({ navigation }) {
  const pressHandler = () => {
    navigation.push('Review Details');
  };
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home</Text>
      <Button title="go to review dets" onPress={pressHandler} />
    </View>
  );
}
