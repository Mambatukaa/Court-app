import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const BookedCourt = props => {
  return (
    <View>
      <View style={styles.court}>
        <View style={styles.main}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>City Basketball</Text>
            <Text style={styles.dateContainer}>Date</Text>
            <Text style={styles.date}>Friday, 21 January 2020</Text>
            <Text style={styles.timeContainer}>Time</Text>
            <Text style={styles.time}>14:00 - 16:00</Text>
            <Text style={styles.orderContainer}>Захиалсан хүний тоо</Text>
            <Text style={styles.order}>6</Text>

            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            ></View>
          </View>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{
                uri:
                  'https://www.nba.com/resources/static/team/v2/heat/custom-projects/2018-19_Uniforms/imgs/vice-nights-court-1.jpg'
              }}
              resizeMode='cover'
            />
            <Text
              style={{
                color: '#3ace3a',
                fontWeight: 'bold',
                paddingTop: 30,
                paddingLeft: 30
              }}
            >
              Confirmed
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  court: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: '#f6f6f6',
    marginLeft: 25,
    marginRight: 25,
    marginTop: 14,
    height: 180
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
    fontSize: 16,
    fontWeight: 'bold'
  },
  textContainer: {
    margin: 20,
    flex: 2
  },
  dateContainer: {
    paddingTop: 7,
    fontSize: 14,
    fontWeight: 'bold'
  },
  date: {
    paddingTop: 5,
    fontSize: 12
  },
  timeContainer: {
    paddingTop: 5,
    fontSize: 14,
    fontWeight: 'bold'
  },
  time: {
    fontSize: 12,
    paddingTop: 5
  },
  orderContainer: {
    paddingTop: 5,
    fontSize: 14,
    fontWeight: 'bold'
  },
  order: {
    fontSize: 12,
    paddingTop: 5
  }
});

export default BookedCourt;
