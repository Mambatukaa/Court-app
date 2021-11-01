import React from 'react';

import {
  ApolloProvider,
  ApolloClient,
  HttpLink,
  InMemoryCache
} from '@apollo/client';

import Root from './src/navigation/CourtNavigator';

const httpLink = new HttpLink({
  uri: 'http://192.168.1.76:3300/graphql',
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
