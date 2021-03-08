import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  ScrollView,
  View,
  Dimensions,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import { useSelector } from 'react-redux';

import { TabView, TabBar } from 'react-native-tab-view';

import Colors from '../../constants/Colors';
import CourtBookingScreen from './CourtBookingScreen';
import { LinearGradient } from 'expo-linear-gradient';

const CourtDetailScreen = props => {
  const { courtId } = props.route.params;

  const selectedCourt = useSelector(state =>
    state.courts.availableCourts.find(court => court.id === courtId)
  );

  return (
    <View>
      <ScrollView>
        <Image style={styles.image} source={{ uri: selectedCourt.imageUrl }} />
        <View style={styles.main}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.booknowContainer}
            onPress={() => props.jumpTo('second')}
          >
            <LinearGradient
              // Background Linear Gradient #bdc3c7 → #2c3e50  undsen ongo '#733ff3', '#d553f8'
              colors={['#cc2b5e', '#753a88']}
              style={styles.gradient}
            >
              <Text style={styles.bookNow}>Book now</Text>
            </LinearGradient>
          </TouchableOpacity>
          <Text style={styles.title}>{selectedCourt.title}</Text>

          <View style={styles.priceContainer}>
            <Text>Үнэ:</Text>
            <Text>{selectedCourt.price}</Text>
          </View>

          <View style={styles.descriptionContainer}>
            <Text>Тайлбар:</Text>
            <Text>{selectedCourt.description}</Text>
          </View>
          <View style={styles.warningContainer}>
            <Text>Анхааруулга:</Text>
            <Text>{selectedCourt.warning}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const initialLayout = { width: Dimensions.get('window').width };

export default function TabViewExample({ route }) {
  const params = route;
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Information' },
    { key: 'second', title: 'Booking' },
    { key: 'third', title: 'Location' }
  ]);

  const renderScene = ({ route, jumpTo }) => {
    switch (route.key) {
      case 'first':
        return <CourtDetailScreen route={params} jumpTo={jumpTo} />;
      case 'second':
        return <CourtBookingScreen />;
      default:
        return null;
    }
  };

  const renderTabBar = props => (
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

export const screenOptions = navData => {
  return {
    headerTitle: navData.route.params.courtTitle
  };
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight
  },
  scene: {
    flex: 1
  },
  image: {
    height: 250,
    width: '100%'
  },
  main: {
    padding: 10
  },
  titleContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    backgroundColor: 'red',
    justifyContent: 'space-between'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15
  },
  priceContainer: {
    flexDirection: 'row'
  },
  tabBar: {
    backgroundColor: 'white'
  },
  label: {
    color: Colors.primary,
    fontSize: 14
  },
  booknowContainer: {
    marginTop: -30,
    width: 90,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center'
  },
  bookNow: {
    padding: 10,
    backgroundColor: 'transparent',
    overflow: 'hidden',
    color: 'white',
    fontWeight: 'bold'
  },
  gradient: {
    borderRadius: 10
  }
});
