import React from 'react'
import { View, Text } from 'react-native'

import styles from './about.style'

const About = ({title,playerBirthday,playerAge,playerHeight,playerWeight,playerTeam}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headText}> About: </Text>

    </View>
  )
}

export default About