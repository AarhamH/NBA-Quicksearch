import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './playersummarycard.style'
import { setPosition } from '../../../../app/positions/positions';
import { createTeamHash } from '../../../../teams/teams'


const PlayerSummaryCard = ({ item, handleNavigate }) => {
  var positions = new Map();
  const teams = new Map();
  setPosition(positions);
  createTeamHash(teams);


  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>

      <TouchableOpacity style={styles.summaryContainer}>
        <Image source={{uri: item.team !== null?`https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/${teams.get(item.team)}.png&h=200&w=200`:
                                                'https://a.espncdn.com/combiner/i?img=/redesign/assets/img/icons/ESPN-icon-basketball.png&h=200&w=200&scale=crop&cquality=40'}} 
                                                 resizeMode='contain' style={styles.logoImg}/>

        <Image source={{uri:item.headShotUrl!== null? item.headShotUrl:
                                                      'https://a1.espncdn.com/combiner/i?img=/i/headshots/nophoto.png&w=60&h=60&scale=crop&cquality=40'}} 
                                                       resizeMode='contain' style={styles.headShot}/>
      </TouchableOpacity>
      

      <View style={styles.textContainer}>
        <Text style={styles.playerName} numberOfLines={1}> {item.firstName} {item.lastName}  |  {positions.get(item.position)} </Text>
        <Text style={styles.summaryStats}> PPG  {item.careerPoints}  |  REB  {item.careerRebounds}  |  AST  {item.careerAssists} </Text>
      </View>
      
    </TouchableOpacity>
  )
}

export default PlayerSummaryCard