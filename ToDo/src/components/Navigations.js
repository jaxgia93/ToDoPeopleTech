
import React from 'react';
import { View, Text } from 'react-native'

import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { createSwitchNavigator } from 'react-navigation';
import LoginScreen from '../screen/LoginScreen'
import InitialScreen from '../screen/InitialScreen'
import RegistrationScreen from '../screen/RegistrationScreen'


const InitialContainer = createStackNavigator({
  Initial: { screen: InitialScreen, navigationOptions: { headerShown: false } },
  Login: { screen: LoginScreen, navigationOptions: { headerShown: false } },
  Registration: { screen: RegistrationScreen, navigationOptions: { headerShown: false } },

},{
    initialRouteName: 'Initial'})


export default createAppContainer(createSwitchNavigator(
  {
    Initial: InitialContainer,
  },
  {
    initialRouteName: 'Initial',
  }
));