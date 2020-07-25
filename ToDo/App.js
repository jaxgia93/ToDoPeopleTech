
import React from 'react';
import { View, Text } from 'react-native'
import { Provider, useSelector } from 'react-redux';
import { store } from './src/store/index';
import TestComponent from './src/components/TestComponent/index'

const App = () => {
  return (
    <Provider store={store}>
      <View>
       <TestComponent/>
      </View>
    </Provider>)
}

export default App;
