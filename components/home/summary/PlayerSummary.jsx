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
import { teams } from '../../../teams/teams'
import useFetch from "../../../hook/useFetch";


const PlayerSummary = () => {
  var randomnumber = Math.floor(Math.random() * (teams.length));  
  const router = useRouter();
  console.log(randomnumber);
  const {data,isLoading,error} = useFetch('players/team',{name: teams[randomnumber]});


  const handleNavigate = (item) => {

  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Random Players</Text>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size='large' color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          data?.map((item) => (<PlayerSummaryCard item = {item} key={`nearby-job-${item?.id}`} handleNavigate={() => router.push(`/player-details/${item.id}`)}/>))
        )}
      </View>
    </View>
  );
};

export default PlayerSummary;