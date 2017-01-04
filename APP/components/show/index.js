import React, { Component } from 'react';
import { StyleSheet, Navigator, View, Text, TouchableHighlight } from 'react-native';

class Show extends Component {
  constructor(props) {
    super(props);

    this.onBack = this.onBack.bind(this);
  }

  onBack() {
    const { navigator } = this.props;
    if (navigator) {
      navigator.pop();
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>最近的成绩</Text>
        </View>
        <View>
          <Text style={styles.content}>高等数学：90</Text>
          <Text style={styles.content}>工商业概论：88</Text>
          <Text style={styles.content}>微观经济学：85</Text>
          <Text style={styles.content}>体育：92</Text>
          <Text style={styles.content}>运筹学：75</Text>
        </View>
        <TouchableHighlight style={styles.button} onPress={this.onBack} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>登出</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C7FFEC',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  content: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
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

export default Show;
