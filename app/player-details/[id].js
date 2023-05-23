import { Text, View, SafeAreaView, ScrollView, ActivityIndicatorBase, RefreshControl } from 'react-native'
import { Stack, useRouter, useSearchParams } from 'expo-router'
import { useCallback, useState } from 'react'

import { Company, About, Footer, Specifics, Tabs, ScreenHeaderBtn } from '../../components'
import {COLORS, icons, SIZES} from '../../constants'
import useFetch from '../../hook/useFetch'

const PlayerDetails = () => {

    const params = useSearchParams();
    const router = useRouter();

    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = () => {}

    const { data, isLoading, error, refetch } = useFetch(`players/${params.id}`, {})
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
            <Stack.Screen options={{headerStyle: {backgroundColor: COLORS.lightWhite}, headerShadowVisible: false, headerBackVisible: false,
             headerLeft: () => (
                <ScreenHeaderBtn iconUrl={icons.left} dimension='60%' handlePress={() => router.back()}/>
            ),
            headerTitle: ''
            }}/>

            <>
                <ScrollView showsVerticalScrollIndicator={false} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}>

                </ScrollView>
            </>
        </SafeAreaView>
    )
}

export default PlayerDetails    