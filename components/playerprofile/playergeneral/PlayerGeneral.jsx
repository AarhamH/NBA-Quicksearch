import React from 'react'
import { View, Text, Image,Linking } from 'react-native'
import { parseName } from '../../../utils'
import { setPosition } from '../../../app/positions/positions'

import styles from './playergeneral.style'
import { TouchableOpacity } from 'react-native-gesture-handler'

const PlayerGeneral = ({playerHeadShot, playerFirstName, playerLastName, playerPosition, playerJersey}) => {
  var positions = new Map();
  setPosition(positions);

  var name = playerFirstName + " "+ playerLastName;
  var parsedName = parseName(name);
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.headShotBox} onPress={()=>{Linking.openURL(`https://ca.global.nba.com/players/${parsedName}/`)}}>
        <Image
          source={{ uri: playerHeadShot }} style={styles.headShotImg}
        />
      </TouchableOpacity>
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