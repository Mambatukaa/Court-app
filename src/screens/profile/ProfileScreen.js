import React, { useLayoutEffect } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Avatar } from 'react-native-elements';

import useAuth, { AuthContext } from '../../common/utils/AuthContext';

import TextView from '../../common/components/TextView';
import GradientBtn from '../../common/components/GradientBtn';

import colors from '../../common/styles/colors';

const ProfileScreen = () => {
  const navigation = useNavigation();

  const { signOut } = React.useContext(AuthContext);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'My Profile'
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <Avatar
        style={styles.avatar}
        size='large'
        rounded
        source={{
          uri:
            'https://cdn.vox-cdn.com/thumbor/t_7cx8iWPnb_U6Tt22c1ZnChh3Q=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/21788189/1010493794.jpg.jpg'
        }}
      />

      <TextView text={'Bat-Amgalan Nasan-Ochir'} xlarge style={styles.title} />
      <View style={styles.itemContainer}>
        <TextView style={styles.itemLabel} text={'User name:'} />
        <TextView style={styles.itemValue} text={'Mambatukaa'} />
      </View>
      <View style={styles.itemContainer}>
        <TextView style={styles.itemLabel} text={'Location:'} />
        <TextView style={styles.itemValue} text={'Ulaanbaatar Mongolia'} />
      </View>
      <View style={styles.itemContainer}>
        <TextView style={styles.itemLabel} text={'Position:'} />
        <TextView style={styles.itemValue} text={'Software engineering'} />
      </View>
      <View style={styles.itemContainer}>
        <TextView style={styles.itemLabel} text={'Description:'} />
        <TextView
          style={styles.itemValue}
          text={`Software engineering at NUM`}
        />
      </View>
      <View style={styles.bottomContainer}>
        <GradientBtn
          text='Гарах'
          onPress={() => {
            signOut();
          }}
          text='Sign out'
        />
        <TextView text={' '} style={styles.version} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center'
  },
  avatar: {
    marginTop: 20,
    height: 100,
    width: 100,
    borderRadius: 50
  },
  title: {
    marginVertical: 10,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  itemContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 20
  },
  itemLabel: {
    width: '30%',
    color: colors.textPrimary,
    fontWeight: '500'
  },
  itemValue: {
    color: colors.colorCoreGray,
    maxWidth: '70%',
    textAlign: 'justify'
  },
  version: {
    alignSelf: 'flex-end',
    marginVertical: 10,
    fontSize: 10,
    color: colors.colorCoreGray
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
    paddingHorizontal: 20
  }
});

export default ProfileScreen;
