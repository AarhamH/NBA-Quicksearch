import React from 'react'
import { View, Text } from 'react-native'

import styles from './footer.style'

const Footer = ({dateLastUpdated}) => {
  return (
    <View style={styles.container}>
      <Text> Last Updated: {dateLastUpdated}</Text>
    </View>
  )
}

export default Footer