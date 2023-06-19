/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import Home from './src/components/HomePage';
import Products from './src/components/Products';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BottomBar} from './src/components/BottomBar';
import HomeScreen from './src/screen/HomeScreen/HomeScreen';
import {Profile} from './src/screen/Profile';
import {CompletedTask} from './src/screen/CompletedTask';
import { Login } from './src/screen/Login';
import { Register } from './src/screen/Register';

const Stack = createNativeStackNavigator();

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Completed" component={CompletedTask} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
      <BottomBar />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {},
  textColor: {
    color: 'blue',
  },
  fontStyle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  margin: {
    margin: 10,
    padding: 10,
  },
});

export default App;
