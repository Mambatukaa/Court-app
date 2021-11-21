import React, { useLayoutEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  ScrollView,
  View,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  ActivityIndicator,
  Platform
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { TabView, TabBar } from 'react-native-tab-view';
import { Entypo, FontAwesome } from '@expo/vector-icons';

import Colors from '../../common/styles/colors';
import CourtBookingScreen from './CourtBookingScreen';
import { LinearGradient } from 'expo-linear-gradient';
import CourtDetail from '../../common/components/court/CourtDetail';

import { gql, useQuery } from '@apollo/client';

import queries from './graphql/queries';
import colors from '../../common/styles/colors';
import { GradientBtn } from '../../common/components';
import { ICourt } from './types';

const CourtDetailScreen = (props: any) => {
  const { courtId } = props.route.params;
  /*  const navigation = useNavigation();
  const [like, setLike] = useState(true); */

  const { data, loading, error } = useQuery(gql(queries.courtDetail), {
    variables: {
      _id: courtId
    }
  });

  /*   useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            onPress={() => {
              setLike(v => !v);
            }}
          >
            {like ? (
              <FontAwesome
                name='star-o'
                size={23}
                style={{ color: 'white', marginRight: 15, marginTop: 4 }}
              />
            ) : (
              <FontAwesome
                name='star'
                size={23}
                style={{ color: 'white', marginRight: 15, marginTop: 4 }}
              />
            )}
          </TouchableOpacity>
        </View>
      )
    });
  }, [navigation, like]); */

  if (loading) {
    return (
      <ActivityIndicator
        size="small"
        color={colors.grdMain}
        style={{ justifyContent: 'center', flex: 1 }}
      />
    );
  }

  const { courtDetail = {} as ICourt } = data;

  return (
    <View>
      <ScrollView>
        <Image style={styles.image} source={{ uri: courtDetail.image }} />
        <View style={styles.main}>
          <GradientBtn
            text="Захиалах"
            linearGradientStyle={styles.booknowButton}
            textStyle={{ fontSize: 12 }}
            onPress={() => props.jumpTo('second')}
            styledColors={[colors.primary, colors.grdMain]}
          />
          <CourtDetail
            title={courtDetail.name}
            slotSize={courtDetail.slotSize}
            warning={courtDetail.warning}
            description={courtDetail.description}
            location={courtDetail.location}
            courtDetail={courtDetail.courtDetail}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const initialLayout = { width: Dimensions.get('window').width };

export default function TabViewExample({ route }: { route: any }) {
  const params = route;
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Мэдээлэл' },
    { key: 'second', title: 'Захиалах' }
  ]);

  const renderScene = ({ route, jumpTo }: { route: any; jumpTo: any }) => {
    switch (route.key) {
      case 'first':
        return <CourtDetailScreen route={params} jumpTo={jumpTo} />;
      case 'second':
        return <CourtBookingScreen route={params} />;
      default:
        return null;
    }
  };

  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: Colors.primary }}
      style={styles.tabBar}
      renderLabel={({ route, focused }) => (
        <Text style={styles.label}>{route.title}</Text>
      )}
    />
  );

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      style={styles.container}
    />
  );
}

export const screenOptions = (navData: any) => {
  return {
    headerTitle: navData.route.params.courtTitle,
    headerBackTitle: ' '
  };
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? StatusBar.currentHeight : 0
  },
  image: {
    height: 250,
    width: '100%'
  },
  main: {
    padding: 10
  },
  tabBar: {
    backgroundColor: colors.bgMain
  },
  label: {
    color: Colors.primary,
    fontSize: 14,
    fontWeight: 'bold'
  },
  booknowButton: {
    marginTop: -30,
    width: 105,
    alignSelf: 'flex-end',
    borderRadius: 8,
    height: 37
  }
});
