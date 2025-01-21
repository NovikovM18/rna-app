import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const gStyle = require('../../styles');

const Settings = () => {
  return (
    <View>
      <Text>Settings</Text>

      <View style={gStyle.linkWrap}>
        <Link href="/" style={gStyle.link}>Go to home-index screen</Link>
      </View>

    </View>
  )
}

export default Settings

const styles = StyleSheet.create({})