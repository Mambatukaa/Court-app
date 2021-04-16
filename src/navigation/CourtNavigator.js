import React, { useEffect } from 'react';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { NavigationContainer } from '@react-navigation/native';

import { AntDesign, FontAwesome5, Feather } from '@expo/vector-icons';
import Colors from '../common/styles/colors';

import CourtsOverviewScreen, {
  screenOptions as CourtsOverviewScreenOptions
} from '../screens/court/CourtsOverviewScreen';

import CourtDetailScreen, {
  screenOptions as CourtDetailScreenOptions
} from '../screens/court/CourtDetailScreen';

import ProfileScreen from '../screens/profile/ProfileScreen';

import MapScreen from '../screens/map/MapScreen';

import BookedScreen from '../screens/booking/BookedScreen';
import colors from '../common/styles/colors';

import CourtBookDetail, {
  screenOptions as CourtBookDetailOption
} from '../screens/court/CourtBookDetailScreen';

import { SignIn, SignUp, Intro } from '../screens/auth';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { AuthContext } from '../common/utils/AuthContext';

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Colors.primary
  },
  headerTintColor: 'white'
};

const LoginStackNavigator = createStackNavigator();
const CourtsStackNavigator = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const Root = createStackNavigator();

const LoginNavigator = () => {
  return (
    <LoginStackNavigator.Navigator>
      <LoginStackNavigator.Screen
        name='Intro'
        component={Intro}
        options={{ headerShown: false }}
      />
      <LoginStackNavigator.Screen
        name='SignIn'
        component={SignIn}
        options={{ headerShown: false }}
      />
      <LoginStackNavigator.Screen
        name='SignUp'
        component={SignUp}
        options={{ headerShown: false }}
      />
    </LoginStackNavigator.Navigator>
  );
};

const CourtsNavigator = () => {
  return (
    <CourtsStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <CourtsStackNavigator.Screen
        name='CourtsOverview'
        component={CourtsOverviewScreen}
      />
      <CourtsStackNavigator.Screen
        name='CourtDetail'
        component={CourtDetailScreen}
        options={CourtDetailScreenOptions}
      />
      <CourtsStackNavigator.Screen
        name='CourtBookDetail'
        component={CourtBookDetail}
        options={CourtBookDetailOption}
      />
    </CourtsStackNavigator.Navigator>
  );
};
const ProfileNavigator = () => {
  return (
    <CourtsStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <CourtsStackNavigator.Screen name='Profile' component={ProfileScreen} />
    </CourtsStackNavigator.Navigator>
  );
};

const BookingNavigator = () => {
  return (
    <CourtsStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <CourtsStackNavigator.Screen name='Booking' component={BookedScreen} />
    </CourtsStackNavigator.Navigator>
  );
};

const MyTabs = () => {
  return (
    <Tab.Navigator
      activeColor={'white'}
      barStyle={{ backgroundColor: colors.primary }}
      initialRouteName='Courts'
    >
      <Tab.Screen
        name='Booking'
        component={BookingNavigator}
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

const rootNavigator = () => {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null
    }
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItemAsync('userToken');
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: data.token });
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
      signUp: async data => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      }
    }),
    []
  );

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {state.userToken == null ? (
          <Root.Navigator>
            <Root.Screen
              name={'Login'}
              component={LoginNavigator}
              options={{ headerShown: false }}
            />
          </Root.Navigator>
        ) : (
          <Root.Navigator>
            <Root.Screen
              name='MyTabs'
              component={MyTabs}
              options={{ headerShown: false }}
              //options={CourtsOverviewScreenOptions}
            />
            <Root.Screen
              name='Map'
              component={MapScreen}
              options={{
                headerBackTitle: ' ',
                headerStyle: {
                  backgroundColor: Colors.primary
                },
                headerTintColor: 'white'
              }}
            />
          </Root.Navigator>
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};
export default rootNavigator;
