import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { AntDesign, FontAwesome5, Feather } from '@expo/vector-icons';
import Colors from '../common/styles/colors';

import CourtsOverviewScreen, {
  screenOptions as CourtsOverviewScreenOptions,
} from '../screens/court/CourtsOverviewScreen';

import CourtDetailScreen, {
  screenOptions as CourtDetailScreenOptions,
} from '../screens/court/CourtDetailScreen';

import ProfileScreen from '../screens/profile/ProfileScreen';

import MapScreen from '../screens/map/MapScreen';

import BookedScreen from '../screens/booking/BookedScreen';
import colors from '../common/styles/colors';
import CourtBookDetail from '../screens/court/CourtBookDetailScreen';

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Colors.primary,
  },
  headerTintColor: 'white',
};

const CourtsStackNavigator = createStackNavigator();
const Root = createStackNavigator();

const CourtsNavigator = () => {
  return (
    <CourtsStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <CourtsStackNavigator.Screen
        name="CourtsOverview"
        component={CourtsOverviewScreen}
      />
      <CourtsStackNavigator.Screen
        name="CourtDetail"
        component={CourtDetailScreen}
        options={CourtDetailScreenOptions}
      />
      <CourtsStackNavigator.Screen
        name="CourtBookDetail"
        component={CourtBookDetail}
      />
    </CourtsStackNavigator.Navigator>
  );
};
const ProfileNavigator = () => {
  return (
    <CourtsStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <CourtsStackNavigator.Screen name="Profile" component={ProfileScreen} />
    </CourtsStackNavigator.Navigator>
  );
};

const BookingNavigator = () => {
  return (
    <CourtsStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <CourtsStackNavigator.Screen name="Booking" component={BookedScreen} />
    </CourtsStackNavigator.Navigator>
  );
};

const Tab = createMaterialBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      activeColor={'white'}
      barStyle={{ backgroundColor: colors.primary }}
      initialRouteName="Courts"
    >
      <Tab.Screen
        name="Booking"
        component={BookingNavigator}
        options={{
          tabBarIcon: (props) => {
            return <AntDesign name="calendar" size={24} color={props.color} />;
          },
        }}
      />
      {/*  <Tab.Screen
        name='Venus'
        component={CourtsNavigator}
        options={{
          tabBarIcon: props => {
            return <AntDesign name='star' size={24} color={props.color} />;
          }
        }}
      /> */}
      <Tab.Screen
        name="Courts"
        component={CourtsNavigator}
        options={{
          tabBarIcon: (props) => {
            return (
              <FontAwesome5
                name="basketball-ball"
                size={24}
                color={props.color}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          tabBarIcon: (props) => {
            return <Feather name="user" size={24} color={props.color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

const rootNavigator = () => (
  <Root.Navigator>
    <Root.Screen
      name="MyTabs"
      component={MyTabs}
      options={{ headerShown: false }}
      //options={CourtsOverviewScreenOptions}
    />

    <Root.Screen
      name="Map"
      component={MapScreen}
      options={{
        headerBackTitle: ' ',
        headerStyle: {
          backgroundColor: Colors.primary,
        },
        headerTintColor: 'white',
      }}
    />
  </Root.Navigator>
);
export default rootNavigator;
