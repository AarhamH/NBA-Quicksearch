import { Text, View, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl } from 'react-native'
import { Stack, useRouter, useSearchParams } from 'expo-router'
import { useCallback, useState } from 'react'

import { PlayerGeneral, About, Footer, Specifics, Tabs, ScreenHeaderBtn } from '../../components'
import {COLORS, icons, SIZES} from '../../constants'
import useFetch from '../../hook/useFetch'

const PlayerDetails = () => {

    const params = useSearchParams();
    const router = useRouter();
    const tabs = ["About", "Statistics"]

    const [refreshing, setRefreshing] = useState(false);
    const [activeTab, setActiveTab] = useState(tabs[0]);
    const displayTabContent = () => {
        switch (activeTab)
        {
            case "About":   
                return <Specifics 
                         title='About' 
                         playerBirthday = {data.dateOfBirth}
                         playerAge = {data.age}
                         playerHeight = {data.height}
                         playerWeight = {data.weight}
                         playerTeam = {data.team}/>
            case "Statistics":
                break;
            default:
                break;
        }
    }

    const onRefresh = () => {}


    var id = params.id;
    const {data,isLoading,error} = useFetch(`players/${id}`,{});
    console.log(params.id)
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
            <Stack.Screen options={{headerStyle: {backgroundColor: COLORS.lightWhite}, headerShadowVisible: false, headerBackVisible: false,
             headerLeft: () => (
                <ScreenHeaderBtn iconUrl={icons.left} dimension='60%' handlePress={() => router.back()}/>
            ),
            headerTitle: ''
            }}/>

            <>
            <ScrollView showsVerticalScrollIndicator={false}
                refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            >
            {isLoading ? (
                <ActivityIndicator size='large' color={COLORS.primary} />) : error ? (<Text>Something went wrong</Text>) : data.length === 0 ? (<Text>No data available</Text>) : (
                <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
                    <PlayerGeneral
                        playerHeadShot={data.headShotUrl}
                        playerFirstName={data.firstName}
                        playerLastName={data.lastName}
                        playerPosition={data.position}
                        playerJersey={data.jerseyNumber}
                    />

                    <Tabs
                        tabs={tabs}
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                    />

                    {displayTabContent()}
                </View>
            )}
            </ScrollView>
            </>
        </SafeAreaView>
    )
}

export default PlayerDetails    