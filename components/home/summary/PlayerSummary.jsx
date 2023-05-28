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
import useFetch from "../../../hook/useFetch";


const PlayerSummary = () => {
  const router = useRouter();
  const {data,isLoading,error} = useFetch('players/team',{name: 'Lakers'});


  const handleNavigate = (item) => {

  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Random Players</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
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