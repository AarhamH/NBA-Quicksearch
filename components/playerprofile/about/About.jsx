import React from 'react'
import { View, Text, Image } from 'react-native'
import { createTeamHash } from '../../../teams/teams'

import styles from './about.style'

const About = ({title,playerBirthday,playerAge,playerHeight,playerWeight,playerTeam}) => {
  const teams = new Map();
  createTeamHash(teams)
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>{title}</Text>
      
      <View style={styles.contentBox}>
        <Text style={styles.contextText}>Age: {playerAge}</Text>
        <Text style={styles.contextText}>Birthday: {playerBirthday}</Text>
        <Text style={styles.contextText}>Height: {playerHeight}</Text>
        <Text style={styles.contextText}>Weight: {playerWeight}</Text>
        <Text style={styles.contextText}>Team: {playerTeam}</Text>
        <Image source={{uri:`https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/${teams.get(playerTeam)}.png&h=200&w=200`}} 
                       style={styles.logoImg}/>
      </View>
    </View>
  )
}

export default About