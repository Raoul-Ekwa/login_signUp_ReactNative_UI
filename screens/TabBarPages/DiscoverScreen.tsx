import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DiscoverScreen = () => {
  return (
    <View style={styles.rootContainer}>
      <Text>Services</Text>
    </View>
  )
}

export default DiscoverScreen

const styles = StyleSheet.create({
   rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
   }
})