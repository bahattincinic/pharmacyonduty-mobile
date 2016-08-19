'use strict'

import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Button from './button'


class Toolbar extends Component {

    _handleBack() {
        this.props.navigator.pop()
    }

    _renderBackButton() {
        if (this.props.navigator.getCurrentRoutes().length > 1) {
            return (
                <View style={styles.back}>
                    <Button onPress={this._handleBack.bind(this)}>
                      <View>
                        <Text style={{color: '#FFF'}}>Geri</Text>
                      </View>
                    </Button>
                </View>
            )
        } else{
            return (<View/>)
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{flex: 1}}>
                    <Text style={styles.title}>
                        {this.props.title}
                    </Text>
                </View>
                {this._renderBackButton()}
            </View>
        )
    }
}


const styles = {
    container: {
        backgroundColor: '#de0000',
        height: 56,
        paddingTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
        color: 'white',
        marginLeft: 15,
    },
    back: {
        alignItems: 'flex-end',
        marginRight: 20,
    }
}

module.exports = Toolbar;