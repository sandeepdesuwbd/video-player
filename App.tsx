/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Home from './src/screens/home';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="black"
        translucent={true}
      />
      <Home />
    </SafeAreaView>
  );
}

export default App;
