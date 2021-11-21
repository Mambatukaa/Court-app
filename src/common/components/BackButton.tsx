import React from 'react';

import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../styles';

interface IProps {
  onPress: () => void;
}

const BackButton = (props: IProps) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={props.onPress}>
      <View
        style={{
          paddingBottom: 20
        }}
      >
        <Ionicons
          name="chevron-back-sharp"
          size={35}
          color={colors.colorWhite}
          style={{
            width: 38,
            borderRadius: 7,
            textAlign: 'center',
            backgroundColor: colors.grdMain,
            overflow: 'hidden'
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default BackButton;
