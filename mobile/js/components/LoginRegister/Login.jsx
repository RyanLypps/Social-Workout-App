import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextInput, Text, View, TouchableOpacity } from 'react-native';
import { login } from '../../../styles/Styles';
import { 
  handleLoginEmail,
  handleLoginPassword,
  handleLoginSubmit
 } from './loginRegisterActions';

class Login extends Component {
  
  handleEmail = text => {
    const { dispatch } = this.props;
    dispatch(handleLoginEmail(text))
  }

  handlePassword = text => {
    const { dispatch } = this.props;
    dispatch(handleLoginPassword(text))
  }

  handleSubmit = () => {
    const { dispatch } = this.props;
    dispatch(handleLoginSubmit(this.props.loginEmail, this.props.loginPassword))
  }

  render() {
    return (
      <View style={login.container}>
        <View style={{paddingBottom: 75}}>
          <Text style={login.header}>Sign In</Text>
        </View>
        <TextInput
          style={login.input}
          placeholder="Enter Username"
          placeholderTextColor='white'
          onChangeText={text => this.handleEmail(text)}
        />
        <TextInput
          style={login.input}
          placeholder="Enter Password"
          placeholderTextColor='white'
          onChangeText={text => this.handlePassword(text)}
        />
        <TouchableOpacity
          style={login.button}
          onPress={this.handleSubmit}
        >
          <Text style={login.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={login.button}>
          <Text style={login.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

function mapStoreToProps(store) {
  return {
    loginEmail: store.loginRegister.loginEmail,
    loginPassword: store.loginRegister.loginPassword,
    success: store.loginRegister.success
  }
}

export default connect(mapStoreToProps)(Login);
