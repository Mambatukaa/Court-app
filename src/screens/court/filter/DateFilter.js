import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

function DateFilter() {
  const [dateStartDate, setDateStartDate] = useState(new Date());
  const [modeStartDate, setModeStartDate] = useState('date');
  const [dateEndDate, setDateEndDate] = useState(new Date());

  const onChangeStartDate = (event, selectedDate) => {
    /*     setShowStart(false);
    if (selectedDate === undefined) {
      return;
    }
    setDateStartDate(selectedDate);
    if (modeStartDate === 'date') {
      setSelectedStartDate(moment(selectedDate).format('YYYY-MM-DD'));
      setSelectedStartTime(moment(selectedDate).format('HH:mm'));
    }
    if (modeStartDate === 'time') {
      setSelectedStartTime(moment(selectedDate).format('HH:mm'));
    } */
  };

  return (
    <View>
      <DateTimePicker
        testID='startDateTimePicker'
        value={dateStartDate}
        mode={modeStartDate}
        is24Hour={true}
        maximumDate={dateEndDate}
        display='default'
        locale={'en_GB'}
        /* onChange={onChangeStartDate} */
      />
    </View>
  );
}

const styles = StyleSheet.create({});

export default DateFilter;
