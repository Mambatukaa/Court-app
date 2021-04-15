import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { AuthContext } from '../../common/utils/AuthContext';

import GradientBtn from '../../common/components/GradientBtn';
import { SafeAreaView } from 'react-native-safe-area-context';
import images from '../../../assets/images';

const Intro = props => {
  const navigation = useNavigation();

  const { signIn, signOut } = React.useContext(AuthContext);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View></View>
        <View>
          <Image
            source={images.kobe}
            style={{
              height: 150,
              resizeMode: 'contain',
              alignSelf: 'center',
              marginBottom: 30
            }}
          />
          <Text
            style={{
              textAlign: 'center',
              fontSize: 23,
              fontWeight: 'bold',
              color: '#B43CF3',
              paddingBottom: 12
            }}
          >
            Mamba Court
          </Text>
          <Text>
            <Text style={styles.text}>{'Heroes come and go, But \n'}</Text>
            <Text style={[{ color: '#fdba21' }, styles.text]}>
              {'legends '}
            </Text>
            <Text style={styles.text}>{'are forever'}</Text>
          </Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <GradientBtn
            text='Нэвтрэх'
            onPress={() => {
              /* navigation.navigate('SignIn'); */
              signIn();
            }}
            linearGradientStyle={[{ marginRight: 12 }, styles.button]}
          />
          <GradientBtn
            text='Бүртгүүлэх'
            onPress={() => {
              navigation.navigate('SignUp');
            }}
            linearGradientStyle={[{ marginLeft: 13 }, styles.button]}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-around'
  },
  button: {
    backgroundColor: 'red',
    width: 130,
    borderRadius: 11
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default Intro;
