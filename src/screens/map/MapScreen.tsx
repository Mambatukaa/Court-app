import React, { useState } from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import MapView, { Callout, Marker } from 'react-native-maps';
import { AntDesign } from '@expo/vector-icons';
import { gql, useQuery } from '@apollo/client';
import Colors from '../../common/styles/colors';
import queries from '../court/graphql/queries';
import { CourtsMainQueryResponse, ICourt, ICourtDoc } from '../court/types';

const MapScreen = (props: any) => {
  const [showMark, setShowMark] = useState(false);

  const navigation = useNavigation();

  const { data, loading, error } = useQuery<CourtsMainQueryResponse>(
    gql(queries.courtsMain)
  );

  if (loading) {
    return (
      <ActivityIndicator
        size="small"
        color="#B43CF3"
        style={{ justifyContent: 'center', flex: 1 }}
      />
    );
  }

  const allCourts = data?.courtsMain || [];

  const mapRegion = {
    latitude: 47.92123,
    longitude: 106.918556,
    latitudeDelta: 0.0222,
    longitudeDelta: 0.0121
  };
  return (
    <MapView
      provider="google"
      style={styles.map}
      initialRegion={mapRegion}
      showsMyLocationButton
      showsUserLocation
      showsCompass
      showsTraffic
    >
      {allCourts.map((court: ICourtDoc, index: any) => {
        return (
          // <Marker
          //   key={index}
          //   coordinate={{
          //     latitude: Number(court.location.lat),
          //     longitude: Number(court.location.lng)
          //   }}
          //   onPress={() => {
          //     setShowMark(v => !v);
          //   }}
          // >
          <Callout
            tooltip
            onPress={() => {
              navigation.navigate('CourtDetail', {
                courtId: court._id
              });
            }}
          >
            <View>
              <View style={styles.bubble}>
                <Text style={styles.name}>{court.name}</Text>
                <AntDesign
                  name="right"
                  size={20}
                  color={Colors.primary}
                  fontWeight="bold"
                />
              </View>
              <View style={styles.arrowBorder} />
              <View style={styles.arrow} />
            </View>
          </Callout>
          // </Marker>
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
