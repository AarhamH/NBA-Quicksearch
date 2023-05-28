import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './playersummarycard.style'
import { setPosition } from '../../../../app/positions/positions';


const PlayerSummaryCard = ({ item, handleNavigate }) => {
  var positions = new Map();
  setPosition(positions);

  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>

      <TouchableOpacity style={styles.logoContainer}>
        <Image source={{uri:item.headShotUrl}} resizeMode='contain' style={styles.logImage}/>
      </TouchableOpacity>
      

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}> {item.firstName} {item.lastName}  |  {positions.get(item.position)} </Text>
        <Text style={styles.summaryStats}> PPG  {item.careerPoints}  |  REB  {item.careerRebounds}  |  AST  {item.careerAssists} </Text>
      </View>
      
    </TouchableOpacity>
  )
}

export default PlayerSummaryCard