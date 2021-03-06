import React, { useLayoutEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Text,
  RefreshControl
} from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';
import { Searchbar } from 'react-native-paper';

import CourtItem from '../../common/components/court/CourtItem';
import { useNavigation } from '@react-navigation/native';
import { gql, useQuery } from '@apollo/client';

import queries from './graphql/queries';

import { FilterWrapper } from './filter';
import { colors } from '../../common/styles';
import { CourtsMainQueryResponse } from './types';

const CourtsOverviewScreen = () => {
  const navigation = useNavigation();

  const [searchQuery, setSearchQuery] = React.useState('');
  const [showSearch, setShowSearch] = React.useState(false);

  const [isFilterVisible, setSetFilterVisible] = useState(false);
  const [filters, setFilters] = React.useState(null);

  const { data, loading, error, refetch } = useQuery<CourtsMainQueryResponse>(
    gql(queries.courtsMain),
    {
      variables: {
        searchValue: searchQuery
      }
    }
  );

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
              name="search1"
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
              name="map"
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
              name="filter"
              size={20}
              style={{ color: 'white', marginLeft: 15 }}
            />
          </TouchableOpacity>
        </View>
      ),
      title: '??????????????'
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
          placeholder="????????"
          onChangeText={onChangeSearch}
          value={searchQuery}
          onSubmitEditing={done}
          inputStyle={{ fontSize: 15 }}
        />
      )}
      <FilterWrapper
        isFilterVisible={isFilterVisible}
        setSetFilterVisible={setSetFilterVisible}
        filters={filters}
        setFilters={setFilters}
      />
      {data && data?.courtsMain?.length > 0 ? (
        <FlatList
          refreshControl={
            <RefreshControl refreshing={loading} onRefresh={() => refetch()} />
          }
          style={{ backgroundColor: colors.bgMain }}
          data={data?.courtsMain}
          keyExtractor={item => item._id}
          renderItem={itemData => {
            return (
              <CourtItem
                image={itemData.item.image}
                title={itemData.item.name}
                slotSize={itemData.item.slotSize}
                parking={itemData.item.parking}
                description={itemData.item.description}
                onViewDetail={() => {
                  navigation.navigate('CourtDetail', {
                    courtId: itemData.item._id,
                    courtTitle: itemData.item.name
                  });
                }}
              />
            );
          }}
        />
      ) : (
        <View
          style={{
            alignItems: 'center',
            flex: 1,
            justifyContent: 'center'
          }}
        >
          <Text>?????????????????? ???????? ??????????????????.</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgMain
  }
});

export default CourtsOverviewScreen;
