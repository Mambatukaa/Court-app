import React, { useLayoutEffect } from 'react';
import { ScrollView, RefreshControl } from 'react-native';
import { gql, useQuery } from '@apollo/client';
import { useNavigation } from '@react-navigation/native';
import BookedCourt from '../../common/components/booking/BookedCourt';
import { colors } from '../../common/styles';
import { queries } from './graphql';
import { UserBookingsQueryResponse } from './types';

function BookedScreen(props: any) {
  const navigation = useNavigation();

  const { data: userData } = useQuery(gql(queries.currentUser), {
    fetchPolicy: 'network-only'
  });

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Захиалгууд'
    });
  }, [navigation]);

  const currentUserId = userData?.currentUser._id || '';

  const {
    loading: bCourtLoading,
    data,
    refetch: bCourtRefetch
  } = useQuery<UserBookingsQueryResponse>(gql(queries.userBookings), {
    variables: {
      userId: currentUserId
    }
  });

  if (!data) {
    return null;
  }

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
      <BookedCourt bookings={data?.userBookings} />
    </ScrollView>
  );
}

export default BookedScreen;
