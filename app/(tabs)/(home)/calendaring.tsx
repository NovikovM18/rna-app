import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import {Calendar, LocaleConfig} from 'react-native-calendars';

const Calendaring = () => {
  const [selected, setSelected] = useState('');

  return (
    <View>    
      <Calendar
        onDayPress={(day: { dateString: React.SetStateAction<string>; }) => {
          setSelected(day.dateString);
        }}
        markedDates={{
          [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'red'}
        }}
      />

      <Text>{selected}</Text>
    </View>
  )
}

export default Calendaring

const styles = StyleSheet.create({})