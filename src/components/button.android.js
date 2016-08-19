'use strict'

import React from 'react';
import {TouchableNativeFeedback, View} from 'react-native';

const Button = (props) => {
  return <TouchableNativeFeedback
    delayPressIn={0}
    background={TouchableNativeFeedback.SelectableBackground()}
    {...props}
  >
    {props.children}
  </TouchableNativeFeedback>;
};

module.exports = Button;