import React, { useLayoutEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Text
} from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';
import { Searchbar } from 'react-native-paper';

import CourtItem from '../../common/components/court/CourtItem';
import { useNavigation } from '@react-navigation/native';
import { gql, useQuery } from '@apollo/client';

import queries from './graphql/queries';

import FilterWrapper from './filter/FilterWrapper';

const CourtsOverviewScreen = () => {
  const { data, loading, error } = useQuery(gql(queries.allCourts));

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
              size={20}
              style={{ color: 'white', marginRight: 15 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Map');
            }}
          >
            <Feather
              name='map'
              size={19}
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
              size={20}
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

  if (loading) {
    return null;
  }

  if (!data) {
    return <Text>what</Text>;
  }

  if (data.allCourts.length < 1) {
    return (
      <View
        style={{
          alignItems: 'center',
          flex: 1,
          justifyContent: 'center'
        }}
      >
        <Text>Sorry court not found</Text>
      </View>
    );
  }

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
        data={data.allCourts}
        keyExtractor={item => item.id}
        renderItem={itemData => (
          <CourtItem
            key={itemData.item._id}
            image={itemData.item.image}
            title={itemData.item.name}
            price={itemData.item.price}
            parking={itemData.item.parking}
            description={itemData.item.description}
            onViewDetail={() => {
              navigation.navigate('CourtDetail', {
                courtId: itemData.item._id,
                courtTitle: itemData.item.name
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
