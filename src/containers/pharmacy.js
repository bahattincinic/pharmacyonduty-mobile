'use strict';

import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Toolbar from '../components/toolbar'
import { connect } from 'react-redux'
import * as actionCreators from '../action_creators'


class Pharmacy extends Component {

  _renderItem(item, idx) {
    return (
      <View style={styles.item} key={idx}>
       <View>
         <Text>{item.name}</Text>
       </View>
       <View>
         <Text>{item.address}</Text>
       </View>
      </View>
    )
  }

  render() {
    return (
      <View>
        <Toolbar title={this.props.name} navigator={this.props.navigator} />
        <ScrollView style={styles.container}>
            {this.props.pharmacies.map(this._renderItem.bind(this))}
        </ScrollView>
      </View>
    )
  }
}

const styles = {
  container: {
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20
  },
  item: {
    marginBottom: 10,
    paddingBottom: 10,
    flexDirection: 'column',
    borderStyle: 'solid',
    borderBottomColor: '#f9f7f7',
    borderTopColor: '#FFF',
    borderLeftColor: '#FFF',
    borderRightColor: '#FFF',
    borderWidth: 1
  }
}


const _Pharmacy = connect(
  (state) => ({ pharmacies: state.get('pharmacies'),
                name: state.get('active_district') }),
  actionCreators
)(Pharmacy)

export default _Pharmacy
