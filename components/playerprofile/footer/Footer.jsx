import React from 'react'
import { View, Text, TouchableOpacity, Linking   } from 'react-native'
import { parseName } from '../../../utils'

import styles from './footer.style'

const Footer = ({dateLastUpdated, playerFirstName, playerLastName}) => {
  var name = playerFirstName + " "+ playerLastName;
  var parsedName = parseName(name);
  return (
    <View style={styles.container}>
      <Text> Last Updated: {dateLastUpdated}</Text>
      <TouchableOpacity style={styles.applyBtn} onPress={()=>{Linking.openURL(`https://ca.global.nba.com/players/${parsedName}/`)}}>
        <Text>Visit NBA.com</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Footer