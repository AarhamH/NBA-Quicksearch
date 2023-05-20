import { useRouter } from "expo-router";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

import styles from "./nearbyjobs.style";
import { COLORS } from "../../../constants";
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard";
import useFetch from "../../../hook/useFetch";


const Nearbyjobs = () => {
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
          data?.map((item) => (<NearbyJobCard item = {item} key={`nearby-job-${item?.id}`} handleNavigate={() => router.push(`/players/${item.id}`)}/>))
        )}
      </View>
    </View>
  );
};

export default Nearbyjobs;