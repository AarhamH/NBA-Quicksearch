import React from 'react'
import { View, Text, Image } from 'react-native'
import { parseName } from '../../../utils'
import { setPosition } from '../../../app/positions/positions'

import styles from './playergeneral.style'

const PlayerGeneral = ({playerHeadShot, playerFirstName, playerLastName, playerPosition, playerJersey}) => {
  var positions = new Map();
  setPosition(positions)
  return (
    <View style={styles.container}>
      <View style={styles.headShotBox}>
        <Image
          source={{ uri: playerHeadShot }} style={styles.headShotImg}
        />
      </View>
      <View style={styles.playerNameBox}>
        <Text style={styles.playerName}>{playerFirstName} {playerLastName}</Text>
      </View>
      <View style={styles.positionNameBox}>
        <View style={styles.jerseyBox}>
          <Text style={styles.jerseyNum}>{playerJersey} | </Text>
        </View>
        <Text style={styles.positionName}>{positions.get(playerPosition)}</Text>
      </View>
    </View>
  )
}

export default PlayerGeneral