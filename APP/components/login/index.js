import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Text, Image, TextInput, TouchableHighlight, Navigator } from 'react-native';
import Button from 'react-native-button';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Sae } from 'react-native-textinput-effects';
import Show from '../show';

class Login extends Component{
  constructor(props) {
    super(props);

    this.onForward = this.onForward.bind(this);
  }

  onForward() {
    const { navigator } = this.props;
    if (navigator) {
      navigator.push({
        name: 'SecondPageComponent',
        component: Show,
      })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Sae
          label={'账号'}
          iconClass={FontAwesomeIcon}
          iconName={'pencil'}
          iconColor={'white'}
          style={styles.input}
          inputStyle={styles.text}
          // TextInput props
          autoCapitalize={'none'}
          autoCorrect={false}
        />
        <Sae
          label={'密码'}
          iconClass={FontAwesomeIcon}
          iconName={'pencil'}
          iconColor={'white'}
          style={styles.input}
          // TextInput props
          autoCapitalize={'none'}
          autoCorrect={false}
        /> 
        <TouchableHighlight style={styles.button} onPress={this.onForward} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>登录</Text>
        </TouchableHighlight>
      </View>
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
  inputBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 200,
  },
  text: {
    color: 'black',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 20,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
});

export default Login;
