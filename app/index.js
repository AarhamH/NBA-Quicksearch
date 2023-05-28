import { View, ScrollView, SafeAreaView } from 'react-native'
import { useState } from 'react';
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, images, SIZ, SIZES } from '../constants';
import { PlayerSummary, ScreenHeaderBtn, Welcome} from '../components'

const Home = () => {

    const router = useRouter();
    const [searchTerm,setSearchTerm] = useState("");
    return(
        <SafeAreaView style={{ flex:5, backgroundColor: COLORS.lightWhite}}>
            <Stack.Screen options={{
                headerStyle: { backgroundColor: COLORS.primary },
                headerShadowVisible: true,
                headerLargeStyle: true,
                headerTitle:""
            }}/>

            <ScrollView showsVerticalScrollIndicator={ false }>
                <View                    
                    style={{
                        flex: 1,
                        padding: SIZES.medium
                    }}
                    >
                    <Welcome
                        searchTerm = {searchTerm}
                        setSearchTerm = {setSearchTerm}
                        handleClick = {() => {
                            if(searchTerm)
                            {
                                router.push(`/search/${searchTerm}`)
                            }
                        }}
                    />
                    <PlayerSummary/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home; 