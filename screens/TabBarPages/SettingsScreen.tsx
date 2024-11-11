import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SettingsScreen = () => {
  return (
    <View style={styles.rootContainer}>
      <Text>Paramètres</Text>
    </View>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({
  rootContainer: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center'
  }
})