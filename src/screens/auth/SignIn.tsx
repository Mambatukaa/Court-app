import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
  Alert
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import { gql, useMutation } from '@apollo/client';

import { FontAwesome, Feather } from '@expo/vector-icons';
import { AuthContext } from '../../common/utils/AuthContext';
import { colors } from '../../common/styles';
import { BackButton, GradientBtn } from '../../common/components';

import { mutations } from './graphql';
import { LoginMutationResponse } from './types';
import { IAuth } from '../../common/types';

const SignInScreen = () => {
  const [data, setData] = React.useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true
  });
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const [login] = useMutation<LoginMutationResponse>(gql(mutations.login));

  const { signIn } = React.useContext<IAuth>(AuthContext);

  const textInputChange = (val: string) => {
    if (val.trim().length >= 4 || val.length === 0) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
        isValidUser: true
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
        isValidUser: false
      });
    }
  };

  const handlePasswordChange = (val: string) => {
    if (val.trim().length >= 8 || val.length === 0) {
      setData({
        ...data,
        password: val,
        isValidPassword: true
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry
    });
  };

  const handleValidUser = (val: string) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        isValidUser: true
      });
    } else {
      setData({
        ...data,
        isValidUser: false
      });
    }
  };

  const loginHandle = (userName: string, password: string) => {
    if (userName.length == 0 || password.length == 0) {
      Alert.alert('?????????? ????????!', '?????????????? ?????? ?????????? ???????? ???? ???????????? ??????????.', [
        { text: '???????? ??????????????' }
      ]);
      return;
    }

    if (userName.length < 5 || password.length < 8) {
      Alert.alert(
        '?????????? ????????!',
        '?????????????? ?????? ?????????? ???????? ?????????? ???????? ?????????? ??????????.',
        [{ text: '???????? ??????????????' }]
      );
      return;
    }

    login({
      variables: {
        email: userName,
        password
      },
      refetchQueries: ['currentUser']
    })
      .then((el: any) => {
        // setLoading(true);
        const { data } = el;

        signIn(data.login);
      })
      .catch(e => {
        Alert.alert(
          '?????????????????? ??????????????????!',
          '?????????????? ?????? ?????????? ???????? ???? ?????????? ??????????.',
          [{ text: 'Okay' }]
        );
        return;
      });

    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <BackButton onPress={() => navigation.goBack()} />
        <Text style={styles.text_header}>??????????????</Text>
      </View>
      <Animatable.View
        animation="fadeInUpBig"
        style={[
          styles.footer,
          {
            backgroundColor: colors.bgGray
          }
        ]}
      >
        <Text
          style={[
            styles.text_footer,
            {
              color: colors.colorCoreDarkGray
            }
          ]}
        >
          ?????????????? ??????
        </Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color={colors.textPrimary} size={20} />
          <TextInput
            placeholder="?????????????? ??????"
            placeholderTextColor={colors.colorCoreMediumGray}
            style={[
              styles.textInput,
              {
                color: colors.colorCoreDarkGray
              }
            ]}
            autoCapitalize="none"
            onChangeText={val => textInputChange(val)}
            onEndEditing={e => handleValidUser(e.nativeEvent.text)}
          />
          {data.check_textInputChange ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="green" size={20} />
            </Animatable.View>
          ) : null}
        </View>
        {data.isValidUser ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>
              ?????????????? ?????? 4-?? ???????? ???????? ??????????.
            </Text>
          </Animatable.View>
        )}

        <Text
          style={[
            styles.text_footer,
            {
              color: colors.colorCoreDarkGray,
              marginTop: 35
            }
          ]}
        >
          ???????? ????
        </Text>
        <View style={styles.action}>
          <Feather name="lock" color={colors.textPrimary} size={20} />
          <TextInput
            placeholder="???????? ????"
            placeholderTextColor={colors.colorCoreMediumGray}
            secureTextEntry={data.secureTextEntry ? true : false}
            style={[styles.textInput]}
            autoCapitalize="none"
            onChangeText={val => handlePasswordChange(val)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" color="grey" size={20} />
            ) : (
              <Feather name="eye" color="grey" size={20} />
            )}
          </TouchableOpacity>
        </View>
        {data.isValidPassword ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>
              ???????? ???? 8 ?????? ???????? ?????????????? ??????????.
            </Text>
          </Animatable.View>
        )}

        <TouchableOpacity>
          <Text style={{ color: colors.primary, marginTop: 15 }}>
            ???????? ???? ???????????????
          </Text>
        </TouchableOpacity>
        <View style={styles.button}>
          <GradientBtn
            text="??????????????"
            linearGradientStyle={styles.signIn}
            textStyle={styles.textSign}
            onPress={() => {
              loginHandle(data.username, data.password);
            }}
            loading={loading}
          />
          <GradientBtn
            text="????????????????????"
            linearGradientStyle={[styles.signIn, styles.signUp]}
            textStyle={styles.textSign}
            onPress={() => {
              navigation.navigate('SignUp');
            }}
          />
        </View>
      </Animatable.View>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grdPrimary
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a'
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
    paddingTop: 8
  },
  button: {
    alignItems: 'center',
    marginTop: 50
  },
  signIn: {
    borderRadius: 11,
    width: 335,
    overflow: 'hidden',
    height: 45
  },
  signUp: {
    marginTop: 20
  },
  textSign: {
    fontSize: 17,
    fontWeight: 'bold'
  }
});
