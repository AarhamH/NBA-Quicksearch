import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import { useRouter } from 'expo-router'

import styles from './welcome.style'
import { COLORS, icons, SIZES } from '../../../constants'

const conferences = ["Atlantic", "Central", "Southeast", "Northwest", "Pacific", "Southwest"];

const Welcome = () => {
  const router = useRouter();
  const [activeConference, setActiveConference] = useState("Atlantic")
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello, User</Text>
        <Text style={styles.welcomeMessage}>Begin exploring NBA Stats!</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=''
            onChange={() => {}}
            placeholder="Search for NBA Player"
            placeholderTextColor={COLORS.gray2}
            />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image 
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}/>
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={conferences}
          renderItem={({ item }) => (
            <TouchableOpacity s
              style={styles.tab(activeConference, item)}
              onPress={() => {
                setActiveConference(item);
                router.push(`/search/${item}`);
              }}>
                <Text style={styles.tabText(activeConference, item)}>{ item }</Text>
            </TouchableOpacity>
          )} 
          keyExtractor={ item => item}  
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
          />
      </View>
    </View>
  )
}

export default Welcome