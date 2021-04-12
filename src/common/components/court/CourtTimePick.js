import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const CourtTimePick = props => {
  return (
    // props.time, props.active, props.booked, props.huniiToo
    <View>
      <Text style={styles.weekChange}>March 25- April 01</Text>
      <Text style={styles.date}>Thu 25</Text>
    <ScrollView horizontal={true}>
      <View style={styles.block}>
        <Text style={styles.time}>13:00</Text>
        <Text style={styles.people}>8</Text>
      </View>
      <View style={styles.block}>
        <Text style={styles.time}>13:00</Text>
        <Text style={styles.people}>8</Text>
      </View>
      <View style={styles.block}>
        <Text style={styles.time}>13:00</Text>
        <Text style={styles.people}>8</Text>
      </View>
      <View style={styles.block}>
        <Text style={styles.time}>13:00</Text>
        <Text style={styles.people}>8</Text>
      </View>
      <View style={styles.block}>
        <Text style={styles.time}>13:00</Text>
        <Text style={styles.people}>8</Text>
      </View>
      <View style={styles.block}>
        <Text style={styles.time}>13:00</Text>
        <Text style={styles.people}>8</Text>
      </View>
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  weekChange: {
    borderWidth:1,
    borderRadius: 5,
    marginTop: 5,
    width: 300,
    alignSelf: 'center',
    height: 35,
    backgroundColor: 'red',
    textAlign: 'center',
    fontWeight: 'bold',
    overflow: 'hidden'
  },
  date: {
  fontSize: 20,
  fontWeight: 'bold',
  marginTop: 10,
  margin: 5
  },
  block: {
    borderWidth: 1,
    margin: 5,
    padding: 5,
    borderRadius: 8,
    width: 60,
    backgroundColor: 'white'

  },
  time: {
    textAlign: 'center',
    paddingBottom: 2
  },
  people: {
    textAlign: 'center'
  }
});

export default CourtTimePick;