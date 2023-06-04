import { Text, View, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl } from 'react-native'
import { Stack, useRouter, useSearchParams } from 'expo-router'
import { useCallback, useState } from 'react'

import { PlayerGeneral, About, Footer, Specifics, Tabs, ScreenHeaderBtn } from '../../components'
import {COLORS, icons, SIZES} from '../../constants'
import useFetch from '../../hook/useFetch'

const tabs = ["About", "Career Statistics"];


const PlayerDetails = () => {

    const params = useSearchParams();
    const router = useRouter();

    const [refreshing, setRefreshing] = useState(false);
    const [activeTab, setActiveTab] = useState(tabs[0]);
    const displayTabContent = () => {
        switch (activeTab)
        {
            case "About":  
                return (<About 
                         title=' About: ' 
                         playerBirthday = {data.dateOfBirth}
                         playerAge = {data.age}
                         playerHeight = {data.height}
                         playerWeight = {data.weight}
                         playerTeam = {data.team}/>);
            case "Career Statistics":
                return (<Specifics 
                title=' Career Statistics: ' 
                playerPPG = {data.careerPoints}
                playerREB = {data.careerRebounds}
                playerAST = {data.carrerAssists}
                playerBLK = {data.careerBlocks}
                playerTOV = {data.careerTurnovers}
                player3PT = {data.careerPercentageThree}
                playerFT = {data.careerPercentageFreethrow}
                playerFG = {data.careerPercentageFieldGoal}/>);
            default:
                return null;
        }
    }

    const onRefresh = () => {}
    const {data,isLoading,error} = useFetch(`players/${params.id}`,{});

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.secondary }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.primary },
                    headerShadowVisible: false,
                    headerTitle: "",
                }}
            />

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

            <Footer
                dateLastUpdated={data.dateLastUpdated}
                playerFirstName={data.firstName}
                playerLastName={data.lastName}/>


            </>
        </SafeAreaView>
    )
}

export default PlayerDetails    