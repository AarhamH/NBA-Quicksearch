import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './popularjobcard.style'

const PopularJobCard = ({item, selectedPlayer, handleCardPress}) => {
  return (
    <TouchableOpacity 
      style={styles.container(selectedPlayer, item)}
      onPress={()=>handleCardPress(item)}>

        <TouchableOpacity style={styles.logoContainer(selectedPlayer, item)}>
          <Image source={{uri: item.team_logo}}/>
        </TouchableOpacity>
    </TouchableOpacity>
  )
}

export default PopularJobCard