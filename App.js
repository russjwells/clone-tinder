import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, PanResponder, Animated } from 'react-native';
import Card from './card'

const fbImage = 'https://graph.facebook.com/511275546/picture?height=500'

export default class App extends Component {

  render() {
    return (
      <View style={{flex: 1}}>
        {profiles.reverse().map((profile, i) => {
          return (
            <Card 
              key = {i}
              profile = {profile}
            />
          )
        })}
      </View>
    )
  }
}

const profiles = [
  {
    id: '259389830744794',
    name: 'Candice',
    birthday: '10/18/1986',
    bio: 'Supermodel',
  },
  {
    id: '720115413',
    name: 'Alessandra',
    birthday: '1/10/1989',
    bio: 'Dancer',
  },
  {
    id: '169571172540',
    name: 'Miranda',
    birthday: '12/12/1983',
    bio: 'Doctor',
  },
  {
    id: '1476279359358140',
    name: 'Alissa',
    birthday: '2/11/1990',
    bio: 'Comedian',
  },
  {
    id: '1140849052644433',
    name: 'Behati',
    birthday: '3/23/1991',
    bio: 'Developer',
  },
  {
    id: '912478262117011',
    name: 'Rosie',
    birthday: '9/4/1989',
    bio: 'Artist',
  },
  {
    id: '173567062703796',
    name: 'Kendall',
    birthday: '8/17/1992',
    bio: 'Truck Driver',
  },
]
