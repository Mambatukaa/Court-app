import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import GradientBtn from '../../common/components/GradientBtn';
import { AuthContext } from '../../common/utils/AuthContext';
import { mutations } from './graphql';
import { useMutation, gql } from '@apollo/client';
import { colors } from '../../common/styles';
import { BackButton } from '../../common/components';

const SignIn = props => {
  const { signIn } = React.useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const [login] = useMutation(gql(mutations.login));

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <BackButton onPress={() => navigation.goBack()} />
      <View style={styles.container}>
        <View style={{ justifyContent: 'center' }}>
          <Text
            style={{
              fontWeight: '700',
              fontSize: 24,
              textAlign: 'center',
              paddingBottom: 50,
              marginTop: 30,
              color: colors.grdMain
            }}
          >
            Нэвтрэх
          </Text>
          <TextInput
            onChangeText={mail => setEmail(mail)}
            value={email}
            placeholder='Нэвтрэх нэр эсвэл имэйл'
            keyboardType='email-address'
            style={[styles.input, styles.email]}
          />
          <TextInput
            onChangeText={pass => setPassword(pass)}
            value={password}
            placeholder='Нууц үг'
            secureTextEntry={true}
            style={[styles.input, styles.password]}
          />
          <Text style={{ marginTop: 15 }}>
            <Text style={[styles.text]}>{'Хэрэв та бүртгүүлээгүй бол '}</Text>
            <Text
              onPress={() => {
                navigation.navigate('SignUp');
              }}
              style={[{ color: colors.grdMain }, styles.text]}
            >
              {'энд '}
            </Text>
            <Text style={[styles.text]}>{'дарна уу.'}</Text>
          </Text>
        </View>
        <GradientBtn
          linearGradientStyle={{
            width: 170,
            borderRadius: 11,
            marginBottom: 20
          }}
          textStyle={{ fontSize: 15 }}
          text='Нэвтрэх'
          onPress={() => {
            login({
              variables: {
                input: email,
                password
              }
            })
              .then(el => {
                const { data } = el;
                signIn(data.login);
              })
              .catch(e => {
                console.log(e.code);
              });
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  input: {
    fontWeight: '600',
    fontSize: 14,
    color: 'black',
    borderRadius: 10,
    height: 50,
    width: 250,
    padding: 10,
    borderWidth: 1.5,
    borderColor: colors.grdMain,
    paddingHorizontal: 18
  },

  email: {
    marginBottom: 15
  },
  text: {
    fontWeight: 'bold',
    fontSize: 13
  }
});

export default SignIn;
