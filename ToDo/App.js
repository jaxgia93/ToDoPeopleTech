
import React from 'react';
import { View, Text } from 'react-native'
import { Provider } from 'react-redux';
import store from './src/store';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { createSwitchNavigator } from 'react-navigation';
import LoginScreen from './src/screen/LoginScreen'
import InitialScreen from './src/screen/InitialScreen'
import RegistrationScreen from './src/screen/RegistrationScreen'
import ToDoScreen from './src/screen/ToDoScreen'


const InitialContainer = createStackNavigator({
  Initial: { screen: InitialScreen, navigationOptions: { headerShown: false } },
  Login: { screen: LoginScreen, navigationOptions: { headerShown: false } },
  Registration: { screen: RegistrationScreen, navigationOptions: { headerShown: false } },
  ToDo: { screen: ToDoScreen, navigationOptions: { headerShown: false } },

}, {
  initialRouteName: 'Initial'
})

let Navigation = createAppContainer(createSwitchNavigator(
  {
    Initial: InitialContainer,
  },
  {
    initialRouteName: 'Initial',
  }
))

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
}

export default App