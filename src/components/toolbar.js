'use strict'

import React, {Component} from 'react';
import {View, Text} from 'react-native';


class Toolbar extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    {this.props.title}
                </Text>
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
}

module.exports = Toolbar;