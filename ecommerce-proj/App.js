import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StackNavigator from './navigation/StackNavigator';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import axios from 'axios';

// to use axios base url

axios.defaults.baseURL = 'http://192.168.21.57:8000';

export default function App() {
  return (
    <>
    <Provider store={store}>

    <StackNavigator />
    </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
