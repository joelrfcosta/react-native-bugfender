/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Bugfender from 'react-native-bugfender'

export default class example extends Component {
  constructor() {
    super();
    Bugfender.reactLogging = true;
    // Replace with your Bugfender key
    Bugfender.setApiKey("00000000000000000000000000000000");
  }

  render() {
    Bugfender.d('Debug message');
    Bugfender.v('Verbose message');
    Bugfender.w('Warning message');
    
    // Warning: If Bugfender.reactLogging == true this will break
    // Bugfender.e('Error message');
    
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native! 1
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('example', () => example);
