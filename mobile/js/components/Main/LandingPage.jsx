import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

class LandingPage extends Component {
    render() {
        return (
            <View>
            </View>
        )
    }
}

function mapStoreToProps(store) {
    return {
      token: store.login.token || store.register.token
    }
  }
  
export default connect(mapStoreToProps)(LandingPage);
