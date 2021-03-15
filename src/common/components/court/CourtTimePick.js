import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CourtTimePick = props => {
  return (
    // props.time, props.active, props.booked, props.huniiToo
    <TouchableOpacity>
      <Text style={styles.time}>13:00</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  time: {
    margin: 50,
    padding: 4,
    textAlign: 'center'
  }
});

export default CourtTimePick;
