import React, { useLayoutEffect } from 'react';
import { ScrollView, RefreshControl } from 'react-native';
import { gql, useQuery } from '@apollo/client';
import { useNavigation } from '@react-navigation/native';
import BookedCourt from '../../common/components/booking/BookedCourt';
import { colors } from '../../common/styles';
import { queries } from './graphql';
import { UserBookingsQueryResponse } from './types';

const BookedScreen = (props: any) => {
  const navigation = useNavigation();

  const { data } = useQuery(gql(queries.currentUser), {
    fetchPolicy: 'network-only'
  });

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Захиалгууд'
    });
  }, [navigation]);

  const currentUserId = data?.currentUser._id || '';

  const {
    loading: bCourtLoading,
    data: bData,
    refetch: bCourtRefetch
  } = useQuery<UserBookingsQueryResponse>(gql(queries.userBookings), {
    variables: {
      userId: currentUserId
    }
  });

  const ids: any = [];

  const userBookings = bData?.userBookings || [];

  userBookings?.map((book: any) => ids.push(book.scheduleId));

  const { data: scheduleData } = useQuery(gql(queries.schedulesMain), {
    variables: {
      ids
    }
  });

  const allSchedules = scheduleData?.schedulesMain || [];

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={bCourtLoading}
          onRefresh={() => bCourtRefetch()}
        />
      }
      style={{
        backgroundColor: colors.bgMain
      }}
    >
      <BookedCourt allSchedules={allSchedules} />
    </ScrollView>
  );
};

export default BookedScreen;
