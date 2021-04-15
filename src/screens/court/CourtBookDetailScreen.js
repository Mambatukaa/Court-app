import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import { gql, useQuery } from '@apollo/client';
import queries from './graphql/queries';

const CourtBookDetail = props => {
  const { courtId } = props.route.params;

  const { data, loading, error } = useQuery(gql(queries.courtDetail), {
    variables: {
      _id: courtId
    }
  });

  if (loading) {
    return null;
  }

  const { courtDetail } = data;

  return (
    <View style={{ flex: 1, backgroundColor: '#E0E0E0' }}>
      <View style={{ flexDirection: 'row' }}>
        <Image
          style={styles.image}
          source={{ uri: courtDetail.image }}
          resizeMode='cover'
        />
        <Text
          numberOfLines={2}
          ellipsizeMode='tail'
          style={[styles.courtName, {}]}
        >
          {courtDetail.name}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    backgroundColor: 'red',
    height: 90,
    width: 130,
    margin: 12,
    borderRadius: 7
  },
  courtName: {
    fontSize: 18,
    fontWeight: '600',
    margin: 15,
    flex: 1
  }
});

export const screenOptions = () => {
  return {
    headerTitle: 'Захиалга',
    headerBackTitle: ' '
  };
};

export default CourtBookDetail;
