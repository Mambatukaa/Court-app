import React from 'react';
import { StyleSheet, View, Text, Image, Platform } from 'react-native';
import dayjs from 'dayjs';
import { colors } from '../../styles';

const BookedCourt = props => {
  const { allSchedules = [] } = props;

  return (
    <View>
      {allSchedules.length !== 0 ? (
        <View>
          {allSchedules.map((schedule, index) => {
            return (
              <View key={index} style={styles.court}>
                <View style={styles.main}>
                  <View style={styles.textContainer}>
                    <Text style={styles.title}>
                      {schedule.scheduledCourt.name}
                    </Text>
                    <Text style={styles.dateContainer}>Өдөр</Text>
                    <Text style={styles.date}>
                      {`${dayjs(schedule.startTime).format('YYYY-MM-DD')}нд`}
                    </Text>
                    <Text style={styles.timeContainer}>Цаг</Text>
                    <Text style={styles.time}>{`${dayjs(
                      schedule.startTime
                    ).format('HH:mm')} - ${dayjs(schedule.endTime).format(
                      'HH:mm'
                    )}`}</Text>
                    <Text style={styles.orderContainer}>
                      Захиалсан хүний тоо
                    </Text>
                    <Text style={styles.order}>{schedule.bookedPeople}</Text>

                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                      }}
                    ></View>
                  </View>
                  <View style={styles.imageContainer}>
                    <Image
                      style={styles.image}
                      source={{ uri: schedule?.scheduledCourt.image }}
                      resizeMode="cover"
                    />
                    <Text
                      style={{
                        color: colors.timeBlock,
                        fontWeight: 'bold',
                        paddingTop: 50,
                        fontSize: 12.5,
                        alignSelf: 'center'
                      }}
                    >
                      Баталгаажсан
                    </Text>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      ) : (
        <View
          style={{
            alignItems: 'center'
          }}
        >
          <Text
            style={{
              fontSize: 13,
              marginTop: 10,
              color: colors.colorLightGray
            }}
          >
            {'Танд захиалсан заал байхгүй байна.'}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  court: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 10,
    elevation: 12,
    borderRadius: 10,
    backgroundColor: colors.bgLight,
    marginLeft: 25,
    marginRight: 25,
    marginTop: Platform.OS === 'ios' ? 13 : 12,
    marginBottom: Platform.OS === 'android' ? 10 : 8,
    height: Platform.OS === 'ios' ? 200 : 210
  },

  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10
  },
  imageContainer: {
    marginRight: 15,
    marginTop: 15
  },
  image: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    borderRadius: 10
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10
  },
  textContainer: {
    margin: 20,
    flex: 2
  },
  dateContainer: {
    paddingTop: 7,
    fontSize: 13,
    fontWeight: 'bold'
  },
  date: {
    paddingTop: 5,
    fontSize: 12
  },
  timeContainer: {
    paddingTop: 5,
    fontSize: 13,
    fontWeight: 'bold'
  },
  time: {
    fontSize: 12,
    paddingTop: 5
  },
  orderContainer: {
    paddingTop: 5,
    fontSize: 13,
    fontWeight: 'bold'
  },
  order: {
    fontSize: 12,
    paddingTop: 5
  }
});

export default BookedCourt;
