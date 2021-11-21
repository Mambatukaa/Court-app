import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../styles';

interface IProps {
  title: string;
  surface: string;
  description: string;
  warning: string;
  location: {};
}

const CourtDetail = (props: IProps) => {
  // const [showMark, setShowMark] = useState(false);

  // const mapRegion = {
  //   latitude: Number(props.location.lat),
  //   longitude: Number(props.location.lng),
  //   latitudeDelta: 0.0135,
  //   longitudeDelta: 0.0133
  // };

  return (
    <View>
      <View style={styles.itemContainer}>
        <Text style={styles.itemLabel}>Шал</Text>
        <Text style={styles.itemValue}>{props.surface || 'Mod'}</Text>
      </View>
      {/* <View style={styles.itemContainer}>
        <Text style={styles.itemLabel}>Багтаамж</Text>
        <Text style={styles.itemValue}>{props.slotSize}</Text>
      </View> */}
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
        {/* <MapView provider='google' style={styles.map} region={mapRegion}>
          <Marker
            coordinate={{
              latitude: Number(props.location.lat),
              longitude: Number(props.location.lng)
            }}
            onPress={() => {
              setShowMark(v => !v);
            }}
          >
            <Callout tooltip>
              <View>
                <View style={styles.bubble}>
                  <Text style={styles.name}>{props.title}</Text>
                </View>
                <View style={styles.arrowBorder} />
                <View style={styles.arrow} />
              </View>
            </Callout>
          </Marker>
        </MapView> */}
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
    backgroundColor: colors.bgMain,
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
    backgroundColor: colors.bgDark,
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
    borderRadius: 8
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
    width: 200,
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
