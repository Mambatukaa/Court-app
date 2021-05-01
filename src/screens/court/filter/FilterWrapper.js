import React, { useState, useEffect } from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  ScrollView,
  Text
} from 'react-native';
import Modal from 'react-native-modal';
import { GradientBtn } from '../../../common/components';
import { PriceFilter, DateFilter } from '../filter';

const width = Dimensions.get('window').width;

const FilterWrapper = props => {
  const { setSetFilterVisible, isFilterVisible } = props;

  const hide = () => {
    /*  const obj = {
      ...(price && { minPrice: price.minPrice, maxPrice: price.maxPrice })
    }; */

    setSetFilterVisible(false);
  };

  return (
    <Modal
      onBackdropPress={hide}
      onSwipeComplete={hide}
      isVisible={isFilterVisible}
      animationIn='slideInLeft'
      animationOut='slideOutLeft'
      swipeDirection='left'
      useNativeDriver
      hideModalContentWhileAnimating
      propagateSwipe
      style={styles.modal}
    >
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <PriceFilter {...props} />
          {/*  <DateFilter /> */}
          {/*   <GradientBtn
            text='Шүүх'
            linearGradientStyle={{
              marginTop: 20,
              width: 180,
              borderRadius: 10,
              alignSelf: 'center'
            }}
          /> */}
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
};

export default FilterWrapper;

const styles = StyleSheet.create({
  modal: {
    margin: 0,
    width: width * 0.65
  },
  container: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: 'white',
    flex: 1
  },
  view: {
    paddingHorizontal: 16
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16
  }
});
