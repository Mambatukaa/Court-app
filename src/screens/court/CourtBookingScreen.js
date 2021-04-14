import React from 'react';
import { View, Text } from 'react-native';

import CourtTimePick from '../../common/components/court/CourtTimePick';

const CourtBookingScreen = (props) => {
  return (
    <View>
      <CourtTimePick />
    </View>
  );
};

export default CourtBookingScreen;
