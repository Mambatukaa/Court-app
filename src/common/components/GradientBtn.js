import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

const GradientBtn = ({ onPress, textStyle, linearGradientStyle }) => {
  const defaultGradient = ['#cc2b5e', '#753a88'];
  return (
    <View>
      <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
        <LinearGradient
          colors={defaultGradient}
          style={[styles.linearGradient, linearGradientStyle]}
        >
          <View>
            <Text style={[styles.defaultText, textStyle]}>Sign out</Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inView: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  defaultText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 15,
    textAlign: 'center'
  },
  linearGradient: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 21
  }
});

export default GradientBtn;
