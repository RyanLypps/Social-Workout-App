import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Modal } from 'react-native';
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

class Schedule extends Component {
  componentWillMount() {
    this.hoursOfDay();
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

  startTime(hour) {
    const { dispatch } = this.props;
    dispatch(handleStartTime(hour));
  }

  // endTime() {
  //   let endTimeArr = [];
  //   let endTime = this.props.modalInfo.startTime == undefined ? undefined : this.props.modalInfo.startTime.match(/\d+/g).map(Number);
  //   let amPm = this.props.modalInfo.startTime == undefined ? undefined : this.props.modalInfo.startTime.split('').find(e => e == 'a' || e == 'p' ? e : '');
  //   for (let i = 0; i < 6; i++) {
  //     if (endTime > 11) {
  //       if (endTime ==  12) {
  //         endTime++
  //         continue;
  //       }
  //       if (endTime == 13) {
  //         endTimeArr.push(1);
  //         endTime++
  //         continue;
  //       }
  //       if (endTime == 14) {
  //         endTimeArr.push(2);
  //         endTime++;
  //         continue;
  //       }
  //       if (endTime == 15) {
  //         endTimeArr.push(3);
  //         endTime++;
  //         continue;
  //       }
  //       if (endTime == 16) {
  //         endTimeArr.push(4);
  //         endTime++;
  //         continue;
  //       }
  //       if (endTime == 17) {
  //         endTimeArr.push(5);
  //         endTime++;
  //         continue;
  //       }
  //       if (endTime == 18) {
  //         endTimeArr.push(6);
  //         endTime++;
  //         continue;
  //       }
  //     } else {
  //       endTime++;
  //       endTimeArr.push(endTime);
  //     }
  //   }
  //   if(amPm == 'a') {
  //    let tempStor = endTimeArr.join('am ') + 'am';
  //     console.log(tempStor);

  //   } else {
  //     let tempStor1 = endTimeArr.join('pm ') + 'pm';
  //     console.log(tempStor1);
  //   }
  // }

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

  render() {
    // console.log(this.props.modalInfo);
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
                  value={'Select End Time'}
                  // data={this.endTime()}
                  pickerStyle={{ borderBottomColor: 'transparent', borderWidth: 2 }}
                  containerStyle={{ width: 200 }}
                  onChangeText={value => this.personalExperience(value)}
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
                <Text>Hello!</Text>
                <TouchableOpacity
                  onPress={() => this.showModal()}
                >
                  <Text style={{ color: 'black' }}>Schedule</Text>
                </TouchableOpacity>
              </View>
            </Modal>
          </View>
          {hours.map((hour, index) => {
            return (
              <View key={index} style={schedulePage.textView}>
                <Text style={schedulePage.text}>{hour}</Text>
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
  }
}

export default connect(mapStoreToProps)(Schedule);
