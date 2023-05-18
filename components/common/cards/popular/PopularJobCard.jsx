import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './popularjobcard.style'

const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {
  return (
    <TouchableOpacity style={styles.container(selectedJob, item)} onPress={handleCardPress()}>

      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image source={{uri:item.headShotUrl}} resizeMode='contain' style={styles.logoImage}/>
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>{item.firstName} {item.lastName}</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob,item)}> a </Text>
        <Text style={styles.location}>a</Text>  
      </View>
    </TouchableOpacity>
  )
}

export default PopularJobCard