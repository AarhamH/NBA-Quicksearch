import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from './playergeneral.style'

const PlayerGeneral = ({playerHeadShot, playerFirstName, playerLastName, playerPosition, playerJersey}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image
          source={{ uri: playerHeadShot }} style={styles.logoImage}
        />
      </View>
      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{playerFirstName} {playerLastName}</Text>
      </View>
      <View style={styles.companyInfoBox}>
        <View style={styles.locationBox}>
          <Text style={styles.locationName}>{playerJersey} | </Text>
        </View>
        <Text style={styles.companyName}>{playerPosition}</Text>
      </View>
    </View>
  )
}

export default PlayerGeneral