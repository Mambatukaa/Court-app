import React from 'react';
import { Button, FlatList } from 'react-native';
import dayjs from 'dayjs';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { colors } from '../../styles';

// const data = [
//   {
//     /*
//     date:
//     zaalID,
//     time 24,
//     status,
//     count */
//     name: 'Monday',
//     list: [
//       {
//         time: '10:00'
//       },
//       {
//         time: '12:00'
//       },
//       {
//         time: '14:00'
//       },
//       {
//         time: '16:00'
//       },
//       {
//         time: '17:00'
//       }
//     ]
//   }
// ];

const CourtTimePick = props => {
  const navigation = useNavigation();
  const { params } = props;

  const { courtSchedule = [] } = props?.courtDetail;

  const days = [];

  courtSchedule.map(el => {
    days.push(el.day);
  });

  const uniqueDay = [];

  days.filter((item, index) => {
    if (days.indexOf(item) === index) {
      uniqueDay.push(item);
    }
  });

  const onViewBookDetail = item => {
    navigation.navigate('CourtBookDetail', {
      courtId: params.courtId,
      item: item
    });
  };

  const renderRowItem = item => {
    const bg = item?.bookedPeople >= 15 ? colors.colorShadowGray : '#09e371';
    const bc =
      item?.bookedPeople >= 15 ? colors.colorCoreGray : colors.timeBlock;

    return (
      <TouchableOpacity
        onPress={() => onViewBookDetail(item)}
        activeOpacity={0.7}
        disabled={item?.bookedPeople >= 15}
        style={[styles.block, { backgroundColor: bg, borderColor: bc }]}
      >
        {item?.bookedPeople >= 15 ? (
          <>
            <View style={styles.timeContainer}>
              <Text style={[styles.time]}>
                {dayjs(item.startTime).format('HH:mm')}
              </Text>
              <Text style={[styles.booked]}>{'Дүүрсэн'}</Text>
            </View>
          </>
        ) : (
          <View style={styles.timeContainer}>
            <Text style={[styles.time]}>
              {dayjs(item.startTime).format('HH:mm')}
            </Text>
            <Text style={[styles.price]}>{`${item?.price}₮`}</Text>
            <Text style={styles.people}>{item?.bookedPeople || 0}</Text>
          </View>
        )}
      </TouchableOpacity>
    );
  };

  const dayTranslator = value => {
    /* switch (value) {
      case value.includes('Fri'):
        value.replace('Fri', 'Баа');
        return;

      case value.includes('Thu'):
        value.replace('Thu', 'Пү');
        return;
    } */

    if (value.includes('Fri')) {
      return value.replace('Fri', 'Ба');
    } else if (value.includes('Thu')) {
      return value.replace('Thu', 'Пү');
    } else if (value.includes('Wed')) {
      return value.replace('Wed', 'Лха');
    } else if (value.includes('Tue')) {
      return value.replace('Tue', 'Мяг');
    } else if (value.includes('Mon')) {
      return value.replace('Mon', 'Дав');
    } else if (value.includes('Sat')) {
      return value.replace('Sat', 'Бям');
    } else {
      return value.replace('Sun', 'Ням');
    }
  };

  const renderRow = (item, courtSchedule) => {
    return (
      <View>
        {item.map((el, index) => {
          return (
            <View key={index}>
              <View
                style={{
                  flexDirection: 'row',
                  marginBottom: 20,
                  paddingTop: 20
                }}
              >
                <View
                  style={{
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Text style={styles.date}>
                    {dayTranslator(dayjs(el).format('ddd'))}
                  </Text>
                  <Text style={styles.date}>{dayjs(el).format('D')}</Text>
                </View>
                <ScrollView
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                >
                  <>
                    {courtSchedule.map((schedule, index) => {
                      return (
                        <View key={index}>
                          {schedule.day === el ? renderRowItem(schedule) : null}
                        </View>
                      );
                    })}
                  </>
                </ScrollView>
              </View>
              <View style={{ backgroundColor: colors.primary, height: 1 }} />
            </View>
          );
        })}
      </View>
    );
  };
  return (
    <View style={{ backgroundColor: colors.bgMain, flex: 1 }}>
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

      <ScrollView style={{ flex: 1 }}>
        {renderRow(uniqueDay, courtSchedule)}
      </ScrollView>
      {/*    <FlatList
        style={{ flex: 1 }}
        data={uniqueDay}
        keyExtractor={item => item}
        renderItem={({ item, index }) => renderRow(item, index, courtSchedule)}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  weekChange: {
    borderWidth: 1.5,
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
    margin: 5,
    padding: 5,
    borderRadius: 4,
    width: 68,
    height: 53
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
    fontSize: 12
  },
  price: {
    paddingBottom: 3,
    fontSize: 12
  },
  booked: {
    fontSize: 12,
    fontWeight: '400',
    color: 'gray'
  }
});

export default CourtTimePick;
