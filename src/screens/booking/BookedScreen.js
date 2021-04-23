import React from 'react';
import { View, ScrollView } from 'react-native';
import { gql, useQuery } from '@apollo/client';
import BookedCourt from '../../common/components/booking/BookedCourt';
import { colors } from '../../common/styles';
import { queries } from './graphql';

const BookedScreen = props => {
  const { data, loading, error } = useQuery(gql(queries.currentUser), {
    fetchPolicy: 'network-only'
  });

  const id = data?.currentUser._id || '';

  const {
    data: dataBCourt,
    loading: bCourtLoading,
    error: bCourtError
  } = useQuery(gql(queries.bookingDetails), {
    variables: {
      userId: id
    }
  });

  const ids = [];

  const bookingDetails = dataBCourt?.bookingDetails || [];

  bookingDetails?.map(book => {
    ids.push(book.scheduleId);
  });

  const {
    data: scheduleData,
    loading: scheduleLoading,
    error: scheduleError
  } = useQuery(gql(queries.allSchedules), {
    variables: {
      ids
    }
  });

  const allSchedules = scheduleData?.allSchedules || [];

  return (
    <ScrollView style={{ paddingTop: 20, backgroundColor: colors.bgMain }}>
      <BookedCourt allSchedules={allSchedules} />
    </ScrollView>
  );
};

export default BookedScreen;
