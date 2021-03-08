import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CourtTimePick = props => {
  return (
    // props.time, props.active, props.booked, props.huniiToo
    <View>
      <Text style={styles.time}>13:00</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  time: {
    margin: 50,
    padding: 4,
    textAlign: 'center',
    borderWidth: 1
  }
});

export default CourtTimePick;
