'use strict'

import React, { Component } from 'react';
import { View, Navigator, StyleSheet, BackAndroid, StatusBar } from 'react-native';
import { makeStore } from './store'
import { connect, Provider } from 'react-redux'
import * as actionCreators from './action_creators'
import Districts from './containers/districts'


class PharmacyOnDuty extends Component {

  renderScene( route, navigator ) {
    let Component = route.component;
    if ( route.component ) {
      return (
        <View style={ styles.main }>
          <StatusBar hidden={route.statusBarHidden} barStyle="light-content" />
          <Component navigator={ navigator } style={ styles.content } />
        </View>
      )
    }
  }

  render() {
    return (
      <Provider store={ store }>
        <Navigator
           initialRoute={ { component: Districts } }
           configureScene={ () => {
                              return Navigator.SceneConfigs.FloatFromRight;
                            } }
           renderScene={ this.renderScene.bind( this ) } />
      </Provider>
    )
  }
}

let store = makeStore()
let styles = StyleSheet.create( {
  main: {
    backgroundColor: '#FFF',
    flex: 1,
    flexDirection: 'column'
  }
} )

module.exports = PharmacyOnDuty
