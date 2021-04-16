import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { gql, useMutation } from '@apollo/client';
import { useNavigation } from '@react-navigation/native';

import Editbox from '../../common/components/Editbox';
import LayoutView from '../../common/components/LayoutView';

import { Ionicons } from '@expo/vector-icons';

import { colors } from '../../common/styles';
import { GradientBtn } from '../../common/components';
import { mutations } from './graphql';
import { BackButton } from '../../common/components';

const SignUp = props => {
  const [username, setUsername] = useState('');
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');

  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [passVerify, setPassVerify] = useState('');

  const navigation = useNavigation();

  const [signUp] = useMutation(gql(mutations.createUser));

  const renderTop = () => {
    return <BackButton onPress={() => navigation.goBack()} />;
  };
  const renderBottom = () => {
    return (
      <View style={styles.container}>
        <View
          style={{
            flexWrap: 'wrap',
            marginTop: -80,
            alignSelf: 'center',
            marginBottom: 20
          }}
        >
          <View
            style={{
              backgroundColor: colors.bgGray,
              borderRadius: 20,
              padding: 10
            }}
          >
            <Ionicons name='basketball' size={80} color={colors.colorWhite} />
          </View>
          <View
            style={{
              alignSelf: 'flex-end',
              marginEnd: -10,
              marginTop: -25,
              backgroundColor: colors.colorWhite,
              padding: 5,
              borderRadius: 20
            }}
          >
            <Ionicons name='book' size={20} color={colors.colorSecondary} />
          </View>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
            marginBottom: 20
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: 'space-around',
              marginBottom: 40
            }}
          >
            <Editbox
              placeholder='Нэвтрэх нэр'
              onChangeText={text => setUsername(text)}
              value={username}
            />
            <Editbox
              placeholder='Овог'
              onChangeText={text => setLastName(text)}
              value={lastName}
            />
            <Editbox
              placeholder='Нэр'
              onChangeText={text => setFirstName(text)}
              value={firstName}
            />
            <Editbox
              placeholder='Мэйл хаяг'
              onChangeText={text => setEmail(text)}
              value={email}
            />
            <Editbox
              placeholder='Утасны дугаар'
              onChangeText={text => setPhone(text)}
              value={phone}
            />
            <Editbox
              placeholder='Нууц үг'
              onChangeText={text => setPassword(text)}
              value={password}
              security={true}
            />
            <Editbox
              placeholder='Нууц үг давтах'
              onChangeText={text => setPassVerify(text)}
              value={passVerify}
              security={true}
              style={styles.Editbox}
            />
          </View>

          <GradientBtn
            linearGradientStyle={styles.btnStyle}
            textStyle={{ fontSize: 15 }}
            onPress={() => {
              signUp({
                variables: {
                  username,
                  firstName,
                  lastName,
                  email,
                  phone,
                  password
                }
              })
                .then(el => {
                  navigation.navigate('SignIn');
                })
                .catch(e => {
                  console.log(e);
                });
            }}
            text='Бүртгүүлэх'
          />
          <Text style={{ paddingTop: 25 }}>
            <Text style={styles.txt}>{'Өмнө бүртгүүлсэн бол'}</Text>
            <Text style={[{ color: '#B43CF3' }, styles.txt]}>{' энд '}</Text>
            <Text style={styles.txt}>{'дарна уу.'}</Text>
          </Text>
        </View>
      </View>
    );
  };

  return (
    <LayoutView
      bottom={renderBottom()}
      top={renderTop()}
      isRoundFromTop={false}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30
  },
  txt: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '700'
  },
  btnStyle: {
    borderRadius: 11
  }
});
export default SignUp;
