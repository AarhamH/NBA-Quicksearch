import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './popularjobcard.style'

const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {
  return (
    <Text>{item.name}</Text>
  )
}

export default PopularJobCard