import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, PanResponder, Animated } from 'react-native';
import Card from './card'

const fbImage = 'https://graph.facebook.com/511275546/picture?height=500'

export default class App extends Component {

  render() {
    return (
      <View style={{flex: 1}}>
        <Card />
        <Card />
      </View>
    )
  }
}
