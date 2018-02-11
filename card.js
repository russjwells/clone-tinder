import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, PanResponder, Animated, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window')

const fbImage = 'https://graph.facebook.com/511275546/picture?height=500'

export default class Card extends Component {
  componentWillMount() {
    this.pan = new Animated.ValueXY();
    this.cardPanResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([
        null,
        {dx:this.pan.x, dy:this.pan.y},
      ]),
      onPanResponderRelease: () => {
        Animated.spring(this.pan, {
          toValue: {x:0, y:0},
          friction: 4.5,
        }).start()
      },
    })
    console.log(this.cardPanResponder);
  }

  render() {
    const rotateCard = this.pan.x.interpolate({
      inputRange: [-200, 0, 200],
      outputRange: ['10deg', '0deg', '-10deg'],
    })
    const animatedStyle = {
      transform: [
        {translateX: this.pan.x},
        {translateY: this.pan.y},
        {rotate: rotateCard},
      ],
    }
    return (
      <Animated.View 
      {...this.cardPanResponder.panHandlers}
      style={[styles.card, animatedStyle]}>
        <Image
          style={{flex: 1}}
          source={{uri: fbImage}}
        />
        <View style={{margin: 20}}>
          <Text style={{fontSize: 20}}>Russ, 28</Text>
          <Text style={{fontSize: 15, color:'darkgrey'}}>Hi, I'm me, in'lakesh</Text>
        </View>
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    position: 'absolute',
    overflow: 'hidden',
    backgroundColor: 'white',
    width: width-20,
    height: height * 0.7,
    top: (height * 0.3) / 2, 
    margin: 10,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 10,
  },
})