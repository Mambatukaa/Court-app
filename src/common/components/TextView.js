import React from 'react';
import { Text, StyleSheet } from 'react-native';

const TextView = props => {
  const {
    xxsmall,
    xsmall,
    small,
    large,
    xlarge,
    xxlarge,
    xxxlarge,
    text,
    style
  } = props;

  if (xxsmall) return <Text style={[styles.xxsmall, style]}>{text}</Text>;
  if (xsmall) return <Text style={[styles.xsmall, style]}>{text}</Text>;
  if (small) return <Text style={[styles.small, style]}>{text}</Text>;
  if (large) return <Text style={[styles.large, style]}>{text}</Text>;
  if (xlarge) return <Text style={[styles.xlarge, style]}>{text}</Text>;
  if (xxlarge) return <Text style={[styles.xxlarge, style]}>{text}</Text>;
  if (xxxlarge) return <Text style={[styles.xxxlarge, style]}>{text}</Text>;
  return (
    <Text {...props} style={[styles.default, style]} ellipsizeMode='tail'>
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  xxsmall: {
    // fontFamily: fonts.fontRoboto,
    fontSize: 8
  },
  xsmall: {
    // fontFamily: fonts.fontRoboto,
    fontSize: 10
  },
  small: {
    // fontFamily: fonts.fontRoboto,
    fontSize: 12
  },
  default: {
    fontSize: 14
    // fontFamily: fonts.fontRoboto,
  },
  large: {
    // fontFamily: fonts.fontRoboto,
    fontSize: 16
  },
  xlarge: {
    // fontFamily: fonts.fontRoboto,
    fontSize: 18
  },
  xxlarge: {
    // fontFamily: fonts.fontRoboto,
    fontSize: 20
  },
  xxxlarge: {
    // fontFamily: fonts.fontRoboto,
    fontSize: 25
  }
});

export default TextView;
