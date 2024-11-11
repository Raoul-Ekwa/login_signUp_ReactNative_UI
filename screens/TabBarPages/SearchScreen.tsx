import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SearchScreen = () => {
  return (
    <View style={styles.rootContainer}>
      <Text>Recherche</Text>
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  rootContainer: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center'
  }
})