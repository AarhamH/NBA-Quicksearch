import React from 'react'
import { View, Text } from 'react-native'

import styles from './specifics.style'

const Specifics = ({title,playerBirthday,playerAge,playerHeight,playerWeight,playerTeam}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <View style={styles.pointsContainer}>
        {/* THIS IS A POINT COMPONENT*/}
        <View style={styles.pointWrapper}>
          <View style={styles.pointDot}/>
          <Text style={styles.pointText}>Age: {playerAge}</Text>
        </View>

        {/* THIS IS A POINT COMPONENT*/}
        <View style={styles.pointWrapper}>
          <View style={styles.pointDot}/>
          <Text style={styles.pointText}>Birth Date: {playerBirthday}</Text>
        </View>

        {/* THIS IS A POINT COMPONENT*/}
        <View style={styles.pointWrapper}>
          <View style={styles.pointDot}/>
          <Text style={styles.pointText}>Height: {playerHeight}</Text>
        </View>

        {/* THIS IS A POINT COMPONENT*/}
        <View style={styles.pointWrapper}>
          <View style={styles.pointDot}/>
          <Text style={styles.pointText}>Weight: {playerWeight}</Text>
        </View>

        {/* THIS IS A POINT COMPONENT*/}
        <View style={styles.pointWrapper}>
          <View style={styles.pointDot}/>
          <Text style={styles.pointText}>Team: {playerTeam}</Text>
        </View>
      </View>
    </View>
  )
}

export default Specifics