import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './nearbyjobcard.style'

const NearbyJobCard = ({ item, handleNavigate }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>

      <TouchableOpacity style={styles.logoContainer}>
        <Image source={{uri:item.headShotUrl}} resizeMode='contain' style={styles.logImage}/>
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>{item.firstName} {item.lastName}</Text>

      <View style={styles.textContainer}>
        <Text style={styles.jobName}> a </Text>
        <Text style={styles.jobType}>a</Text>  
      </View>
    </TouchableOpacity>
  )
}

export default NearbyJobCard