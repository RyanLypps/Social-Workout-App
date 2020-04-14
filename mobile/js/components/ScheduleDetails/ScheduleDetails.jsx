import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { scheduleDetails } from '../../../styles/Styles'

class ScheduleDetails extends Component {

  workouts() {
    const thisGymWorkouts = this.props.workoutInfo.filter(a => a.gymId == this.props.gymId && a.startTime == this.props.hour);
    return thisGymWorkouts
  }

  render() {
    console.log(this.workouts())
    return (
      <View style={scheduleDetails.container} >
        <Text style={{ textAlign: 'center' }}></Text>
      </View>
    )
  }
}

function mapStoreToProps(store) {
  return {
    token: store.login.token || store.register.token,
    workoutInfo: store.schedule.workoutInfo
  }
}

export default connect(mapStoreToProps)(ScheduleDetails);