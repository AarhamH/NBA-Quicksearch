import React from 'react'
import { View, Text, TouchableOpacity, Linking   } from 'react-native'
import { parseName } from '../../../utils'

import styles from './footer.style'

const Footer = ({dateLastUpdated, playerFirstName, playerLastName}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.footerText}> Last Updated: {dateLastUpdated}</Text>
    </View>
  )
}

export default Footer