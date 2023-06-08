import { useRouter } from "expo-router";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

import styles from "./playersummary.style";
import { COLORS } from "../../../constants";
import PlayerSummaryCard from "../../common/cards/summarycard/PlayerSummaryCard";
import { createTeamHash } from '../../../teams/teams'
import useFetch from "../../../hook/useFetch";
import { useState } from "react";


const PlayerSummary = () => {
  const router = useRouter();
  const teams = new Map();
  createTeamHash(teams);
  const yass = []
  
  
  for(let i=0; i<teams.size; i++)
  {
    yass.push(Array.from(teams)[i][0])
  }

  var randomnumber = Math.floor(Math.random() * (yass.length));  
  var randomnumber2 = Math.floor(Math.random() * (yass.length));  


  const {data,isLoading,error} = useFetch('players/team',{name: yass[randomnumber]});
  var array = data.slice(4,9);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Here are some players from </Text>
        <Text style={styles.headerTitleTeam}>{isLoading?"---":array[0]?.team} </Text>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size='large' color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          array?.map((item) => (<PlayerSummaryCard item = {item} key={`nearby-job-${item?.id}`} handleNavigate={() => router.push(`/player-details/${item.id}`)}/>))
        )}
      </View>
    </View>
  );
};

export default PlayerSummary;