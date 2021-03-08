import React, { useLayoutEffect } from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';

import { useSelector } from 'react-redux';
import CourtItem from '../../common/components/court/CourtItem';
import { useNavigation } from '@react-navigation/native';

const CourtsOverviewScreen = () => {
  const courts = useSelector(state => state.courts.availableCourts);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            onPress={() => {
              console.log('map button');
            }}
          >
            <Feather
              name='map'
              size={21}
              style={{ color: 'white', marginRight: 15, marginTop: 1.5 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              console.log('filter button');
            }}
          >
            <AntDesign
              name='filter'
              size={23}
              style={{ color: 'white', marginRight: 20 }}
            />
          </TouchableOpacity>
        </View>
      ),
      headerLeft: () => (
        <View>
          <TouchableOpacity
            onPress={() => {
              console.log('search button');
            }}
          >
            <AntDesign
              name='search1'
              size={22}
              style={{ color: 'white', marginLeft: 20 }}
            />
          </TouchableOpacity>
        </View>
      ),
      title: 'Courts'
    });
  }, [navigation]);

  return (
    <View>
      <FlatList
        style={{ backgroundColor: 'white' }}
        data={courts}
        keyExtractor={item => item.id}
        renderItem={itemData => (
          <CourtItem
            image={itemData.item.imageUrl}
            title={itemData.item.title}
            price={itemData.item.price}
            parking={itemData.item.parking}
            description={itemData.item.description}
            onViewDetail={() => {
              navigation.navigate('CourtDetail', {
                courtId: itemData.item.id,
                courtTitle: itemData.item.title
              });
            }}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

/* export const screenOptions = () => {
  return {
    headerTitle: 'Courts'
  };
}; */

export default CourtsOverviewScreen;
