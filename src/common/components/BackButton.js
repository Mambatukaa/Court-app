import React from 'react';

import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const BackButton = props => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={props.onPress}>
      <View style={{ paddingTop: 40, paddingLeft: 25 }}>
        <Ionicons
          name='chevron-back-sharp'
          size={35}
          color='white'
          style={{
            width: 38,
            borderRadius: 7,
            textAlign: 'center',
            backgroundColor: '#B43CF3',
            overflow: 'hidden'
          }}
        ></Ionicons>
      </View>
    </TouchableOpacity>
  );
};

export default BackButton;
