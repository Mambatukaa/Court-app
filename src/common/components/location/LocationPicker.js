import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { Alert } from 'react-native';
import { ActivityIndicator } from 'react-native';

import MapPreview from './MapPreview';

const LocationPicker = () => {
  const [pickedLocation, setPickedLocation] = useState();
  const [isFetching, setIsFetching] = useState(false);

  const verifyPermissions = async () => {
    const result = await Permissions.askAsync(Permissions.LOCATION);

    if (result.status !== 'granted') {
      Alert.alert(
        'Insufficient permission! ',
        'You need to grant location permission use this app',
        [{ text: 'Okay' }]
      );
      return false;
    }
    return true;
  };
  const getLocation = async () => {
    const hasPermission = await verifyPermissions();

    if (!hasPermission) {
      return;
    }

    try {
      setIsFetching(true);
      const location = await Location.getCurrentPositionAsync({
        timeout: 5000
      });

      setPickedLocation({
        lat: location.coords.latitude,
        lng: location.coords.longitude
      });
    } catch (err) {
      Alert.alert('Could ot fetch Location', 'Please', [{ text: 'Okay' }]);
    }
    setIsFetching(false);
  };

  return (
    <View style={styles.locationPicker}>
      <MapPreview style={styles.mapPreview} location={pickedLocation}>
        {isFetching ? (
          <ActivityIndicator size='large' color='black' />
        ) : (
          <Text>No Location yet</Text>
        )}
      </MapPreview>
      <View style={styles.actions}>
        <Button title='Get location' onPress={getLocation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  locationPicer: {
    marginBottom: 15
  },
  mapPreview: {
    marginBottom: 10,
    width: '100%',
    height: 150,
    borderColor: '#ccc',
    borderWidth: 1
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  }
});

export default LocationPicker;
