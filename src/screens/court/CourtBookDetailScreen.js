import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import queries from './graphql/queries';

const CourtBookDetail = props => {
  /*     const { courtId } = props.route.params;

  


  const { data, loading, error } = useQuery(gql(queries.courtDetail), {
    variables: {
      _id: courtId,
    },
  });

  if (loading) {
    return null;
  }

  const { courtDetail } = data;

  console.log(courtDetail, 'asdasdads'); */

  return (
    <View>
      <Text>Court book detail screen</Text>
    </View>
  );
};

export const screenOptions = () => {
  return {
    headerTitle: 'Захиалга',
    headerBackTitle: ' '
  };
};

export default CourtBookDetail;
