import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { MyTabs } from './CourtNavigator';

const AppNavigator = props => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
};

export default AppNavigator;
