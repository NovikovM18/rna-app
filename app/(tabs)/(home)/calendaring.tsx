import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import {Calendar, LocaleConfig} from 'react-native-calendars';

const Calendaring = () => {
  const [selected, setSelected] = useState('');

  return (
    <View>    
      <Calendar
        style={{
          borderWidth: 1,
          borderColor: 'gray',
        }}
        theme={{
          backgroundColor: '#ffffff',
          calendarBackground: '#ffffff',
          textSectionTitleColor: '#b6c1cd',
          selectedDayBackgroundColor: 'lightgreen',
          selectedDayTextColor: 'yellow',
          todayTextColor: 'lightgreen',
          dayTextColor: '#2d4150',
          textDisabledColor: '#dd99ee'
        }}
        onDayPress={(day: { dateString: React.SetStateAction<string> }) => {
          setSelected(day.dateString);
        }}
        markedDates={{
          [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
        }}
      />

      <Text>{selected}</Text>
    </View>
  )
}

export default Calendaring

const styles = StyleSheet.create({})