import React from 'react';
import { View, Text } from 'react-native';

import CourtTimePick from '../../common/components/court/CourtTimePick';

const CourtBookingScreen = props => {
  const { params } = props.route;
  return (
    <View style={{ flex: 1 }}>
      <CourtTimePick params={params} />
    </View>
  );
};

export default CourtBookingScreen;
