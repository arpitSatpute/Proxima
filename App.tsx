import { StyleSheet, SafeAreaView, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const App = () => {

  const Tab = createBottomTabNavigator();

  return (
    <SafeAreaView>
      <View>
        <Text>App</Text>
        <Text>App</Text>
        <Text>App</Text>
        <Text>App</Text>
        <Text>App</Text>
      </View>
    </SafeAreaView>
    
  );
};

export default App;

const styles = StyleSheet.create({})