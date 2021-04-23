import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { gql, useQuery } from '@apollo/client';
import { queries } from './graphql';

const PaymentScreen = props => {
  const { data, loading, error } = useQuery(gql(queries.currentUser), {
    fetchPolicy: 'network-only'
  });

  if (loading) {
    return <ActivityIndicator size='small' color='#B43CF3' />;
  }

  return (
    <View>
      <Text>Payment SCreen</Text>
    </View>
  );
};

export default PaymentScreen;
