import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { GradientBtn } from '../../common/components';
import { SafeAreaView } from 'react-native-safe-area-context';
import images from '../../../assets/images';
import { colors } from '../../common/styles';

const Intro = props => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View />
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
              fontWeight: '800',
              color: colors.grdMain,
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
        <View />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            paddingBottom: 40
          }}
        >
          <GradientBtn
            text='Нэвтрэх'
            onPress={() => {
              navigation.navigate('SignIn');
              //   signIn();
            }}
            linearGradientStyle={[{ marginRight: 12 }, styles.button]}
            textStyle={styles.textBtn}
          />
          <GradientBtn
            text='Бүртгүүлэх'
            onPress={() => {
              navigation.navigate('SignUp');
            }}
            linearGradientStyle={[{ marginLeft: 13 }, styles.button]}
            textStyle={styles.textBtn}
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
    width: 150,
    borderRadius: 11
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  textBtn: {
    fontSize: 15
  }
});

export default Intro;
