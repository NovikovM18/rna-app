import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const globalStyles = require('../../../assets/styles');

const Settings = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Settings</Text>

      <View style={globalStyles.linkWrap}>
        <Link href="/(home)" style={globalStyles.link}>Go to home-index screen</Link>
      </View>

    </View>
  )
}

export default Settings

const styles = StyleSheet.create({})