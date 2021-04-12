import React from 'react';
import { Button } from 'react-native';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from 'react-native';

const data = [
  {
    name: 'Monday',
    list: [
      {
        time: '10:00',
        leftPeople: 10
      },
      {
        time: '12:00',
        leftPeople: 10
      },
      {
        time: '14:00',
        leftPeople: 10
      },
      {
        time: '16:00',
        leftPeople: 10
      },
      {
        time: '17:00',
        leftPeople: 10
      },
      {
        time: '17:00',
        leftPeople: 10
      },
      {
        time: '17:00',
        leftPeople: 10
      }
    ]
  },
  {
    name: 'Tuesday',
    list: [
      {
        time: '10:00',
        leftPeople: 10
      },
      {
        time: '12:00',
        leftPeople: 10
      },
      {
        time: '14:00',
        leftPeople: 10
      },
      {
        time: '18:00',
        leftPeople: 10
      },
      {
        time: '20:00',
        leftPeople: 10
      },
      {
        time: '17:00',
        leftPeople: 10
      },
      {
        time: '17:00',
        leftPeople: 10
      }
    ]
  }
];

const CourtTimePick = props => {
  const renderRowItem = (item, index) => {
    return (
      <View style={styles.block} key={index.toString()}>
        <Text style={styles.time}>{item.time}</Text>
        <Text style={styles.people}>{item.leftPeople}</Text>
      </View>
    );
  };
  const renderRow = (data, index) => {
    return (
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.date}>{'Mon\n12'}</Text>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          key={index.toString()}
        >
          {data.list.map((e, i) => renderRowItem(e, i))}
        </ScrollView>
      </View>
    );
  };

  return (
    // props.time, props.active, props.booked, props.huniiToo
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Button title='prev' />
        <Text>April 4-10</Text>
        <Button title='next' />
      </View>
      <ScrollView>{data.map((e, i) => renderRow(e, i))}</ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  weekChange: {
    borderWidth: 1,
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
