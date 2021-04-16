import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TextInput
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import GradientBtn from '../../common/components/GradientBtn';
import { AuthContext } from '../../common/utils/AuthContext';

const SignIn = props => {
  const navigation = useNavigation();
  const { signIn } = React.useContext(AuthContext);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View />
        <View style={{ justifyContent: 'center' }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
              textAlign: 'center',
              paddingBottom: 20
            }}
          >
            Нэвтрэх
          </Text>

          <TextInput
            placeholder='Email'
            keyboardType='email-address'
            style={[styles.input, styles.email]}
          />
          <TextInput
            placeholder='Password'
            secureTextEntry={true}
            style={[styles.input, styles.password]}
          />
          <Text style={{ marginTop: 15 }}>
            <Text style={[styles.text]}>{'Хэрэв та бүртгүүлээгүй бол '}</Text>
            <Text
              onPress={() => {
                navigation.navigate('SignUp');
              }}
              style={[{ color: '#B43CF3' }, styles.text]}
            >
              {'энд '}
            </Text>
            <Text style={[styles.text]}>{'дарна уу.'}</Text>
          </Text>
        </View>
        <GradientBtn
          linearGradientStyle={{ width: 160, borderRadius: 11 }}
          text='Нэвтрэх'
          onPress={() => {
            signIn();
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
    height: 50,
    width: 250,
    padding: 10,
    borderWidth: 1.5
  },

  email: {
    borderRadius: 10,
    marginBottom: 15
  },
  password: {
    borderRadius: 10
  },
  text: {
    fontWeight: 'bold',
    fontSize: 13
  }
});

export default SignIn;
