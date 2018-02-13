import React, { Component } from 'react'
import * as firebase from 'firebase'
import Home from './screens/home'

const firebaseConfig = {
  apiKey: "AIzaSyDg4fI6UyL6hYvDHwELQ75pjwspQW8_kDA",
  databaseURL: "https://clone-tinder-137.firebaseio.com",
}

firebase.initializeApp(firebaseConfig)

export default class App extends Component {
    render() {
        return (
            <Home />
        )
    }
}