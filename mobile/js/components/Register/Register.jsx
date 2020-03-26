import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { register } from '../../../styles/Styles';
import { connect } from 'react-redux';
import {
  handleUsername,
  handleRegisterEmail,
  handleRegisterPassword,
  handleConfirmedRegisterPassword,
  handleRegisterSubmit
} from './registerActions';

class Register extends Component {

  handleUsername = text => {
    const { dispatch } = this.props;
    dispatch(handleUsername(text));
  }

  handleEmail = text => {
    const { dispatch } = this.props;
    dispatch(handleRegisterEmail(text));
  }

  handlePassword = text => {
    const { dispatch } = this.props;
    dispatch(handleRegisterPassword(text));
  }

  handleConfirmedPassword = text => {
    const { dispatch } = this.props;
    dispatch(handleConfirmedRegisterPassword(text));
  }

  handleSubmit = () => {
    const { dispatch } = this.props;
    if(this.props.confirmedRegisterPassword != this.props.registerPassword){
      return;
    } else {
      dispatch(handleRegisterSubmit(this.props.username, this.props.registerEmail, this.props.registerPassword));
    }
  }

  render() {
    return (
      <View style={register.container}>
        <View style={{ paddingBottom: 75 }}>
          <Text style={register.header}>Sign In</Text>
        </View>
        <TextInput
          style={register.input}
          placeholder="Enter Username"
          placeholderTextColor='white'
          onChangeText={text => this.handleUsername(text)}
        />
        <TextInput
          style={register.input}
          placeholder="Enter Email"
          placeholderTextColor='white'
          onChangeText={text => this.handleEmail(text)}
        />
        <TextInput
          style={register.input}
          placeholder="Enter Password"
          placeholderTextColor='white'
          onChangeText={text => this.handlePassword(text)}
        />
        <TextInput
          style={register.input}
          placeholder="Confirm Password"
          placeholderTextColor='white'
          onChangeText={text => this.handleConfirmedPassword(text)}
        />
        <TouchableOpacity
          style={register.button}
          onPress={this.handleSubmit}
        >
          <Text style={register.buttonText}>Create User</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

function mapStoreToProps(store) {
    return {
      username: store.register.username,
      registerEmail: store.register.registerEmail,
      registerPassword: store.register.registerPassword,
      confirmedRegisterPassword: store.register.confirmedRegisterPassword,
    }
  }

export default connect(mapStoreToProps)(Register);
