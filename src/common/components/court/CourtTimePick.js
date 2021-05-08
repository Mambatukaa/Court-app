import React from 'react';
import dayjs from 'dayjs';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Platform
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { colors } from '../../styles';

const CourtTimePick = props => {
  const navigation = useNavigation();
  const { params } = props;

  const { courtSchedule = [] } = props?.courtDetail;

  const days = [];

  courtSchedule.map(day => {
    const dayUpdate = dayjs(day.startTime).format('YYYY-MM-DD');

    days.push(dayUpdate);
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
    const bg =
      item?.bookedPeople >= 15 ? colors.colorShadowGray : colors.bgTimeBlock;
    const bc =
      item?.bookedPeople >= 15 ? colors.colorCoreGray : colors.bcTimeBlock;

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
                <View style={styles.dayContainer}>
                  <Text style={styles.date}>
                    {dayTranslator(dayjs(el).format('ddd'))}
                  </Text>
                  <Text style={styles.date}>{dayjs(el).format('DD')}</Text>
                </View>
                <ScrollView
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                >
                  <>
                    {courtSchedule.map((schedule, index) => {
                      return (
                        <View key={index}>
                          {dayjs(schedule.startTime).format('YYYY-MM-DD') === el
                            ? renderRowItem(schedule)
                            : null}
                        </View>
                      );
                    })}
                  </>
                </ScrollView>
              </View>
              <View
                style={{ backgroundColor: colors.colorLightGray, height: 0.5 }}
              />
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
          marginBottom: 5,
          borderWidth: 0.5,
          width: '93%',
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
          Цагийн хуваарь
        </Text>
      </View>

      <ScrollView
        style={{
          flex: 1,
          marginHorizontal: 13
        }}
      >
        {uniqueDay.length > 0 ? (
          renderRow(uniqueDay, courtSchedule)
        ) : (
          <Text
            style={{
              textAlign: 'center',
              fontSize: 12,
              color: colors.colorLightGray
            }}
          >
            Цагийн хуваарь тавигдаагүй байна.
          </Text>
        )}
      </ScrollView>
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
    fontSize: Platform.OS === 'ios' ? 17 : 16,
    fontWeight: 'bold',
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
    width: 70,
    height: 52
  },
  timeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  time: {
    paddingBottom: 3,
    fontSize: Platform.OS === 'ios' ? 12 : 10
  },
  people: {
    fontSize: Platform.OS === 'ios' ? 11 : 9
  },
  price: {
    paddingBottom: 3,
    fontSize: Platform.OS === 'ios' ? 12 : 10
  },
  booked: {
    fontSize: 12,
    fontWeight: '400',
    color: 'gray'
  },
  dayContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 58
  }
});

export default CourtTimePick;
