import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Image, TouchableOpacity, View } from 'react-native'
import { Stack, useRouter, useSearchParams } from 'expo-router'
import { Text, SafeAreaView } from 'react-native'
import { checkNullName } from '../../utils'
import axios from 'axios'

import { ScreenHeaderBtn, PlayerSummaryCard } from '../../components'
import { COLORS, icons, SIZES } from '../../constants'
import styles from '../../styles/search'

import useFetch from '../../hook/useFetch'


const PlayerSearch = () => {
    const params = useSearchParams();
    const router = useRouter()

    const [searchResult, setSearchResult] = useState([]);
    const [searchLoader, setSearchLoader] = useState(false);
    const [searchError, setSearchError] = useState(null);
    const [page, setPage] = useState(1);

    const {data} = useFetch(`players/${params.type}`,{firstname: params.id, name: params.id});
    const {data1} = useFetch('players/lastname',{lastname: params.id});

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.secondary }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.primary },
                    headerShadowVisible: false,
                    headerTitle: "",
                }}
            />

            <FlatList
                data={(data[0] === undefined) ? data1: data}
                renderItem={({ item }) => (
                    <PlayerSummaryCard
                        item={item}
                        handleNavigate={() => router.push(`/player-details/${item.id}`)}
                    />
                )}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ padding: SIZES.medium, rowGap: SIZES.medium }}
                ListHeaderComponent={() => (
                    <>
                        <View style={styles.container}>
                            <Text style={styles.searchTitle}>Showing Results For "{params.id}"</Text>
                            <Text style={styles.noOfSearchedJobs}>{data.size}</Text>
                        </View>
                        <View style={styles.loaderContainer}>
                            {searchLoader ? (
                                <ActivityIndicator size='large' color={COLORS.primary} />
                            ) : searchError && (
                                <Text>Oops something went wrong</Text>
                            )}
                        </View>
                    </>
                )}
            />
        </SafeAreaView>
    )
}

export default PlayerSearch