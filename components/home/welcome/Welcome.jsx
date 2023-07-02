import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import { useRouter } from 'expo-router'

import styles from './welcome.style'
import { COLORS, icons, SIZES } from '../../../constants'
import { createTeamHash } from '../../../teams/teams'

const Welcome = ({ searchTerm, setSearchTerm, handleClick }) => {
  const router = useRouter();
  const [activeConference, setActiveConference] = useState("Atlanta Hawks")
  const teams = new Map();
  const yass = []
  createTeamHash(teams);

  for(let i=0; i<teams.size; i++)
  {
    yass.push(Array.from(teams)[i][0])
  }

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.greetingMessage}>Welcome to NBA Quicksearch</Text>
        <Text style={styles.welcomeMessage}>Begin exploring NBA Stats!</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            returnKeyType='go'
            onSubmitEditing={handleClick}
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder="Search Player By First Or Last Name"
            placeholderTextColor={COLORS.gray}
            />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image 
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
            />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={yass}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={styles.tab(activeConference, item)}
              onPress={() => {setActiveConference(item);
                              router.push({pathname: `/search/[id]`, params:{id: item, type:'team'}});}}>
                <Image 
                  source={{uri:`https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/${teams.get(item)}.png&h=200&w=200`}}
                  resizeMode='contain'
                  style={styles.logoImage}
                />
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