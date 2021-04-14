import React from 'react';
import { View, Text } from 'react-native';

import CourtTimePick from '../../common/components/court/CourtTimePick';

const CourtBookingScreen = props => {
  const { params } = props.route;
  return (
    <View>
      <CourtTimePick params={params} />
    </View>
  );
};

export default CourtBookingScreen;
