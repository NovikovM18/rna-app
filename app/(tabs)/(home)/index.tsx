import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';

const globalStyles = require('../../../assets/styles');

const Home = () => {

  const btnPress = () => {
    console.log('TOAST');
    
    Toast.show({
      type: 'info',
      text1: 'Hello',
      text2: 'This is some something 👋',
      text1Style: {
        fontSize: 20
      },
      text2Style: {
        fontSize: 16,
        color: 'gray'
      },
    });
  }

  return (
    <SafeAreaProvider>      
      <SafeAreaView style={globalStyles.container}>
        <Text style={globalStyles.title}>Home</Text>

        <View style={globalStyles.linkWrap}>
          <Link href="/details/details" style={globalStyles.link}>Go to details screen</Link>
          <Link href="/(settings)" style={globalStyles.link}>Go to Settings screen</Link>
          <Link href="/calendaring" style={globalStyles.link}>Go to Calendar</Link>
          <Link href="/agending" style={globalStyles.link}>Go to Agenda</Link>
        </View>

        <Button title='click' onPress={btnPress}></Button>

      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default Home

const styles = StyleSheet.create({})