import React from 'react'
import { View, Text } from 'react-native'

import styles from './about.style'

const About = ({title,playerBirthday,playerAge,playerHeight,playerWeight,playerTeam}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>{title}</Text>
      
      <View style={styles.contentBox}>
        <Text style={styles.contextText}>Age: {playerAge}</Text>
        <Text style={styles.contextText}>Birthday: {playerBirthday}</Text>
        <Text style={styles.contextText}>Height: {playerHeight}</Text>
        <Text style={styles.contextText}>Weight: {playerWeight}</Text>
        <Text style={styles.contextText}>Team: {playerTeam}</Text>


      </View>
    </View>
  )
}

export default About