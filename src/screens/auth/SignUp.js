import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import Editbox from '../../common/components/Editbox';
import LayoutView from '../../common/components/LayoutView';

import { Ionicons } from '@expo/vector-icons';

import { colors } from '../../common/styles';
import { GradientBtn } from '../../common/components';

const SignUp = props => {
  const renderTop = () => {
    return <View style={{ height: 50 }}></View>;
  };
  const renderBottom = () => {
    return (
      <View style={styles.container}>
        <View
          style={{
            flexWrap: 'wrap',
            marginTop: -80,
            alignSelf: 'center',
            marginBottom: 30
          }}
        >
          <View
            style={{
              backgroundColor: colors.bgGray,
              borderRadius: 20,
              padding: 10
            }}
          >
            <Ionicons name='account' size={80} color={colors.colorWhite} />
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
            <Ionicons
              name='square-edit-outline'
              size={20}
              color={colors.colorSecondary}
            />
          </View>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
            marginBottom: 40
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: 'space-evenly',
              marginBottom: 40
            }}
          >
            <Editbox
              placeholder='Овог'
              onChangeText={text => console.log(text)}
            />
            <Editbox
              placeholder='Нэр'
              onChangeText={text => console.log(text)}
            />
            <Editbox
              placeholder='Утасны дугаар'
              onChangeText={text => console.log(text)}
            />
            <Editbox
              placeholder='Нууц үг'
              onChangeText={text => console.log(text)}
            />
            <Editbox
              placeholder='Нууц үг давтах'
              onChangeText={text => console.log(text)}
            />
            <Text>
              <Text style={styles.txt}>{'Өмнө бүртгүүлсэн бол'}</Text>
              <Text style={({ color: '#B43CF3' }, [styles.txt])}>
                {' энд '}
              </Text>
              <Text style={styles.txt}>{'дарна уу.'}</Text>
            </Text>
          </View>

          <GradientBtn
            linearGradientStyle={styles.btnStyle}
            onPress={() => {
              console.log('hello world');
            }}
            text='Бүртгүүлэх'
          />
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
    paddingTop: 10,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold'
  },
  btnStyle: {
    borderRadius: 11
  }
});
export default SignUp;
