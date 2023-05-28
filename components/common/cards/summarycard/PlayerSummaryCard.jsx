import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './playersummarycard.style'

const PlayerSummaryCard = ({ item, handleNavigate }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>

      <TouchableOpacity style={styles.logoContainer}>
        <Image source={{uri:item.headShotUrl}} resizeMode='contain' style={styles.logImage}/>
      </TouchableOpacity>
      <Text style={styles.jobName} numberOfLines={1}>      {item.firstName} {item.lastName}  </Text>

      <View style={styles.textContainer}>
        <Text style={styles.jobName}> PPG </Text>
        <Text style={styles.jobName}> REB </Text>  
        <Text style={styles.jobName}> AST </Text>  

      </View>
    </TouchableOpacity>
  )
}

export default PlayerSummaryCard