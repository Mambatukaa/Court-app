import React, { useLayoutEffect } from 'react';
import { ScrollView, RefreshControl } from 'react-native';
import { gql, useQuery } from '@apollo/client';
import { useNavigation } from '@react-navigation/native';
import BookedCourt from '../../common/components/booking/BookedCourt';
import { colors } from '../../common/styles';
import { queries } from './graphql';
import { UserBookingsQueryResponse } from './types';
import withCurrentUser from '../auth/containers/withCurrentUser';
import { IUser } from '../auth/types';

interface IProps {
  currentUser: IUser;
}

function BookedScreen({ currentUser }: IProps) {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Bookings'
    });
  }, [navigation]);

  const {
    loading: bCourtLoading,
    data,
    refetch: bCourtRefetch
  } = useQuery<UserBookingsQueryResponse>(gql(queries.userBookings), {
    variables: {
      userId: currentUser._id
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

export default withCurrentUser(BookedScreen);
