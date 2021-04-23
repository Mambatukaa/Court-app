import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { View, Text } from 'react-native';
import { queries } from './graphql';

import CourtTimePick from '../../common/components/court/CourtTimePick';

const CourtBookingScreen = props => {
  const { params } = props.route;

  const { data, loading, error } = useQuery(gql(queries.courtDetail), {
    variables: {
      _id: params.courtId
    }
  });

  if (loading) {
    return null;
  }

  const courtDetail = data.courtDetail || {};

  return (
    <View style={{ flex: 1 }}>
      <CourtTimePick params={params} courtDetail={courtDetail} />
    </View>
  );
};

export default CourtBookingScreen;
