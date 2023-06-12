import {useState} from 'react'
import { View, Text, SafeAreaView, FlatList, Image, Dimensions } from 'react-native'
import {BarChart} from 'react-native-gifted-charts';

import styles from './stats.style'
import { COLORS, FONT } from '../../../constants';

function parseStat(variable){
  var parseVar = Object.keys({variable})[0];
  parseVar = parseVar.slice(6);

  return parseVar;
}

const renderTitle = () => {

  return(

    <View style={{marginVertical: 30}}>

    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
      }}>

      <View style={{flexDirection: 'row', alignItems: 'center', marginLeft:-40, marginRight:-30}}>

        <View
          style={{
            height: 12,
            width: 12,
            borderRadius: 6,
            backgroundColor: COLORS.yellow,
            marginRight: 8,
          }}
        />

        <Text
          style={{
            width: 70,
            height: 16,
            color: COLORS.gray,
          }}>
          Player Avg
        </Text>
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center', marginLeft:-30}}>
        <View
          style={{
            height: 12,
            width: 12,
            borderRadius: 6,
            backgroundColor: '#ED6665',
            marginRight: 8,
          }}
        />
        <Text
          style={{
            width: 80,
            height: 16,
            color: COLORS.gray,
          }}>
          League Avg
        </Text>
      </View>
    </View>
  </View>
  )
}
const Stats = ({title,playerPPG,playerREB,playerAST,playerBLK,playerTOV,player3PT,playerFT,playerFG}) => {
  const barData = [
    {
      value: player3PT/100,
      label: '3PT',
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: {color: COLORS.gray},
      frontColor: COLORS.yellow,
    },

    {value: 0.35, frontColor: '#ED6665'},
    {
      value: playerFT/100,
      label: 'FT',
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: {color: COLORS.gray},
      frontColor: COLORS.yellow,
    },

    {value: 0.7, frontColor: '#ED6665'},

    {
      value: playerFG/100,
      label: 'FG',
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: {color: COLORS.gray},
      frontColor: COLORS.yellow,
    },

    {value: 0.5, frontColor: '#ED6665'},
  ];

  
  const vals = [playerPPG,playerREB,playerAST,playerBLK,playerTOV,player3PT,playerFT,playerFG]
  const types = ['PPG','REB','AST','BLK','TOV','3PT','FT','FG']
  var jjjj = []
  var output = []
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
      <View style={{backgroundColor: COLORS.tertiary, paddingBottom: 20,borderRadius: 10,marginLeft:60}}>
        {renderTitle()}
        <BarChart
                  data={barData}
                  barWidth={20}
                  spacing={24} 
                  showFractionalValues={true}               
                  isAnimated
                  roundedBottom={true}
                  roundedTop={true}
                  xAxisThickness={0}
                  yAxisThickness={0}
                  yAxisTextStyle={{color: COLORS.gray}}
                  noOfSections={3}
                  maxValue={1}
          />
          <Text style={{marginVertical:30, fontFamily:FONT.bold, marginLeft:50, color:COLORS.gray}}>Player vs League Avg Shooting %</Text>
      </View>

    </SafeAreaView>
  )
}

export default Stats