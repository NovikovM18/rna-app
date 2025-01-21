import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Details = () => {
  return (
    <View>
      <Text>Details</Text>

      <Link href="/">Go to home screen</Link>

      <Link
        href={{
          pathname: '/details/[id]',
          params: { id: 'bacon' },
        }}>
        View user details
      </Link>
    </View>
  )
}

export default Details

const styles = StyleSheet.create({})