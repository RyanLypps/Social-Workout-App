import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { View, Text, ScrollView, TouchableOpacity, Modal, TextInput } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import { schedulePage } from '../../../styles/Styles'
import Icon from 'react-native-vector-icons/FontAwesome'
import moment from 'moment'
import { connect } from 'react-redux';
import { gymList } from '../../MockData';
import {
  handleShowModal,
  personalExp,
  partnerExp,
  handleStartTime,
  spentHours,
  workoutDesc,
  handlePostWorkout,
  handleGetWorkout,
  handleGymId
} from './scheduleActions';

const hours = [];
let isRunned = 0;
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

  goToScheduleDetailsPage = (gymId, hour) => Actions.scheduleDetails({ gymId: gymId, hour: hour });

  componentDidMount() {
    this.hoursOfDay();
    this.getGymId();
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
    dispatch(handlePostWorkout(this.props.modalInfo, this.props.userId, this.props.customerInfo.username))
  }

  getWorkout = () => {
    const { dispatch } = this.props;
    dispatch(handleGetWorkout());
  }

  getGymId = () => {
    const { dispatch } = this.props;
    dispatch(handleGymId(this.props.gymId));
  }

  hoursOfDay() {
    if (isRunned == 0) {
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
      isRunned++;
      return hours;
    }
    return '';
  }

  counter(hour) {
    let counter = 0;

    for (let i = 0; i < this.props.workoutInfo.length; i++) {
      if (this.props.workoutInfo[i].gymId === this.props.gymId) {
        if (this.props.workoutInfo[i].startTime == hour) {
          counter++;
        }
      }
    }
    return counter;
  }

  render() {
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
                  style={{ borderWidth: 1, borderColor: 'black', height: 200, width: 250, textAlign: 'center' }}
                  placeholder="Todays Workout Description"
                  placeholderTextColor='white'
                  onChangeText={text => this.workoutDescription(text)}
                />
                <TouchableOpacity
                  onPress={() => { this.showModal(); this.postWorkout() }}
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
              <TouchableOpacity
                onPress={() => this.goToScheduleDetailsPage(this.props.gymId, hour)}
                key={index}
              >
                <View style={schedulePage.textView}>
                  <Text style={schedulePage.text}>{hour}</Text>
                  <Icon
                    name='user'
                    size={50}
                    color="black"
                  />
                  <Text style={schedulePage.text}>{this.counter(hour)}</Text>
                  <TouchableOpacity
                    style={schedulePage.button}
                    onPress={() => { this.showModal(); this.startTime(hour) }}
                  >
                    <Text style={schedulePage.buttonText}>Schedule</Text>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
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
    userId: store.login.userId || store.register.userId,
    modalInfo: store.schedule.modalInfo,
    workoutInfo: store.schedule.workoutInfo,
    customerInfo: store.login.customerInfo || store.register.customerInfo,
  }
}

export default connect(mapStoreToProps)(Schedule);
