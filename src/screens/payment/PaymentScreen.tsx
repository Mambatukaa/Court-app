import React, { Component, useLayoutEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { gql, useQuery, useMutation } from '@apollo/client';
import {
  CreditCardInput,
  LiteCreditCardInput
} from 'react-native-credit-card-input';

import { mutations, queries } from './graphql';
import { BookingsAddMutationResponse } from './types';

const USE_LITE_CREDIT_CARD_INPUT = false;

interface IProps {
  route: any;
}

const Payment = (props: IProps) => {
  const navigation = useNavigation();

  const [booking] = useMutation<BookingsAddMutationResponse>(
    gql(mutations.bookingsAdd)
  );

  const { courtId, scheduleId } = props.route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            onPress={() => {
              {
                booking({
                  variables: {
                    courtId,
                    // userId,
                    scheduleId
                  },
                  refetchQueries: ['bookingDetail', 'schedulesMain']
                })
                  .then(() => {
                    console.log('amjilttai');
                    navigation.navigate('Захиалгууд');
                  })
                  .catch(e => {
                    console.log(e, 'error error');
                  });
              }
            }}
          >
            <MaterialIcons
              name="payment"
              size={26}
              style={{ color: 'white', marginRight: 15, marginTop: 4 }}
            />
          </TouchableOpacity>
        </View>
      )
    });
  }, [navigation]);

  const onChange = formData => {
    console.log(JSON.stringify(formData, null, ' '));
  };

  const onFocus = field => {
    console.log(field);
  };

  return (
    // <View style={s.container}>
    //   {USE_LITE_CREDIT_CARD_INPUT ? (
    //     <LiteCreditCardInput
    //       autoFocus
    //       inputStyle={s.input}
    //       validColor={'black'}
    //       invalidColor={'red'}
    //       placeholderColor={'darkgray'}
    //       onFocus={onFocus}
    //       onChange={onChange}
    //     />
    //   ) : (
    //     <CreditCardInput
    //       autoFocus
    //       requiresName
    //       requiresCVC
    //       requiresPostalCode
    //       labelStyle={s.label}
    //       inputStyle={s.input}
    //       validColor={'black'}
    //       invalidColor={'red'}
    //       placeholderColor={'darkgray'}
    //       onFocus={onFocus}
    //       onChange={onChange}
    //     />
    //   )}
    // </View>
    <View>
      <Text>hello</Text>
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
