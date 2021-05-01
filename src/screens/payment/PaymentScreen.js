import React, { Component, useLayoutEffect } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { gql, useQuery, useMutation } from '@apollo/client';
import {
  CreditCardInput,
  LiteCreditCardInput
} from 'react-native-credit-card-input';

import { mutations, queries } from './graphql';

const USE_LITE_CREDIT_CARD_INPUT = false;

const Payment = props => {
  const navigation = useNavigation();

  const { data, loading, error } = useQuery(gql(queries.currentUser));
  const [booking] = useMutation(gql(mutations.bookingAdd));
  const { courtId, scheduleId } = props.route.params;
  const userId = data?.currentUser?._id;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            onPress={() => {
              {
                userId
                  ? booking({
                      variables: {
                        courtId,
                        userId,
                        scheduleId
                      },
                      refetchQueries: ['bookingDetails', 'allSchedules']
                    })
                      .then(() => {
                        console.log('amjilttai');
                        navigation.navigate('Захиалгууд');
                      })
                      .catch(e => {
                        console.log(e);
                      })
                  : null;
              }
            }}
          >
            <MaterialIcons
              name='payment'
              size={26}
              style={{ color: 'white', marginRight: 15, marginTop: 4 }}
            />
          </TouchableOpacity>
        </View>
      )
    });
  }, [navigation, userId]);

  if (loading) {
    return null;
  }

  const onChange = formData => {
    console.log(JSON.stringify(formData, null, ' '));
  };

  const onFocus = field => {
    console.log(field);
  };

  return (
    <View style={s.container}>
      {USE_LITE_CREDIT_CARD_INPUT ? (
        <LiteCreditCardInput
          autoFocus
          inputStyle={s.input}
          validColor={'black'}
          invalidColor={'red'}
          placeholderColor={'darkgray'}
          onFocus={onFocus}
          onChange={onChange}
        />
      ) : (
        <CreditCardInput
          autoFocus
          requiresName
          requiresCVC
          requiresPostalCode
          labelStyle={s.label}
          inputStyle={s.input}
          validColor={'black'}
          invalidColor={'red'}
          placeholderColor={'darkgray'}
          onFocus={onFocus}
          onChange={onChange}
        />
      )}
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    marginTop: 60
  },
  label: {
    color: 'black',
    fontSize: 12
  },
  input: {
    fontSize: 16,
    color: 'black'
  }
});

export default Payment;
