import { useCallback , useState } from 'react'
import { Text, View, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl } from 'react-native'
import { Stack, useRouter, useSearchParams } from 'expo-router'
import { Company, About, Footer, Tabs, ScreenHeaderBtn, Specifics} from '../../components';
import {COLORS, icons, SIZES} from '../../constants'
import useFetch from '../../hook/useFetch';

const PlayerDetails = () => {
    const params = useSearchParams();
    const router = useRouter();

    const { data, isLoading, error, refetch } = useFetch(`players/${params.id}`,{});
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite }}>
            
            <Stack.Screen options={{headerStyle:{backgroundColor: COLORS.lightWhite}, headerShadowVisible: false}}>
                
            </Stack.Screen>
        </SafeAreaView>
    )
}

export default PlayerDetails    