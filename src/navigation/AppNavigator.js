import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import Root from './CourtNavigator';

const AppNavigator = props => {
  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
};

export default AppNavigator;
