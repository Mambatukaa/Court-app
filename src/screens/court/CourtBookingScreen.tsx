import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useQuery, gql } from '@apollo/client';
import { View } from 'react-native';
import { queries } from './graphql';

import CourtTimePick from '../../common/components/court/CourtTimePick';
import { colors } from '../../common/styles';

function CourtBookingScreen(props: any) {
  const { params } = props.route;

  const { data, loading } = useQuery(gql(queries.courtDetail), {
    variables: {
      _id: params.courtId
    }
  });

  if (loading) {
    return (
      <ActivityIndicator
        size="small"
        color={colors.grdMain}
        style={{ justifyContent: 'center', flex: 1 }}
      />
    );
  }

  const courtDetail = data?.courtDetail || {};

  return (
    <View style={{ flex: 1 }}>
      <CourtTimePick params={params} courtDetail={courtDetail} />
    </View>
  );
}

export default CourtBookingScreen;
