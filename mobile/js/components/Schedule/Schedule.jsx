import React from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { schedulePage } from '../../../styles/Styles'
import Icon from 'react-native-vector-icons/FontAwesome'
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
      if (i < 12) {
        hours.push(i + 'am');
      }
      if (i == 12) {
        hours.push(i + 'pm')
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
      <ScrollView scrollEnabled={true}>
        {hours.map((hour, index) => {
          return (
            <View key={index} style={schedulePage.textView}>
              <Text style={schedulePage.text}>{hour}</Text>
              <Icon 
              name='user'
              size={50} 
              color="black"
              />
                <TouchableOpacity style={schedulePage.button}>
                  <Text style={schedulePage.buttonText}>Schedule</Text>
                </TouchableOpacity>
            </View>
          )
        })}
      </ScrollView>
    </View>
  )
}
