import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';

const CourtDetail = props => {
  const [showMark, setShowMark] = useState(false);

  const mapRegion = {
    latitude: props.location[0],
    longitude: props.location[1],
    latitudeDelta: 0.0135,
    longitudeDelta: 0.0133
  };

  return (
    <View>
      <View style={styles.itemContainer}>
        <Text style={styles.itemLabel}>Шал</Text>
        <Text style={styles.itemValue}>Олон улсын стандарт мод</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.itemLabel}>Үнэ</Text>
        <Text style={styles.itemValue}>{props.price}₮</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.itemLabel}>Тайлбар</Text>
        <Text style={styles.itemValue}>{props.description}</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.itemLabel}>Анхааруулга</Text>
        <Text style={styles.itemValue}>{props.warning}</Text>
      </View>
      <View
        style={{
          height: 300
        }}
      >
        <MapView provider='google' style={styles.map} region={mapRegion}>
          <Marker
            coordinate={{
              latitude: props.location[0],
              longitude: props.location[1]
            }}
            onPress={() => {
              setShowMark(v => !v);
            }}
          >
            {showMark && (
              <Callout tooltip>
                <View>
                  <View style={styles.bubble}>
                    <Text style={styles.name}>{props.shortName}</Text>
                  </View>
                  <View style={styles.arrowBorder} />
                  <View style={styles.arrow} />
                </View>
              </Callout>
            )}
          </Marker>
        </MapView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 5
  },
  background: {
    borderWidth: 1,
    height: 200,
    borderRadius: 10,
    backgroundColor: 'white',
    padding: 10
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 10
  },
  def: {
    color: 'gray',
    paddingBottom: 2
  },
  textContainer: {
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: { width: 1, height: 2 },
    shadowRadius: 10,
    borderRadius: 5,
    backgroundColor: '#f6f6f6',
    padding: 10
  },

  itemContainer: {
    marginTop: 5,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderRadius: 10
  },
  itemLabel: {
    width: '30%',
    color: 'black',
    fontWeight: '500'
  },
  itemValue: {
    color: 'gray',
    maxWidth: '70%',
    textAlign: 'justify'
  },

  bubble: {
    backgroundColor: '#fff',
    borderColor: '#ccc',
    padding: 15,
    width: 150,
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
  name: {
    fontSize: 13,
    alignSelf: 'center'
  }
});

export default CourtDetail;