import React, { useLayoutEffect } from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Avatar } from 'react-native-elements';
import { gql, useQuery, useMutation } from '@apollo/client';
import { AuthContext } from '../../common/utils/AuthContext';
import TextView from '../../common/components/TextView';
import GradientBtn from '../../common/components/GradientBtn';
import { colors } from '../../common/styles';
import { queries, mutations } from './graphql';
import { CurrentUserQueryResponse } from './types';

function ProfileScreen() {
  const navigation = useNavigation();

  const { signOut } = React.useContext(AuthContext);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Profile'
    });
  }, [navigation]);

  const [logout] = useMutation(gql(mutations.logout));

  const { data, loading } = useQuery<CurrentUserQueryResponse>(
    gql(queries.currentUser),
    {
      fetchPolicy: 'network-only'
    }
  );

  if (!data || loading) {
    return (
      <ActivityIndicator
        size="small"
        color={colors.grdMain}
        style={{ justifyContent: 'center', flex: 1 }}
      />
    );
  }

  const currentUser = data.currentUser;

  const nameCapitalized =
    currentUser.username.charAt(0).toUpperCase() +
    currentUser.username.slice(1);

  return (
    <SafeAreaView style={styles.container}>
      <Avatar
        containerStyle={styles.avatar}
        size="large"
        rounded={true}
        source={{
          uri: 'https://cdn.vox-cdn.com/thumbor/t_7cx8iWPnb_U6Tt22c1ZnChh3Q=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/21788189/1010493794.jpg.jpg'
        }}
      />

      <TextView text={nameCapitalized} xlarge={true} style={styles.title} />
      <View style={styles.itemContainer}>
        <TextView style={styles.itemLabel} text={'Нэвтрэх нэр:'} />
        <TextView
          style={styles.itemValue}
          text={currentUser.username || 'mambatukaa'}
        />
      </View>

      <View style={styles.itemContainer}>
        <TextView style={styles.itemLabel} text={'Email:'} />
        <TextView style={styles.itemValue} text={currentUser.email} />
      </View>

      <View style={styles.itemContainer}>
        <TextView style={styles.itemLabel} text={'Position:'} />
        <TextView style={styles.itemValue} text={currentUser.role || 'admin'} />
      </View>

      <View style={styles.itemContainer}>
        <TextView style={styles.itemLabel} text={'Sport:'} />
        <TextView style={styles.itemValue} text={`Basketball`} />
      </View>

      <View style={styles.itemContainer}>
        <TextView style={styles.itemLabel} text={'Location:'} />
        <TextView style={styles.itemValue} text={'Ulaanbaatar, Mongolia'} />
      </View>

      <View style={styles.bottomContainer}>
        <GradientBtn
          linearGradientStyle={styles.gradientBtn}
          textStyle={{ fontSize: 15 }}
          text="Log out"
          onPress={() => {
            logout()
              .then()
              .catch(e => {
                console.log(e);
              });
            signOut();
          }}
        />
        <TextView text={' '} style={styles.version} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgMain,
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
  },
  gradientBtn: {
    width: 150,
    borderRadius: 11
  }
});

export default ProfileScreen;
