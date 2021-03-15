import React from 'react';
import { StyleSheet } from 'react-native';

import MapView from 'react-native-maps';

const MapScreen = () => {
  const mapRegion = {
    latitude: 47.8864,
    longitude: 106.9057,
    latitudeDelta: 0.0122,
    longitudeDelta: 0.0121
  };
  return <MapView provider='google' style={styles.map} region={mapRegion} />;
};

const styles = StyleSheet.create({
  map: {
    flex: 1
  }
});

export const screenOptions = navData => {
  return {};
};

export default MapScreen;
