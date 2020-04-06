import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Modal, TextInput } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import { schedulePage } from '../../../styles/Styles'
import Icon from 'react-native-vector-icons/FontAwesome'
import moment from 'moment'
import { connect } from 'react-redux';
import {
  handleShowModal,
  personalExp,
  partnerExp,
  handleStartTime,
  spentHours,
  workoutDesc, 
  handlePostWorkout,
  handleGetWorkout
} from './scheduleActions';

const hours = [];
var start = moment().startOf('week');
let week = [];
const data = [{
  value: 'Beginner',
}, {
  value: 'Moderate',
}, {
  value: 'High',
}];
let hourData = [{
  value: '1 hour',
}, {
  value: '2 hours',
}, {
  value: '3 hours',
}, {
  value: '4 hours+'
}]

class Schedule extends Component {
  componentWillMount() {
    this.hoursOfDay();
    this.getWorkout();
  }

  showModal() {
    const { dispatch, showModal } = this.props;
    dispatch(handleShowModal(showModal));
  }
  personalExperience(value) {
    const { dispatch } = this.props;
    dispatch(personalExp(value));
  }

  partnerExperience(value) {
    const { dispatch } = this.props;
    dispatch(partnerExp(value));
  }
  hoursSpent(value) {
    const { dispatch } = this.props;
    dispatch(spentHours(value));
  }

  startTime(hour) {
    const { dispatch } = this.props;
    dispatch(handleStartTime(hour));
  }

  workoutDescription = text => {
    const { dispatch } = this.props;
    dispatch(workoutDesc(text));
  }

  postWorkout = () => {
    const { dispatch } = this.props;
    dispatch(handlePostWorkout(this.props.modalInfo));
  }

  getWorkout = () => {
    const { dispatch } = this.props;
    dispatch(handleGetWorkout());
  }

  hoursOfDay() {
    for (let i = 0; i < 8; i++) {
      week.push(moment(start).add(i, 'd'))
    }
    for (let j = 1; j <= 24; j++) {
      if (j < 12) {
        hours.push(j + 'am');
      }
      if (j == 12) {
        hours.push(j + 'pm')
      }
      if (j > 12 && j < 24) {
        hours.push(j % 12 + 'pm');
      }
      if (j == 24) {
        hours.push(12 + 'am');
      }
    }
    return hours;
  }
  counter(index) {
    console.log(index);
    let counter = this.props.workoutInfo.length;
    counter++;
     return counter;

     // index can equal start time and counter++ will occcur for that list item
  }

  render() {
    // console.log(this.props.workoutInfo);
    // console.log('WORKOUT  INFO');
    return (
      <View style={schedulePage.container} >
        <ScrollView scrollEnabled={true}>
          <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 22,
            backgroundColor: '#3282b8'
          }}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={this.props.showModal}
            >
              <View style={{
                flex: 1,
                margin: 50,
                marginTop: 200,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: 'gray'
              }}>

                <Text>Start Time: {this.props.modalInfo.startTime}</Text>
                <Dropdown
                  label='End Time'
                  value={'hours spent at gym today?'}
                  data={hourData}
                  pickerStyle={{ borderBottomColor: 'transparent', borderWidth: 2 }}
                  containerStyle={{ width: 200 }}
                  onChangeText={value => this.hoursSpent(value)}
                />
                <Dropdown
                  label='Personal Experience Level'
                  value={'Select your level'}
                  data={data}
                  pickerStyle={{ borderBottomColor: 'transparent', borderWidth: 2 }}
                  containerStyle={{ width: 200 }}
                  onChangeText={value => this.personalExperience(value)}
                />
                <Dropdown
                  label='Preferred Partner Experience Level'
                  value={'Select your level'}
                  data={data}
                  pickerStyle={{ borderBottomColor: 'transparent', borderWidth: 2 }}
                  containerStyle={{ width: 200 }}
                  onChangeText={value => this.partnerExperience(value)}
                />
                <TextInput
                  style={{borderWidth: 1, borderColor: 'black', height: 200, width: 250, textAlign:'center'}}
                  placeholder="Todays Workout Description"
                  placeholderTextColor='white'
                  onChangeText={text => this.workoutDescription(text)}
                />
                <TouchableOpacity
                  onPress={() =>{ this.showModal(); this.postWorkout()}}
                >
                  <Text style={{ color: 'black' }}>Post</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.showModal()}
                >
                  <Text style={{ color: 'black' }}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </Modal>
          </View>
          {hours.map((hour, index) => {
            return (
              <View key={index} style={schedulePage.textView}>
                <Text style={schedulePage.text}>{hour}</Text>
                <Text style={schedulePage.text}>{this.counter(index)}</Text>
                <Icon
                  name='user'
                  size={50}
                  color="black"
                />
                <TouchableOpacity
                  style={schedulePage.button}
                  onPress={() => { this.showModal(); this.startTime(hour) }}
                >
                  <Text style={schedulePage.buttonText}>Schedule</Text>
                </TouchableOpacity>
              </View>
            )
          })}
        </ScrollView>
      </View>
    )
  }
}

function mapStoreToProps(store) {
  return {
    showModal: store.schedule.showModal,
    token: store.login.token || store.register.token,
    modalInfo: store.schedule.modalInfo,
    workoutInfo: store.schedule.workoutInfo
  }
}

export default connect(mapStoreToProps)(Schedule);
