import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { AntDesign, FontAwesome5, Feather } from '@expo/vector-icons';
import Colors from '../constants/Colors';

import CourtsOverviewScreen, {
  screenOptions as CourtsOverviewScreenOptions
} from '../screens/court/CourtsOverviewScreen';
import CourtDetailScreen, {
  screenOptions as CourtDetailScreenOptions
} from '../screens/court/CourtDetailScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Colors.primary
  },
  headerTintColor: 'white'
};

const CourtsStackNavigator = createStackNavigator();

const CourtsNavigator = () => {
  return (
    <CourtsStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <CourtsStackNavigator.Screen
        name='CourtsOverview'
        component={CourtsOverviewScreen}
        //options={CourtsOverviewScreenOptions}
      />
      <CourtsStackNavigator.Screen
        name='CourtDetail'
        component={CourtDetailScreen}
        options={CourtDetailScreenOptions}
      />
    </CourtsStackNavigator.Navigator>
  );
};
const ProfileNavigator = () => {
  return (
    <CourtsStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <CourtsStackNavigator.Screen
        name='CourtsOverview'
        component={ProfileScreen}
        //options={CourtsOverviewScreenOptions}
      />
    </CourtsStackNavigator.Navigator>
  );
};
const Tab = createMaterialBottomTabNavigator();

export const MyTabs = () => {
  return (
    <Tab.Navigator
      activeColor={Colors.primary}
      barStyle={{ backgroundColor: 'white' }}
      initialRouteName='Courts'
    >
      <Tab.Screen
        name='Booking'
        component={CourtsNavigator}
        options={{
          tabBarIcon: props => {
            return <AntDesign name='calendar' size={24} color={props.color} />;
          }
        }}
      />
      <Tab.Screen
        name='Venus'
        component={CourtsNavigator}
        options={{
          tabBarIcon: props => {
            return <AntDesign name='star' size={24} color={props.color} />;
          }
        }}
      />
      <Tab.Screen
        name='Courts'
        component={CourtsNavigator}
        options={{
          tabBarIcon: props => {
            return (
              <FontAwesome5
                name='basketball-ball'
                size={24}
                color={props.color}
              />
            );
          }
        }}
      />
      <Tab.Screen
        name='Profile'
        component={ProfileNavigator}
        options={{
          tabBarIcon: props => {
            return <Feather name='user' size={24} color={props.color} />;
          }
        }}
      />
    </Tab.Navigator>
  );
};

/* const CourtsNavigator = createStackNavigator(
  {
    CourtsOverview: CourtsOverviewScreen,
    CourtDetail: CourtDetailScreen,
    CourtBooking: CourtBookingScreen
  },
  {
    defaultNavigationOptions: defaultNavOptions
  }
); */

/* const CourtTabNavigator = createBottomTabNavigator(
  {
    Bookings: {
      screen: BookingScreen,
      navigationOptions: {
        tabBarIcon: tabInfo => {
          return (
            <AntDesign name='calendar' size={24} color={tabInfo.tintColor} />
          );
        }
      }
    },
    Venus: {
      screen: BookingScreen,
      navigationOptions: {
        tabBarIcon: tabInfo => {
          return <AntDesign name='star' size={24} color={tabInfo.tintColor} />;
        }
      }
    },
    Courts: {
      screen: CourtsNavigator,
      navigationOptions: {
        tabBarIcon: tabInfo => {
          return (
            <FontAwesome5
              name='basketball-ball'
              size={24}
              color={tabInfo.tintColor}
            />
          );
        }
      }
    },
    Profile: {
      screen: BookingScreen,
      navigationOptions: {
        tabBarIcon: tabInfo => {
          return <Feather name='user' size={24} color={tabInfo.tintColor} />;
        }
      }
    }
  },
  {
    initialRouteName: 'Courts',
    swipeEnabled: true,
    tabBarOptions: {
      activeTintColor: Colors.primary
    }
  }
); */

/* export default CourtTabNavigator */
