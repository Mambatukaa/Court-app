import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  ScrollView,
  StatusBar,
  Alert,
  KeyboardAvoidingView
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { gql, useMutation } from '@apollo/client';

import * as Animatable from 'react-native-animatable';
import { FontAwesome, Feather } from '@expo/vector-icons';
import { BackButton, GradientBtn } from '../../common/components';
import { colors } from '../../common/styles';
import { mutations } from './graphql';
import { SignUpMutationResponse } from './types';

interface IData {
  username: string;
  email: string;
  password: string;
  confirm_password: string;
  check_textInputChange: boolean;
  check_emailInputChange: boolean;
  secureTextEntry: boolean;
  confirm_secureTextEntry: boolean;
  isValidUser: boolean;
  isValidPassword: boolean;
}

const SignInScreen = () => {
  const [data, setData] = React.useState<IData>({
    username: '',
    email: '',
    password: '',
    confirm_password: '',
    check_textInputChange: false,
    check_emailInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true
  });

  const [signUp] = useMutation<SignUpMutationResponse>(gql(mutations.signUp));

  const navigation = useNavigation();

  const textInputChange = (val: string) => {
    if (val.length > 4) {
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

  const handleEmailChange = (val: string) => {
    {
      if (
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          val
        )
      ) {
        setData({
          ...data,
          email: val,
          check_emailInputChange: true
        });
      } else {
        setData({
          ...data,
          email: val,
          check_emailInputChange: false
        });
      }
    }
  };

  const handlePasswordChange = (val: string) => {
    if (val.length > 8 || val.length === 0) {
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

  const handleSignUp = (data: IData) => {
    if (!data.check_textInputChange) {
      Alert.alert('?????????? ????????!', '?????????????? ???????????? ???????? ?????????? ??????????.', [
        { text: '???????? ????????????????????' }
      ]);
      return;
    }

    if (!data.check_emailInputChange) {
      Alert.alert('?????????? ????????!', '???????? ?????????? ???????? ?????????? ??????????.', [
        { text: '???????? ????????????????????' }
      ]);
      return;
    }

    if (!data.isValidPassword) {
      Alert.alert('?????????? ????????!', '???????? ?????????? ???????? ?????????? ??????????.', [
        { text: '???????? ????????????????????' }
      ]);
      return;
    }

    if (
      data.username.length === 0 ||
      data.email.length === 0 ||
      data.password.length === 0
    ) {
      Alert.alert('?????????? ????????!', '???????? ?????????? ??????????.', [
        { text: '???????? ????????????????????' }
      ]);
      return;
    }

    signUp({
      variables: {
        username: data.username,
        email: data.email,
        password: data.password
      }
    })
      .then(data => {
        Alert.alert('??????????????????', '?????????????? ????????????.', [{ text: '??????????????' }]);

        navigation.navigate('SignIn');
      })
      .catch(e => {
        console.log(e, 'hehe', e.message);
        Alert.alert('?????????? ????????!', '?????????????? ?????? ?????????? ???????? ???????????????????? ??????????.', [
          { text: '???????? ????????????????????' }
        ]);
        return;
      });
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
        enabled={true}
      >
        <View style={styles.header}>
          <BackButton onPress={() => navigation.goBack()} />
          <Text style={styles.text_header}>????????????????????</Text>
        </View>

        <Animatable.View animation="fadeInUpBig" style={styles.footer}>
          <ScrollView>
            <Text style={styles.text_footer}>?????????????? ??????</Text>
            <View style={styles.action}>
              <FontAwesome
                name="user-o"
                color={colors.colorCoreDarkBlue}
                size={20}
              />
              <TextInput
                placeholder="?????????????? ??????"
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={val => textInputChange(val)}
              />
              {data.check_textInputChange ? (
                <Animatable.View animation="bounceIn">
                  <Feather name="check-circle" color="green" size={20} />
                </Animatable.View>
              ) : null}
            </View>
            {data.isValidUser || !data.username ? null : (
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
                  marginTop: 35
                }
              ]}
            >
              ????????
            </Text>
            <View style={styles.action}>
              <Feather name="mail" color={colors.colorCoreDarkBlue} size={20} />
              <TextInput
                keyboardType="email-address"
                placeholder="???????? ????????"
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={val => handleEmailChange(val)}
                spellCheck={false}
              />
              {data.check_emailInputChange ? (
                <Animatable.View animation="bounceIn">
                  <Feather name="check-circle" color="green" size={20} />
                </Animatable.View>
              ) : null}
            </View>

            {data.check_emailInputChange || !data.email ? null : (
              <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={styles.errorMsg}>???????? ???????? ?????????? ??????????.</Text>
              </Animatable.View>
            )}

            <Text
              style={[
                styles.text_footer,
                {
                  marginTop: 35
                }
              ]}
            >
              ???????? ????
            </Text>
            <View style={styles.action}>
              <Feather name="lock" color={colors.colorCoreDarkBlue} size={20} />
              <TextInput
                placeholder="???????? ????"
                secureTextEntry={data.secureTextEntry ? true : false}
                style={styles.textInput}
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
                  ???????? ???? 8-?? ???????? ?????????????? ??????????.
                </Text>
              </Animatable.View>
            )}
            <View style={styles.textPrivate}>
              <Text style={styles.color_textPrivate}>
                {'???????? ???? ?????????????????????? ??????'}
              </Text>
              <Text
                style={[
                  styles.color_textPrivate,
                  { fontWeight: 'bold', color: colors.grdMain }
                ]}
                onPress={() => {
                  navigation.navigate('SignIn');
                }}
              >
                {' ?????? '}
              </Text>
              <Text style={[styles.color_textPrivate]}>
                {'???????? ???????????????? ????.'}
              </Text>
            </View>
            <View style={styles.button}>
              <GradientBtn
                text="????????????????????"
                linearGradientStyle={[styles.signIn]}
                textStyle={styles.textSign}
                onPress={() => {
                  handleSignUp(data);
                }}
              />
            </View>
          </ScrollView>
        </Animatable.View>
      </KeyboardAvoidingView>
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
    color: colors.colorCoreDarkBlue,
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
    color: colors.colorCoreDarkBlue
  },
  button: {
    alignItems: 'center',
    marginTop: 35
  },
  signIn: {
    borderRadius: 11,
    width: 335,
    overflow: 'hidden',
    height: 45
  },
  textSign: {
    fontSize: 17,
    fontWeight: 'bold'
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 30,
    justifyContent: 'center'
  },
  color_textPrivate: {
    color: colors.colorCoreDarkBlue
  },
  errorMsg: {
    color: colors.colorCoreRed,
    fontSize: 14,
    paddingTop: 8
  }
});
