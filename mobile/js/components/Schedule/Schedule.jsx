import React from 'react'
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { schedulePage } from '../../../styles/Styles'
import moment from 'moment'


export default function Schedule() {
  var start = moment().startOf('week')
  let week = [];
  const hours = [];


  for (let i = 0; i < 8; i++) {
    week.push(moment(start).add(i, 'd'))
  }
  function hoursOfDay() {
    for (let i = 1; i <= 24; i++) {
      if (i < 13) {
        hours.push(i + 'am');
      }
      if (i > 12 && i < 24) {
        hours.push(i % 12 + 'pm');
      }
      if (i == 24) {
        hours.push(12 + 'am');
      }
    }
    return hours
  }
  hoursOfDay()


  return (
    <View style={schedulePage.container}>
      <ScrollView contentContainerStyle={{ flex: 1 }} scrollEnabled={true}>
        {hours.map((hour, index) => {
          return (
            <View key={index} style={{ flexGrow: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
              <Text style={{ flexGrow: 1, justifyContent: 'space-evenly' }}>{hour}</Text>
            </View>
          )
        })}
      </ScrollView>
    </View>
  )
}
