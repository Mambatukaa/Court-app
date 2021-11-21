/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { TextInput } from 'react-native';
import { colors, commonStyles } from '../styles';

interface IProps {
  onChangeText: () => void;
  value: string;
  style: any;
  placeholder: string;
  security: any;
}

const Editbox = ({
  onChangeText,
  value = '',
  style,
  placeholder,
  security
}: IProps) => {
  return (
    <TextInput
      autoCapitalize="none"
      autoCorrect={false}
      placeholder={placeholder}
      underlineColorAndroid="transparent"
      selectionColor={colors.colorPrimary}
      value={value.toString()}
      onChangeText={onChangeText}
      style={[commonStyles.input, style]}
      secureTextEntry={security}
    />
  );
};

export default Editbox;
