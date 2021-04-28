import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import {
  ApolloProvider,
  ApolloClient,
  HttpLink,
  InMemoryCache,
  split,
  from
} from '@apollo/client';

import courtsReducer from './src/store/reducers/courts';
import Root from './src/navigation/CourtNavigator';

const rootReducer = combineReducers({
  courts: courtsReducer
});

const store = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};

const httpLink = new HttpLink({
  uri: 'http://hurteemj.nmma.co/batukapi/graphql',
  credentials: 'include'
});

const client = () =>
  new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache() //cache,
  });

export default function App() {
  return (
    <ApolloProvider client={client()}>
      <Root />
    </ApolloProvider>
  );
}
