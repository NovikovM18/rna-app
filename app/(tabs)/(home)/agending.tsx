import React, { useState } from 'react'
import {Alert, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Agenda, DateData, AgendaEntry, AgendaSchedule} from 'react-native-calendars';

interface Stating {
  items?: AgendaSchedule;
}

const Agending = () => {
  const [state, setState] = useState<Stating>({items: undefined})
  
  const loadItems = (day: DateData) => {
    const items = state.items || {};

    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 10;
        const strTime = timeToString(time);

        if (!items[strTime]) {
          items[strTime] = [];
          
          const numItems = Math.floor(Math.random() * 3 + 1);          
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: 'Item for ' + strTime + ' #' + j,
              height: Math.max(50, Math.floor(Math.random() * 150)),
              day: strTime
            });
          }
        }
      }
      
      const newItems: AgendaSchedule = {};
      Object.keys(items).forEach(key => {
        newItems[key] = items[key];
      });
      
      setState({
        items: newItems
      });
    }, 100);
  };

  const renderDay = (day: { getDay: () => string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => {
    if (day) {      
      return <Text style={styles.customDay}>{day.getDay()}</Text>;
    }
    return <View style={styles.dayItem}/>;
  };

  const renderItem = (reservation: AgendaEntry, isFirst: boolean) => {
    const fontSize = isFirst ? 16 : 14;
    const color = isFirst ? 'black' : '#43515c';

    return (
      <TouchableOpacity
        testID={'item'}
        style={[styles.item, {height: reservation.height}]}
        onPress={() => Alert.alert(reservation.name)}
      >
        <Text style={{fontSize, color}}>{reservation.name}</Text>
      </TouchableOpacity>
    );
  };

  const renderEmptyDate = () => {
    return (
      <View style={styles.emptyDate}>
        <Text>This is empty date!</Text>
      </View>
    );
  };

  const rowHasChanged = (r1: AgendaEntry, r2: AgendaEntry) => {
    return r1.name !== r2.name;
  };

  function timeToString(time: number) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }


  return (
      <Agenda
        testID={'agenda'}
        items={state.items}
        loadItemsForMonth={loadItems}
        selected={'2025-01-16'}
        renderItem={renderItem}
        renderEmptyDate={renderEmptyDate}
        rowHasChanged={rowHasChanged}
        showClosingKnob={true}
        markingType={'period'}
        markedDates={{
           '2025-01-08': {textColor: '#43515c'},
           '2025-01-09': {textColor: '#43515c'},
           '2025-01-14': {startingDay: true, endingDay: false, color: 'blue'},
           '2025-01-15': {startingDay: false, endingDay: false, color: 'blue'},
           '2025-01-16': {startingDay: false, endingDay: true, color: 'blue'},
           '2025-01-21': {startingDay: true, color: 'blue'},
           '2025-01-22': {endingDay: true, color: 'gray'},
           '2025-01-24': {startingDay: true, color: 'gray'},
           '2025-01-25': {color: 'gray'},
           '2025-01-26': {endingDay: true, color: 'gray'}}}
        monthFormat={'yyyy MM'}
        theme={{calendarBackground: 'red', agendaKnobColor: 'green'}}
        renderDay={renderDay}
        hideExtraDays={false}
        showOnlySelectedDayItems
      />
  )
}

export default Agending

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30
  },
  customDay: {
    margin: 10,
    fontSize: 24,
    color: 'green'
  },
  dayItem: {
    marginLeft: 34
  }
});