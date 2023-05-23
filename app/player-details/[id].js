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
                         playerBirthday = {data[0].dateOfBirth}
                         playerAge = {data[0].age}
                         playerHeight = {data[0].height}
                         playerWeight = {data[0].weight}
                         playerTeam = {data[0].team}/>
            case "Statistics":
                break;
            default:
                break;
        }
    }

    const onRefresh = () => {}



    const {data,isLoading,error} = useFetch('players/team',{name: 'Lakers'});
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
                    {isLoading ? (<ActivityIndicator size='large' color={COLORS.primary}/>) : error ? (<Text>There Was An Error</Text>) : data.length === 0 ? (<Text>No Data</Text>) : 
                    (<View style={{padding: SIZES.medium, paddingBottom: 100}}>
                        <PlayerGeneral
                            playerHeadShot = {data[0].headShotUrl}
                            playerFirstName={data[0].firstName}
                            playerLastName={data[0].lastName}
                            playerPosition = {data[0].position}
                            playerJersey = {data[0].jerseyNumber}

                        /> 

                        <Tabs
                            tabs={tabs}
                            activeTab = {activeTab}
                            setActiveTab = {setActiveTab}
                        />

                        {displayTabContent()}
                    </View>)} 
                </ScrollView>
            </>
        </SafeAreaView>
    )
}

export default PlayerDetails    