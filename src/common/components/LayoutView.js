/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors, commonStyles } from '../styles';

const LayoutView = ({
  top,
  bottom,
  topContainer,
  bottomContainer,
  isRoundFromTop = true,
  hasShadow = true,
  isFillTop = false,
  backgroundColorContainer
}) => {
  return (
    <View
      style={[
        styles.container,
        {
          flex: 1,
          backgroundColor: backgroundColorContainer
            ? backgroundColorContainer
            : isRoundFromTop
            ? colors.colorWhite
            : '#7444E8'
        }
      ]}
    >
      <View
        style={[
          hasShadow ? (isRoundFromTop ? commonStyles.bottomShadow : {}) : {},
          {
            flex: isFillTop ? 1 : 0,
            backgroundColor: '#7444E8',
            borderBottomLeftRadius: isRoundFromTop ? 20 : 0,
            borderBottomRightRadius: isRoundFromTop ? 20 : 0,
            minHeight: 100
          },
          topContainer
        ]}
      >
        {top}
      </View>
      <View
        style={[
          hasShadow ? (isRoundFromTop ? {} : commonStyles.topShadow) : {},
          {
            flex: isFillTop ? 0 : 1,
            backgroundColor: colors.bgLight,
            borderTopLeftRadius: isRoundFromTop ? 0 : 20,
            borderTopRightRadius: isRoundFromTop ? 0 : 20
          },
          bottomContainer
        ]}
      >
        {bottom}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default LayoutView;
