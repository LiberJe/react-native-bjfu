import React, { Component } from 'react';
import { Navigator, StyleSheet, Text, View } from 'react-native';
import Login from './components/login';

class Route extends Component {
  
  render() {
    const defaultName = 'FirstPageComponent';
    const defaultComponent = Login;
    
    return (
      <Navigator
        initialRoute={{ name: defaultName, component: defaultComponent }}
        renderScene={(route, navigator) =>{
          const Component = route.component;
          return <Component {...route.params} navigator={navigator} />
        }}
      />
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
});

export default Route;
