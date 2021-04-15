import React from 'react';
import { Button, FlatList } from 'react-native';
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
    /* 
    date: 
    zaalID,
    time 24,
    status,
    count */ name: 'Monday',
    list: [
      {
        time: '10:00'
      },
      {
        time: '12:00'
      },
      {
        time: '14:00'
      },
      {
        time: '16:00'
      },
      {
        time: '17:00'
      }
    ]
  },
  {
    name: 'Tuesday',
    list: [
      {
        time: '10:00'
      },
      {
        time: '12:00'
      },
      {
        time: '14:00'
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
        leftPeople: 10
      },
      {
        time: '18:00',
        leftPeople: 1
      },
      {
        time: '20:00',
        leftPeople: 10
      }
    ]
  },
  {
    name: 'Thursday',
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
        leftPeople: 10
      },
      {
        time: '18:00',
        leftPeople: 1
      },
      {
        time: '20:00',
        leftPeople: 2
      }
    ]
  },
  {
    name: 'Friday',
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
        leftPeople: 10
      },
      {
        time: '18:00',
        leftPeople: 1
      },
      {
        time: '20:00',
        leftPeople: 2
      }
    ]
  }
];

const CourtTimePick = props => {
  const navigation = useNavigation();

  const { params } = props;

  const onViewBookDetail = item => {
    navigation.navigate('CourtBookDetail', {
      courtId: params.courtId,
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
        style={[styles.block, { backgroundColor: bg }]}
        key={index.toString()}
      >
        {item.leftPeople === 10 ? (
          <View style={styles.timeContainer}>
            <Text style={[styles.time]}>{item.time}</Text>
            <Text style={[styles.booked]}>{'Дүүрсэн'}</Text>
          </View>
        ) : (
          <View style={styles.timeContainer}>
            <Text style={[styles.time]}>{item.time}</Text>
            <Text style={styles.people}>{item.leftPeople}</Text>
          </View>
        )}
      </TouchableOpacity>
    );
  };

  const renderRow = (data, index) => {
    return (
      <View key={index.toString()} style={{}}>
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 20,
            paddingTop: 20
          }}
        >
          <Text style={styles.date}>{'Дав\n12'}</Text>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            {data.list.map((el, index) => renderRowItem(el, index))}
          </ScrollView>
        </View>
        <View style={{ backgroundColor: 'gray', height: 1 }} />
      </View>
    );
  };
  return (
    <View style={{ backgroundColor: '#fff', flex: 1 }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 20,
          marginBottom: 10,
          borderWidth: 2,
          width: '80%',
          height: 35,
          alignSelf: 'center',
          borderRadius: 5
        }}
      >
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'bold',
            flex: 1,
            alignItems: 'center',
            textAlign: 'center'
          }}
        >
          Дөрөвдүгээр сар 4-10
        </Text>
      </View>

      <FlatList
        style={{ flex: 1 }}
        data={data}
        keyExtractor={item => item.name}
        renderItem={({ item, index }) => renderRow(item, index)}
      />
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
    fontWeight: '600',
    marginLeft: 12,
    textAlign: 'center',
    marginRight: 10,
    alignSelf: 'center'
  },
  block: {
    borderWidth: 1,
    borderColor: '#c0c0c0',
    margin: 5,
    padding: 5,
    borderRadius: 5,
    width: 62,
    height: 46
  },
  timeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  time: {
    paddingBottom: 3,
    fontSize: 13
  },
  people: {
    fontSize: 13
  },
  booked: {
    fontSize: 12,
    fontWeight: '400',
    color: 'gray'
  }
});

export default CourtTimePick;
