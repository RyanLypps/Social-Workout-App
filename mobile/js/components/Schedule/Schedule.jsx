import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Modal } from 'react-native';
import { schedulePage } from '../../../styles/Styles'
import Icon from 'react-native-vector-icons/FontAwesome'
import moment from 'moment'
import { connect } from 'react-redux';
import {
  handleModalVisabilityShow,
  handleModalVisabilityHide
} from './scheduleActions';

const hours = [];
var start = moment().startOf('week');
let week = [];

class Schedule extends Component {

  handleModalVisabilityShow() {
    const { dispatch } = this.props;
    dispatch(handleModalVisabilityShow());
  }

  handleModalVisabilityHide() {
    const { dispatch } = this.props;
    dispatch(handleModalVisabilityHide());
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
    console.log(this.props.modalVisable);

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
              presentationStyle={'fullScreen'}
              animationType="slide"
              transparent={false}
              visible={this.props.modalVisable}
            >
              <View style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 22,
                backgroundColor: '#3282b8'
              }}>
              <Text>Hello!</Text>
              <TouchableOpacity
                onPress={() => this.handleModalVisabilityHide()}
              >
                <Text style={{color: 'black'}}>Schedule</Text>
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
                  onPress={() => this.handleModalVisabilityShow()}
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
    modalVisable: store.schedule.modalVisable
  }
}

export default connect(mapStoreToProps)(Schedule);