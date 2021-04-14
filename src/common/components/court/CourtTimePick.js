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
        leftPeople: 2
      },
      {
        time: '18:00',
        leftPeople: 3
      },
      {
        time: '20:00',
        leftPeople: 7
      },
      ,
      {
        time: '21:00',
        leftPeople: 6
      }
    ]
  },
  {
    name: 'Wednesday',
    list: [
      {
        time: '10:00',
        leftPeople: 5
      },
      {
        time: '12:00',
        leftPeople: 4
      },
      {
        time: '14:00',
        leftPeople: 3
      },
      {
        time: '18:00',
        leftPeople: 1
      },
      {
        time: '20:00',
        leftPeople: 2
      },
      ,
      {
        time: '21:00',
        leftPeople: 8
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
    const bg = item.leftPeople == 10 ? '#d3d3d3' : '#24e100';
    return (
      <TouchableOpacity
        onPress={() => onViewBookDetail(item)}
        activeOpacity={0.7}
        disabled={item.leftPeople === 10}
        style={[styles.block, { backgroundColor: bg, borderColor: bg }]}
        key={index.toString()}
      >
        {item.leftPeople === 10 ? (
          <>
            <Text style={[styles.time, {}]}>{item.time}</Text>

            <Text style={styles.booked}>{'Booked'}</Text>
          </>
        ) : (
          <>
            <Text style={[styles.time]}>{item.time}</Text>

            <Text style={styles.people}>{item.leftPeople}</Text>
          </>
        )}
      </TouchableOpacity>
    );
  };
  const renderRow = (data, index) => {
    return (
      <View
        key={index.toString()}
        style={{
          flexDirection: 'column'
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 20,
            paddingTop: 20
          }}
        >
          <Text style={styles.date}>{'Mon\n12'}</Text>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            {data.list.map((e, i) => renderRowItem(e, i))}
          </ScrollView>
        </View>
        <View style={{ backgroundColor: 'gray', height: 1 }} />
      </View>
    );
  };

  return (
    <View style={{ backgroundColor: '#DCDCDC' }}>
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
    height: 45
  },
  time: {
    textAlign: 'center',
    paddingBottom: 3,
    fontSize: 13
  },
  people: {
    textAlign: 'center',
    fontSize: 13
  },
  booked: {
    fontSize: 13,
    textAlign: 'center'
  }
});

export default CourtTimePick;
