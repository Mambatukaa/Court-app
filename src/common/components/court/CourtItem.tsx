import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Platform
} from 'react-native';
import { colors } from '../../styles';
import { TextView } from '..';

interface IProps {
  name: string;
  description: string;
  parking: string;
  featuredImage: string;
  onViewDetail: () => void;
}

function CourtItem(props: IProps) {
  return (
    <TouchableOpacity
      activeOpacity={Platform.OS === 'ios' ? 0.4 : 0.9}
      onPress={props.onViewDetail}
    >
      <View style={styles.court}>
        <View style={styles.main}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{props.name}</Text>
            <Text style={styles.description}>{props.description}</Text>

            <View style={styles.itemContainer}>
              <TextView style={styles.itemLabel} text={'Зогсоол'} />
              <TextView style={styles.itemValue} text={'Байхгүй'} />
            </View>

            <View style={styles.itemContainer}>
              <TextView style={styles.itemLabel} text={'Нийт'} />
              <TextView style={styles.itemValue} text={`${10} хүн`} />
            </View>
          </View>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{ uri: props.featuredImage }}
              resizeMode="cover"
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  court: {
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: colors.bgLight,
    marginLeft: 25,
    marginRight: 25,
    marginTop: 12,
    marginBottom: 7,
    height: Platform.OS === 'ios' ? 130 : 140,
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
    paddingTop: 8
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
    fontSize: 12.5,
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
