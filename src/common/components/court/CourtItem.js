import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { colors } from '../../styles';
import { TextView } from '../../components';

const CourtItem = props => {
  return (
    <TouchableOpacity onPress={props.onViewDetail}>
      <View style={styles.court}>
        <View style={styles.main}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.description}>{props.description}</Text>

            <View style={styles.itemContainer}>
              <TextView style={styles.itemLabel} text={'Үнэ:'} />
              <TextView style={styles.itemValue} text={`${props.price}₮`} />
            </View>
            <View style={styles.itemContainer}>
              <TextView style={styles.itemLabel} text={'Зогсоол:'} />
              <TextView style={styles.itemValue} text={props.parking} />
            </View>
          </View>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{ uri: props.image }}
              resizeMode='cover'
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
    backgroundColor: colors.bgLight,
    marginLeft: 25,
    marginRight: 25,
    marginTop: 14,
    height: 130,
    justifyContent: 'center'
  },
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10
  },
  textContainer: {
    marginHorizontal: 20,
    flex: 2
  },
  itemContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10
  },
  itemLabel: {
    fontSize: 12,
    width: '30%',
    color: colors.textPrimary,
    fontWeight: '700'
  },
  itemValue: {
    fontSize: 12,
    color: colors.colorCoreGray,
    maxWidth: '70%',
    textAlign: 'justify'
  },
  title: {
    fontSize: 13.2,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  description: {
    paddingTop: 10,
    color: colors.colorCoreDarkGray,
    fontSize: 12
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  parking: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  imageContainer: {
    flex: 1,
    marginRight: 18,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10
  }
});

export default CourtItem;
