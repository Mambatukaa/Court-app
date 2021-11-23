import React from 'react';
import {
  ApolloProvider,
  ApolloClient,
  HttpLink,
  InMemoryCache
} from '@apollo/client';
import { REACT_APP_API_URL } from '@env';
import Root from './src/navigation/CourtNavigator';

const httpLink = new HttpLink({
  uri: REACT_APP_API_URL,
  credentials: 'include'
});

const client = () =>
  new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache() // cache,
  });

export default function App() {
  return (
    <ApolloProvider client={client()}>
      <Root />
    </ApolloProvider>
  );
}
