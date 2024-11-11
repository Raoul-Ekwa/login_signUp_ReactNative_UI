import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeListItem from '@/components/HomeListItem';

function PageAcceuil(){
  return (
    <HomeListItem /> //liste les repas ou articles sur la page d'acceuil
  )
}

export default PageAcceuil

// Styles
const styles = StyleSheet.create({
    screenContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#eb529a'
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
      color:'white'
    },
  });
  