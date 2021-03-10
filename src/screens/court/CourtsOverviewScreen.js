import React, { useLayoutEffect, useState } from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';
import { Searchbar } from 'react-native-paper';

import { useSelector } from 'react-redux';
import CourtItem from '../../common/components/court/CourtItem';
import { useNavigation } from '@react-navigation/native';

import FilterWrapper from './filter/FilterWrapper';

const CourtsOverviewScreen = () => {
  const courts = useSelector(state => state.courts.availableCourts);
  const navigation = useNavigation();

  const [searchQuery, setSearchQuery] = React.useState('');
  const [showSearch, setShowSearch] = React.useState(false);

  const [isFilterVisible, setSetFilterVisible] = useState(false);
  const [filters, setFilters] = React.useState(null);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            onPress={() => {
              setShowSearch(v => !v);
            }}
          >
            <AntDesign
              name='search1'
              size={22}
              style={{ color: 'white', marginRight: 15 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              console.log('map button');
            }}
          >
            <Feather
              name='map'
              size={21}
              style={{ color: 'white', marginRight: 20 }}
            />
          </TouchableOpacity>
        </View>
      ),
      headerLeft: () => (
        <View>
          <TouchableOpacity
            onPress={() => {
              setSetFilterVisible(v => !v);
            }}
          >
            <AntDesign
              name='filter'
              size={23}
              style={{ color: 'white', marginLeft: 15 }}
            />
          </TouchableOpacity>
        </View>
      ),
      title: 'Courts'
    });
  }, [navigation]);

  const onChangeSearch = query => setSearchQuery(query);

  const done = () => {
    setShowSearch(false);
  };
  return (
    <View style={styles.container}>
      {showSearch && (
        <Searchbar
          style={{ borderWidth: 0.15 }}
          placeholder='Search'
          onChangeText={onChangeSearch}
          value={searchQuery}
          onSubmitEditing={done}
        />
      )}
      <FilterWrapper
        isFilterVisible={isFilterVisible}
        setSetFilterVisible={setSetFilterVisible}
        setFilters={setFilters}
        type={'company'}
      />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  }
});

/* export const screenOptions = () => {
  return {
    headerTitle: 'Courts'
  };
}; */

export default CourtsOverviewScreen;
