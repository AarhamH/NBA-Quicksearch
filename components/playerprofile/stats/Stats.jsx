import {useState} from 'react'
import { View, Text, SafeAreaView, FlatList, Image, Dimensions } from 'react-native'

import styles from './stats.style'

function parseStat(variable){
  var parseVar = Object.keys({variable})[0];
  parseVar = parseVar.slice(6);

  return parseVar;
}
const Stats = ({title,playerPPG,playerREB,playerAST,playerBLK,playerTOV,player3PT,playerFT,playerFG}) => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43]
      }
    ]
  };

  const vals = [playerPPG,playerREB,playerAST,playerBLK,playerTOV,player3PT,playerFT,playerFG]
  const types = ['PPG','REB','AST','BLK','TOV','3PT','FT','FG']
  var jjjj = []
  for(let i=0;i<vals.length;i++)
  {
    var obj = {
      type:types[i],
      stat:vals[i]
    }

    jjjj.push(obj);
  }


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={jjjj}
        renderItem={({ item }) => (
          <View style={{ flex: 1, flexDirection: 'column', margin: 3 }}>
            <Text style={styles.typeText}>{item.type}:</Text>
            <Text style={styles.pointText}>{item.stat}</Text>
          </View>
        )}
        //Setting the number of column
        numColumns={4}
        style={styles.pointsContainer}
      />
    </SafeAreaView>
  )
}

export default Stats