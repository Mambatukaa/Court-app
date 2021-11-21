import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { colors } from '../../../common/styles';

function DateFilter() {
  const [dateStartDate, setDateStartDate] = useState(new Date());
  const [modeStartDate, setModeStartDate] = useState();

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
    <View style={styles.container}>
      <Text style={{ fontWeight: 'bold', marginBottom: 20 }}>Хугацаа</Text>
      <View
        style={{
          padding: 5,
          borderRadius: 10,
          backgroundColor: colors.bgActive,
          height: 60
        }}
      >
        <Text style={{ fontSize: 12 }}>Эхлэх огноо</Text>
        <DateTimePicker
          style={{
            width: 120,
            marginVertical: 4,
            borderColor: colors.bgActive
          }}
          testID="startDateTimePicker"
          value={dateStartDate}
          mode={modeStartDate}
          is24Hour={true}
          maximumDate={dateEndDate}
          display="default"
          locale={'en_GB'}
          /* onChange={onChangeStartDate} */
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: 30
  }
});

export default DateFilter;
