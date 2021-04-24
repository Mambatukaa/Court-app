import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ActivityIndicator,
  TextInput,
  KeyboardAvoidingView,
  Platform
} from 'react-native';

import dayjs from 'dayjs';

import { useNavigation } from '@react-navigation/native';

import { gql, useQuery } from '@apollo/client';
import queries from './graphql/queries';
import { colors } from '../../common/styles';
import { GradientBtn } from '../../common/components';
import { ScrollView } from 'react-native-gesture-handler';

const CourtBookDetail = props => {
  const { courtId, item } = props.route.params;

  const [discount, setDiscount] = useState(item?.price);
  const [change, onChange] = useState(null);
  const navigation = useNavigation();

  const { data, loading, error } = useQuery(gql(queries.courtDetail), {
    variables: {
      _id: courtId
    }
  });

  if (loading) {
    return <ActivityIndicator size='small' color='#B43CF3' />;
  }

  const { courtDetail } = data;

  const handleDiscount = () => {
    if (change === 'Mamba') {
      setDiscount(Number(item?.price) / 2);
    } else {
      setDiscount(item.price);
    }
  };

  const renderTop = () => {
    return (
      <View style={{ flexDirection: 'row' }}>
        <Image
          style={styles.image}
          source={{ uri: courtDetail.image }}
          resizeMode='cover'
        />
        <Text
          numberOfLines={2}
          ellipsizeMode='tail'
          style={[styles.courtName, {}]}
        >
          {courtDetail.name}
        </Text>
      </View>
    );
  };

  const renderMid = () => {
    return (
      <>
        <View style={styles.itemContainer}>
          <Text style={styles.itemLabel}>Спорт:</Text>
          <Text style={styles.itemValue}>Сагсан бөмбөг</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.itemLabel}>Захиалсан:</Text>
          <Text style={styles.itemValue}>{`${item.bookedPeople} тоглогч`}</Text>
        </View>
        <View
          style={{
            backgroundColor: colors.grdMain,
            height: 3,
            width: 80,
            marginHorizontal: 10,
            marginVertical: 6
          }}
        />

        <View style={styles.itemContainer}>
          <Text style={styles.itemLabel}>Хэзээ:</Text>
          <Text style={styles.itemValue}>
            {dayjs(item.startTime).format('YYYY-MM-DD')}
          </Text>
        </View>

        <View style={styles.itemContainer}>
          <Text style={styles.itemLabel}>Цаг:</Text>
          <Text style={styles.itemValue}>
            {`${dayjs(item.startTime).format('HH:mm')} - ${dayjs(
              item.endTime
            ).format('HH:mm')}`}
          </Text>
        </View>

        <View style={styles.itemContainer}>
          <Text style={styles.itemLabel}>Хугацаа:</Text>
          <Text style={styles.itemValue}>1 цаг</Text>
        </View>

        <View
          style={{ backgroundColor: colors.primary, height: 1, marginTop: 15 }}
        />
      </>
    );
  };

  const renderBottom = () => {
    return (
      <>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginHorizontal: 10,
            marginVertical: 10
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: '600' }}>Үнэ:</Text>
          <Text style={{ fontSize: 16 }}>{`${item.price}₮`}</Text>
        </View>
        <View style={{ backgroundColor: colors.primary, height: 1 }} />

        <View
          style={{ marginTop: 13, marginHorizontal: 10, flexDirection: 'row' }}
        >
          <TextInput
            style={{
              borderWidth: 1,
              borderRadius: 5,
              padding: 10,
              backgroundColor: colors.colorWhite,
              width: '66%',
              height: 38
            }}
            value={change}
            onChangeText={onChange}
            placeholder='Хямдралын код оруулах'
          />

          <GradientBtn
            text='Оруулах'
            onPress={() => handleDiscount()}
            linearGradientStyle={[
              {
                borderRadius: 5,
                marginLeft: 7,
                width: 110,
                height: 38,
                backgroundColor: 'white'
              }
            ]}
            textStyle={{ fontSize: 13 }}
          />
        </View>
        <View
          style={{
            backgroundColor: colors.timeBlock,
            height: 1.5,
            marginTop: 13
          }}
        />

        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginHorizontal: 10,
            marginVertical: 10
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Нийт:</Text>
          <Text
            style={{ fontSize: 16, fontWeight: 'bold' }}
          >{`${discount}₮`}</Text>
        </View>
        <View style={{ backgroundColor: colors.timeBlock, height: 1.5 }} />
      </>
    );
  };

  const renderBottomButton = () => (
    <View>
      <Text></Text>
      <View style={{ alignItems: 'center', marginVertical: 20 }}>
        <GradientBtn
          onPress={() =>
            navigation.navigate('Payment', {
              scheduleId: item._id,
              courtId
            })
          }
          text='Төлбөр төлөх'
          linearGradientStyle={{ borderRadius: 5, width: 250 }}
          textStyle={{ fontSize: 15 }}
        />
      </View>
    </View>
  );

  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.bgMain }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        enabled={true}
      >
        {renderTop()}
        {renderMid()}
        {renderBottom()}
        {renderBottomButton()}
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    backgroundColor: 'red',
    height: 90,
    width: 130,
    margin: 12,
    borderRadius: 7
  },
  courtName: {
    fontSize: 18,
    fontWeight: '600',
    margin: 15,
    flex: 1
  },
  itemContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 6
  },
  itemLabel: {
    fontWeight: 'bold',
    paddingRight: 20,
    fontSize: 15
  },
  itemValue: {
    fontWeight: '500',
    fontSize: 15
  }
});

export const screenOptions = () => {
  return {
    headerTitle: 'Захиалга',
    headerBackTitle: ' '
  };
};

export default CourtBookDetail;
