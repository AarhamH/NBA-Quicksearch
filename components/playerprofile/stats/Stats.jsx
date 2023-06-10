import {useState} from 'react'
import { View, Text, SafeAreaView, FlatList, Image } from 'react-native'

import styles from './stats.style'

function parseStat(variable){
  var parseVar = Object.keys(variable)[0];
  parseVar = parseVar.slice(6);

  return parseVar;
}
const Stats = ({title,playerPPG,playerREB,playerAST,playerBLK,playerTOV,player3PT,playerFT,playerFG}) => {
  const array = [playerPPG,playerREB,playerAST,playerBLK,playerTOV,player3PT,playerFT,playerFG]  
  var mmm = "playerFG"
  console.log(mmm.slice(6))

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={array}
        renderItem={({ item }) => (
          <View style={{ flex: 1, flexDirection: 'column', margin: 3 }}>
            <Text>PPG:{item}</Text>
          </View>
        )}
        //Setting the number of column
        numColumns={4}
      />
    </SafeAreaView>
  )
}

export default Stats