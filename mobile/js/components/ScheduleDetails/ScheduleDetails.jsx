import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { scheduleDetails } from '../../../styles/Styles'

class ScheduleDetails extends Component {

  workouts() {
    return this.props.workoutInfo.map(a => a.gymId == this.props.gymId && a.startTime == this.props.hour ?
      <View style={scheduleDetails.textView}>
        <Text style={scheduleDetails.text}>Name {a.username}</Text>
        <Text style={scheduleDetails.text}>Desc: {a.workoutDescription} Time Spent: {a.hoursSpent}</Text>
    <Text style={scheduleDetails.text}>Preferred Experience: {a.partnerExperience}</Text>
      </View>
      :
      <View></View>
    );
  }

  render() {
    return (
      <View style={scheduleDetails.container} >
        <ScrollView>{this.workouts()}</ScrollView> 
      </View>
    )
  }
}

function mapStoreToProps(store) {
  return {
    token: store.login.token || store.register.token,
    workoutInfo: store.schedule.workoutInfo,
    customerInfo: store.login.customerInfo || store.register.customerInfo
  }
}

export default connect(mapStoreToProps)(ScheduleDetails);
