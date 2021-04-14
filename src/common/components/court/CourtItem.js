import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

const CourtItem = (props) => {
  return (
    <TouchableOpacity onPress={props.onViewDetail}>
      <View style={styles.court}>
        <View style={styles.main}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.description}>{props.description}</Text>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <Text style={styles.parking}>{props.parking}</Text>
              <Text style={styles.price}>{props.price}₮</Text>
            </View>
          </View>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{ uri: props.image }}
              resizeMode="cover"
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  court: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: '#f6f6f6',
    marginLeft: 25,
    marginRight: 25,
    marginTop: 14,
  },

  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
  },
  imageContainer: {
    flex: 1,
    marginRight: 18,
    marginTop: 9,
  },
  image: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    borderRadius: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  textContainer: {
    margin: 20,
    flex: 2,
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  description: {
    color: 'gray',
  },
  parking: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default CourtItem;
