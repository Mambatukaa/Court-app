import React, { useState, useEffect } from 'react';

import { SafeAreaView, StyleSheet, Dimensions, ScrollView } from 'react-native';
import Modal from 'react-native-modal';

const width = Dimensions.get('window').width;

const FilterWrapper = ({
  setSetFilterVisible,
  isFilterVisible,
  setFilters,
  type
}) => {
  const [brand, setBrand] = useState();
  const [tag, setTag] = useState();
  const [segment, setSegment] = useState();

  const hide = () => {
    const obj = {
      ...(tag && { tag: tag._id }),
      ...(brand && { brand: brand._id }),
      ...(segment && { segment: segment._id })
    };
    setFilters(obj);
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
          {/* <BrandFilter type={type} brand={brand} setBrand={setBrand} />
          <TagFilter type={type} tag={tag} setTag={setTag} />
          <SegmentFilter
            type={type}
            segment={segment}
            setSegment={setSegment}
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
    width: width * 0.75
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
