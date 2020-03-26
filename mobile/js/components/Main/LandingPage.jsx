import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { connect } from 'react-redux';
import { gymList } from '../../MockData';
import { landingPage } from '../../../styles/Styles'


class LandingPage extends Component {

  gymList() {
    return (
      gymList.results.map(gym => {
        return (
          <View>
            <Text>{gym.name}</Text>
            <Text>{gym.vicinity}</Text>
            <Image style = {{height: 200, width: 250, resizeMode : 'stretch'}} source={require('../../../assets/gymPic.png' )}/>
          </View>
        )
      })
    )
  }

  render() {
    return (
      <ScrollView style={landingPage.container}>
        <View>{this.gymList()}</View>
      </ScrollView>
    )
  }
}

function mapStoreToProps(store) {
  return {
    token: store.login.token || store.register.token
  }
}

export default connect(mapStoreToProps)(LandingPage);