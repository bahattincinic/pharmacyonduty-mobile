'use strict';

import React, {Component} from 'react';
import {View, ScrollView, Text, InteractionManager} from 'react-native';
import Button from '../components/button'
import Toolbar from '../components/toolbar'
import {connect} from 'react-redux'
import * as actionCreators from '../action_creators'


class Districts extends Component {

    componentDidMount() {
      InteractionManager.runAfterInteractions(() => {
        this.props.fetchDistricts()
      });
    }

    _buttonClicked(slug) {

    }

    _renderItem(item, idx) {
        return (
            <View key={idx} style={styles.item}>
                <Button onPress={this._buttonClicked.bind(this, item.slug)}>
                    <View>
                        <Text>{item.district}</Text>
                    </View>
                </Button>
            </View>
        )
    }

    render() {
        return (
            <View>
                <Toolbar title="İlçeler" />
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
    item: {
      marginBottom: 10,
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