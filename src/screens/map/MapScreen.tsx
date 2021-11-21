import React from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import MapView, { Callout } from 'react-native-maps';
import { AntDesign } from '@expo/vector-icons';
import { gql, useQuery } from '@apollo/client';
import { colors } from '../../common/styles';
import queries from '../court/graphql/queries';
import { CourtsMainQueryResponse, ICourtDoc } from '../court/types';

const MapScreen = (props: any) => {
  const navigation = useNavigation();

  const { data, loading } = useQuery<CourtsMainQueryResponse>(
    gql(queries.courtsMain)
  );

  if (loading) {
    return (
      <ActivityIndicator
        size="small"
        color={colors.grdMain}
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
      showsMyLocationButton={true}
      showsUserLocation={true}
      showsCompass={true}
      showsTraffic={true}
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
          <>
            <Callout
              tooltip={true}
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
                    color={colors.primary}
                    fontWeight="bold"
                  />
                </View>
                <View style={styles.arrowBorder} />
                <View style={styles.arrow} />
              </View>
            </Callout>
          </>
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
    color: colors.primary
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
