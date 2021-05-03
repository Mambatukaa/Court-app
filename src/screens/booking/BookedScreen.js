import React, { useLayoutEffect } from 'react';
import { ScrollView, RefreshControl } from 'react-native';
import { gql, useQuery } from '@apollo/client';
import { useNavigation } from '@react-navigation/native';
import BookedCourt from '../../common/components/booking/BookedCourt';
import { colors } from '../../common/styles';
import { queries } from './graphql';

const BookedScreen = props => {
  const navigation = useNavigation();

  const { data, loading, error } = useQuery(gql(queries.currentUser), {
    fetchPolicy: 'network-only'
  });

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Захиалгууд'
    });
  }, [navigation]);

  const id = data?.currentUser._id || '';

  const {
    data: dataBCourt,
    loading: bCourtLoading,
    error: bCourtError,
    refetch: bCourtRefetch
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
    error: scheduleError,
    refetch: scheduleRefetch
  } = useQuery(gql(queries.allSchedules), {
    variables: {
      ids
    }
  });

  const allSchedules = scheduleData?.allSchedules || [];

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={bCourtLoading}
          onRefresh={() => bCourtRefetch()}
        />
      }
      style={{
        paddingTop: 20,
        backgroundColor: colors.bgMain
      }}
    >
      <BookedCourt allSchedules={allSchedules} />
    </ScrollView>
  );
};

export default BookedScreen;
