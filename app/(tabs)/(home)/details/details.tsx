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
          View user details
        </Link>
      </View>
    </View>
  )
}

export default Details

const styles = StyleSheet.create({})