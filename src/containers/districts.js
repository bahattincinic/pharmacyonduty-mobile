'use strict';

import React, {Component} from 'react';
import {View, ScrollView, Text, InteractionManager, Image} from 'react-native';
import Button from '../components/button'
import Toolbar from '../components/toolbar'
import {connect} from 'react-redux'
import * as actionCreators from '../action_creators'
import Pharmacy from './pharmacy'


class Districts extends Component {

    componentDidMount() {
      InteractionManager.runAfterInteractions(() => {
        this.props.fetchDistricts()
      });
    }

    _buttonClicked(slug) {
      requestAnimationFrame(() => {
        this.props.fetchPharmacies(slug, {
          navigator: this.props.navigator,
          component: Pharmacy
        })
      })
    }

    _renderItem(item, idx) {
        return (
            <View key={idx} style={styles.item}>
                <Button onPress={this._buttonClicked.bind(this, item.slug)}>
                    <View style={{flexDirection: "row"}}>
                        <Image source={require("../images/district.png")}
                          style={styles.icon} />
                        <Text style={styles.text}>
                          {item.district}
                        </Text>
                    </View>
                </Button>
            </View>
        )
    }

    render() {
        return (
            <View>
                <Toolbar title="İlçeler" navigator={this.props.navigator} />
                <ScrollView style={styles.container}>
                    {this.props.districts.map(this._renderItem.bind(this))}
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
    icon: {
      width: 30,
      height: 30,
      marginRight: 5
    },
    text: {
      marginTop: 8,
      marginLeft: 5
    },
    item: {
      marginBottom: 10,
      paddingBottom: 10,
      flexDirection: 'row',
      borderStyle: 'solid',
      borderBottomColor: '#f9f7f7',
      borderTopColor: '#FFF',
      borderLeftColor: '#FFF',
      borderRightColor: '#FFF',
      borderWidth: 1
    }
}


const _Districts = connect(
    (state) => ({'districts': state.get('districts')}),
    actionCreators
)(Districts)

export default _Districts