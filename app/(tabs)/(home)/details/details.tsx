import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const globalStyles = (require('../../../../assets/styles'))

const Details = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.subTitle}>Details</Text>

      <View style={globalStyles.linkWrap}>
        <Link style={globalStyles.link} href="/">Go to home screen</Link>
        <Link
          style={globalStyles.link}
          href={{
            pathname: '/details/[id]',
            params: { id: 'bacon' },
          }}>
          View user details 'bacon'
        </Link>
        <Link href="/details/123" style={globalStyles.link}>Go to details screen 123</Link>
        <Link href="/details/5555" style={globalStyles.link}>Go to details screen 5555</Link>
      </View>
    </View>
  )
}

export default Details

const styles = StyleSheet.create({})