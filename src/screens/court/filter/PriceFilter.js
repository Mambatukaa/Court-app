import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { colors } from '../../../common/styles';

function PriceFilter() {
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: 'bold', marginVertical: 20 }}>Үнийн дүн</Text>
      <TextInput
        style={{
          backgroundColor: colors.bgActive,
          borderWidth: 1,
          borderRadius: 15,
          height: 50,
          width: 200,
          marginBottom: 10,
          padding: 10
        }}
        placeholder='Бага'
      />
      <TextInput
        style={{
          backgroundColor: colors.bgActive,
          borderWidth: 1,
          borderRadius: 15,
          height: 50,
          width: 200,
          padding: 10
        }}
        placeholder='Их'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20
  }
});

export default PriceFilter;
