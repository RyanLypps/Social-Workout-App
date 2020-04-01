import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Modal } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import { schedulePage } from '../../../styles/Styles'
import Icon from 'react-native-vector-icons/FontAwesome'
import moment from 'moment'
import { connect } from 'react-redux';
import {
  handleShowModal,
  levelOfExp
} from './scheduleActions';

const hours = [];
var start = moment().startOf('week');
let week = [];

class Schedule extends Component {

  showModal() {
    const { dispatch, showModal } = this.props;
    dispatch(handleShowModal(showModal));
  }
  levelOfExp(value) {
    const { dispatch } = this.props;
    dispatch(levelOfExp(value));
  }

  hoursOfDay() {
    for (let i = 0; i < 8; i++) {
      week.push(moment(start).add(i, 'd'))
    }
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

  render() {
    this.hoursOfDay();
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
                <Dropdown
                  label='Levels of Experience'
                  value={'Select your level'}
                  data={this.props.data}
                  pickerStyle={{ borderBottomColor: 'transparent', borderWidth: 2 }}
                  containerStyle={{ width: 200 }}
                  onChangeText={value => this.levelOfExp(value)}
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
                  onPress={() => this.showModal()}
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
    data: store.schedule.data,
    levelOfExpValue: store.schedule.levelOfExpValue
  }
}

export default connect(mapStoreToProps)(Schedule);
