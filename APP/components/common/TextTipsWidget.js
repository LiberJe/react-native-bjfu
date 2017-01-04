import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TextInput, PixelRadio, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

class TextTipsWidget extends Component{
  constructor(props){
    super(props);
  }

  render() {
    return (
      <View>
        <View>
          <Text
            numberOfLines={1}
          >
            {this.props.title}
          </Text>
          <View>
            
          </View>
        </View>
      </View>
    );
  }
}
