import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import MyWeb from "./App";
import ImageScreen from "./ImageScreen";



export default createBottomTabNavigator({
  Home: MyWeb,
  Settings: ImageScreen,
});