import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import MapView, { Callout, Marker } from 'react-native-maps';
import { AntDesign } from '@expo/vector-icons';

import Colors from '../../common/styles/colors';

const MapScreen = props => {
  const [showMark, setShowMark] = useState(false);

  const navigation = useNavigation();
  const courts = useSelector(state => state.courts.availableCourts);

  const mapRegion = {
    latitude: 47.92123,
    longitude: 106.918556,
    latitudeDelta: 0.0222,
    longitudeDelta: 0.0121
  };
  return (
    <MapView provider='google' style={styles.map} region={mapRegion}>
      {courts.map(el => {
        return (
          <Marker
            coordinate={{
              latitude: el.location[0],
              longitude: el.location[1]
            }}
            onPress={() => {
              setShowMark(v => !v);
            }}
          >
            {showMark && (
              <Callout
                tooltip
                onPress={() => {
                  navigation.navigate('CourtDetail', {
                    courtId: el.id
                  });
                }}
              >
                <View>
                  <View style={styles.bubble}>
                    <Text style={styles.name}>{el.title}</Text>
                    <AntDesign
                      name='right'
                      size={20}
                      color={Colors.primary}
                      fontWeight='bold'
                    />
                  </View>
                  <View style={styles.arrowBorder} />
                  <View style={styles.arrow} />
                </View>
              </Callout>
            )}
          </Marker>
        );
      })}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1
  },
  detail: {
    fontSize: 25,
    fontWeight: 'bold',
    color: Colors.primary
  },
  bubble: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    borderColor: '#ccc',
    padding: 15,
    width: 250,
    height: 50,
    borderRadius: 10
  },
  arrow: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#fff',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -32
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#007a87',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -0.5
  },
  name: { fontSize: 16 }
});

export default MapScreen;
