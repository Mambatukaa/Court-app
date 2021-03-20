import React from 'react';
import { View, ScrollView } from 'react-native';
import BookedCourt from '../../common/components/booking/BookedCourt';

const BookedScreen = props => {
  return (
    <ScrollView style={{ paddingTop: 20, backgroundColor: 'white' }}>
      <BookedCourt />
      <BookedCourt />
    </ScrollView>
  );
};

export default BookedScreen;
