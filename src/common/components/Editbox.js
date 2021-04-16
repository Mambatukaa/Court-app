/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { TextInput } from 'react-native';
import { colors, commonStyles } from '../styles';

const Editbox = ({ onChangeText, value = '', style, placeholder }) => {
  return (
    <TextInput
      autoCapitalize='none'
      autoCorrect={false}
      placeholder={placeholder}
      underlineColorAndroid='transparent'
      selectionColor={colors.colorPrimary}
      value={value.toString()}
      onChangeText={onChangeText}
      style={[commonStyles.input, style]}
    />
  );
};

export default Editbox;
