import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Alert } from 'react-native';
import { colors } from '../../../common/styles';
import { GradientBtn } from '../../../common/components';

function PriceFilter(props) {
  const { setPrice, setFilters, filters } = props;

  const [isFiltered, setIsFiltered] = useState(filters?.minPrice);

  const [minPrice, setMinPrice] = useState(filters?.minPrice);
  const [maxPrice, setMaxPrice] = useState(filters?.maxPrice);

  const onChangeMin = value => {
    setMinPrice(value);
  };

  const onChangeMax = value => {
    setMaxPrice(value);
  };

  const onFilter = () => {
    if (!minPrice || !maxPrice) {
      Alert.alert('Буруу утга!', 'Утга дутуу байна.', [{ text: 'Ахин шүүх' }]);
      return;
    }

    if (minPrice > maxPrice) {
      Alert.alert('Буруу утга!', 'Таны оруулсан утга буруу байна.', [
        { text: 'Ахин шүүх' }
      ]);
    }

    setFilters({ minPrice: minPrice, maxPrice: maxPrice });
    setIsFiltered(true);
  };

  const offFilter = () => {
    setFilters();
    setMinPrice('');
    setMaxPrice('');

    setIsFiltered(false);
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: 'bold', marginVertical: 10 }}>Үнийн дүн</Text>
      <View style={styles.inputContainer}>
        <Text style={{ fontSize: 12 }}>Бага дүн</Text>
        <TextInput
          style={styles.priceInput}
          placeholder='0₮'
          keyboardType='numeric'
          value={minPrice}
          onChangeText={value => {
            onChangeMin(value);
          }}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={{ fontSize: 12 }}>Их дүн</Text>
        <TextInput
          style={styles.priceInput}
          placeholder='0₮'
          keyboardType='numeric'
          value={maxPrice}
          onChangeText={value => {
            onChangeMax(value);
          }}
        />
      </View>

      <GradientBtn
        text='Шүүх'
        linearGradientStyle={{
          marginTop: 20,
          width: 180,
          borderRadius: 10,
          alignSelf: 'center'
        }}
        onPress={onFilter}
      />
      {isFiltered ? (
        <GradientBtn
          text='Шүүлт устгах'
          linearGradientStyle={{
            marginTop: 10,
            width: 180,
            borderRadius: 10,
            alignSelf: 'center'
          }}
          onPress={offFilter}
          styledColors={['#5aff15', '#00b712']}
        />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: 30
  },
  inputContainer: {
    backgroundColor: colors.bgActive,
    borderRadius: 10,
    height: 50,
    paddingHorizontal: 10,
    paddingTop: 7,
    marginTop: 7
  },
  priceInput: {
    borderRadius: 15,
    height: 30,
    width: 100,
    fontSize: 13
  }
});

export default PriceFilter;
