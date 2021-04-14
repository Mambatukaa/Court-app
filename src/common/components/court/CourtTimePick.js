import React from 'react';
import { Button } from 'react-native';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

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
      ,
      {
        time: '21:00',
        leftPeople: 10
      }
    ]
  },
  {
    name: 'Wednesday',
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
      ,
      {
        time: '21:00',
        leftPeople: 10
      }
    ]
  }
];

const CourtTimePick = props => {
  const navigation = useNavigation();

  const { params } = props;

  const onViewBookDetail = item => {
    navigation.navigate('CourtBookDetail', {
      courtId: params,
      item: item
    });
  };

  const renderRowItem = (item, index) => {
    return (
      <TouchableOpacity
        onPress={() => onViewBookDetail(item)}
        activeOpacity={0.7}
        style={styles.block}
        key={index.toString()}
      >
        <Text style={styles.time}>{item.time}</Text>
        <Text style={styles.people}>{item.leftPeople}</Text>
      </TouchableOpacity>
    );
  };
  const renderRow = (data, index) => {
    return (
      <View
        key={index.toString()}
        style={{
          flexDirection: 'row',
          marginBottom: 30,
          borderWidth: 0.5
        }}
      >
        <Text style={styles.date}>{'Mon\n12'}</Text>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          {data.list.map((e, i) => renderRowItem(e, i))}
        </ScrollView>
      </View>
    );
  };

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 20,
          backgroundColor: 'gray',
          marginTop: 10
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
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 12,
    textAlign: 'center',
    marginRight: 10,
    alignSelf: 'center'
  },
  block: {
    borderWidth: 1,
    borderColor: '#3CCC38',
    margin: 5,
    padding: 5,
    borderRadius: 5,
    width: 60,
    backgroundColor: '#3CCC38',
    height: 45
  },
  time: {
    textAlign: 'center',
    paddingBottom: 2,
    fontWeight: 'bold'
  },
  people: {
    textAlign: 'center'
  }
});

export default CourtTimePick;
