import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  ActivityIndicator
} from 'react-native';

const GradientBtn = ({
  onPress,
  textStyle,
  linearGradientStyle,
  text,
  styledColors,
  loading
}) => {
  const defaultGradient = ['#B43CF3', '#a23ff0', '#8741EA', '#7444E8'];

  /* const defaultGradient = ['#cc2b5e', '#753a88']; */
  return (
    <View>
      <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
        <LinearGradient
          start={[0, 1]}
          end={[1, 0]}
          colors={styledColors ? styledColors : defaultGradient}
          style={[styles.linearGradient, linearGradientStyle]}
        >
          <View style={{ alignSelf: 'center' }}>
            {loading ? (
              <View style={{ flexDirection: 'row' }}>
                <ActivityIndicator
                  size={10}
                  color='white'
                  style={{ marginRight: 30 }}
                />
                <Text style={[styles.defaultText, textStyle]}>{text}</Text>
              </View>
            ) : (
              <Text style={[styles.defaultText, textStyle]}>{text}</Text>
            )}
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
    fontSize: 14,
    textAlign: 'center'
  },
  linearGradient: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 21,
    justifyContent: 'center'
  }
});

export default GradientBtn;
