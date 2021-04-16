import React from 'react';
import { View, ScrollView } from 'react-native';
import BookedCourt from '../../common/components/booking/BookedCourt';
import { colors } from '../../common/styles';

const BookedScreen = props => {
  return (
    <ScrollView style={{ paddingTop: 20, backgroundColor: colors.bgMain }}>
      <BookedCourt />
      <BookedCourt />
    </ScrollView>
  );
};

export default BookedScreen;
