import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const gStyle = require('../../../styles');

const Home = () => {
  return (
    <View>
      <Text>Home</Text>

      <View style={gStyle.linkWrap}>
        <Link href="/details/details" style={gStyle.link}>Go to details screen</Link>
        <Link href="/details/123" style={gStyle.link}>Go to details screen 123</Link>
        <Link href="/details/5555" style={gStyle.link}>Go to details screen 5555</Link>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})