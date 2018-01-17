import React, {Component} from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.card}>
        <Text>stuff</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'skyblue',
    width: 100,
    height: 100,
  },
})
