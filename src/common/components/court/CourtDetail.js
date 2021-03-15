import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CourtDetail = () => {
  return (
    <View style={styles.background}>
      <Text style={styles.title}>Монгол Улсын Их Сургууль</Text>
      <Text style={styles.def}>Шал</Text>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Олон улсын стандарт мод </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    borderWidth: 1,
    height: 200,
    borderRadius: 10,
    backgroundColor: 'white',
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
    backgroundColor: '#f6f6f6',
    padding: 10
  }
});

export default CourtDetail;
