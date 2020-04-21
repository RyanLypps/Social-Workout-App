import React, { Component } from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity, Modal, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { scheduleDetails } from '../../../styles/Styles'
import faker from 'faker';
import { 
  handleShowDetailModal,
  handleCurrentWorkoutInfoUser,
  handleMessageInput
 } from './scheduledetailsActions';

class ScheduleDetails extends Component {

  showDetailModal(username, customerId) {
    const { dispatch, showModal } = this.props;
    dispatch(handleCurrentWorkoutInfoUser(username, customerId, showModal));
  }

  closeDetailModal() {
    const { dispatch, showModal } = this.props;
    dispatch(handleShowDetailModal(showModal))
  }
  
  messageInput(message) {
    const { dispatch } = this.props;
    dispatch(handleMessageInput(message))
  }

  workouts() {
    return this.props.workoutInfo.map(a => a.gymId == this.props.gymId && a.startTime == this.props.hour ?
      <View style={scheduleDetails.textView}>
        <Image style={{ height: 40, width: 40 }} source={{ uri: faker.image.avatar() }} />
        <Text style={scheduleDetails.text}>Name {a.username}</Text>
        <Text style={scheduleDetails.text}>Desc: {a.workoutDescription} Time Spent: {a.hoursSpent}</Text>
        <Text style={scheduleDetails.text}>Preferred Experience: {a.partnerExperience}</Text>
        <Text style={scheduleDetails.text}>Personal Experience: {a.personalExperience}</Text>
        <TouchableOpacity
          style={scheduleDetails.button}
          onPress={() => this.showDetailModal(a.username, a.customerId)}
        >
          <Text style={scheduleDetails.buttonText}>Message</Text>
        </TouchableOpacity>
      </View>
      :
      <View></View>
    );
  }

  render() {
    console.log(this.props.workoutInfoUser)
    return (
      <View style={scheduleDetails.container} >
        <ScrollView>{this.workouts()}</ScrollView>
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
            <View><Text>{this.props.workoutInfoUser.username}</Text></View>
            <TextInput
              style={{ borderWidth: 1, borderColor: 'black', height: 200, width: 265, textAlign: 'center' }}
              placeholder="Say Hello to Your Future workout buddy"
              placeholderTextColor='white'
              onChangeText={message => this.messageInput(message)}
            />
            <TouchableOpacity
              onPress={() => this.closeDetailModal()}
            >
              <Text style={{ color: 'black' }}>Send</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.closeDetailModal()}
            >
              <Text style={{ color: 'black' }}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    )
  }
}

function mapStoreToProps(store) {
  return {
    token: store.login.token || store.register.token,
    workoutInfo: store.schedule.workoutInfo,
    customerInfo: store.login.customerInfo || store.register.customerInfo,
    showModal: store.scheduleDetails.showModal,
    workoutInfoUser: store.scheduleDetails.workoutInfoUser,
    message: store.scheduleDetails.message
  }
}

export default connect(mapStoreToProps)(ScheduleDetails);
