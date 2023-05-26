import React from 'react'
import { View, Text } from 'react-native'

import styles from './specifics.style'

const Specifics = ({title,playerPPG,playerREB,playerAST,playerBLK,playerTOV,player3PT,playerFT,playerFG}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <View style={styles.pointsContainer}>
        {/* THIS IS A POINT COMPONENT*/}
        <View style={styles.pointWrapper}>
          <View style={styles.pointDot}/>
          <Text style={styles.pointText}>PPG: {playerPPG}</Text>
        </View>

        {/* THIS IS A POINT COMPONENT*/}
        <View style={styles.pointWrapper}>
          <View style={styles.pointDot}/>
          <Text style={styles.pointText}>REB: {playerREB}</Text>
        </View>

        {/* THIS IS A POINT COMPONENT*/}
        <View style={styles.pointWrapper}>
          <View style={styles.pointDot}/>
          <Text style={styles.pointText}>AST: {playerAST}</Text>
        </View>

        {/* THIS IS A POINT COMPONENT*/}
        <View style={styles.pointWrapper}>
          <View style={styles.pointDot}/>
          <Text style={styles.pointText}>BLK: {playerBLK}</Text>
        </View>

        {/* THIS IS A POINT COMPONENT*/}
        <View style={styles.pointWrapper}>
          <View style={styles.pointDot}/>
          <Text style={styles.pointText}>TOV: {playerTOV}</Text>
        </View>

        {/* THIS IS A POINT COMPONENT*/}
        <View style={styles.pointWrapper}>
          <View style={styles.pointDot}/>
          <Text style={styles.pointText}>3PT%: {player3PT}</Text>
        </View>

        {/* THIS IS A POINT COMPONENT*/}
        <View style={styles.pointWrapper}>
          <View style={styles.pointDot}/>
          <Text style={styles.pointText}>FT%: {playerFT}</Text>
        </View>

        {/* THIS IS A POINT COMPONENT*/}
        <View style={styles.pointWrapper}>
          <View style={styles.pointDot}/>
          <Text style={styles.pointText}>FG%: {playerFG}</Text>
        </View>
      </View>
    </View>
  )
}

export default Specifics