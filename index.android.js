import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import Route from './APP';
import Login from './APP/components/login';

export default class EDU extends Component {
  render() {
    // return (
    //   <View style={styles.container}>
    //     <Login />
    //   </View>
    // );
    return (
      <Route />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C7FFEC',
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

AppRegistry.registerComponent('EDU', () => EDU);
