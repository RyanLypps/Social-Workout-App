import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

class LandingPage extends Component {
    render() {
        console.log(this.props)
        return (
            <View></View>
        )
    }
}

function mapStoreToProps(store) {
    return {
      token: store.loginRegister.token
    }
  }
  
export default connect(mapStoreToProps)(LandingPage);
