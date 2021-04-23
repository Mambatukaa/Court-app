import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import dayjs from 'dayjs';

const BookedCourt = props => {
  const { allSchedules = [] } = props;

  return (
    <View>
      {allSchedules.map((schedule, index) => {
        return (
          <View key={index} style={styles.court}>
            <View style={styles.main}>
              <View style={styles.textContainer}>
                <Text style={styles.title}>{schedule.scheduledCourt.name}</Text>
                <Text style={styles.dateContainer}>Өдөр</Text>
                <Text style={styles.date}>
                  {`${dayjs(schedule.day).format('YYYY-MM-DD')}нд`}
                </Text>
                <Text style={styles.timeContainer}>Цаг</Text>
                <Text style={styles.time}>{`${dayjs(schedule.startTime).format(
                  'hh:mm'
                )} - ${dayjs(schedule.endTime).format('hh:mm')}`}</Text>
                <Text style={styles.orderContainer}>Захиалсан хүний тоо</Text>
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
                  resizeMode='cover'
                />
                <Text
                  style={{
                    color: '#3ace3a',
                    fontWeight: 'bold',
                    paddingTop: 35,
                    paddingLeft: 30
                  }}
                >
                  Confirmed
                </Text>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  court: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 10,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: '#f6f6f6',
    marginLeft: 25,
    marginRight: 25,
    marginTop: 14,
    height: 200
  },

  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10
  },
  imageContainer: {
    //flex: 1,
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
