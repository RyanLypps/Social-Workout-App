import React, { Component } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { gymList } from '../../MockData';
import { landingPage } from '../../../styles/Styles'

class LandingPage extends Component {
  goToSchedulePage = gymId => Actions.schedule({gymId: gymId});
  gymList() {
    return (
      gymList.results.map((gym, index) => {
        return (
          <TouchableOpacity
          onPress={() => this.goToSchedulePage(gym.place_id)}
          key={index+1}
          >
            <View key={index} style={{ flexDirection: 'row', flex: 1, borderTopColor: 'white', borderWidth: .5 }}>
              <Image style={landingPage.photo} source={require('../../../assets/gymPic.png')} />
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 25, alignSelf: 'center' }}>{gym.name && gym.name.length > 21 ? gym.name.slice(0, 21) + '...' : gym.name}</Text>
                <Text style={{ fontSize: 15, alignSelf: 'center' }}>{gym.vicinity}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )
      })
    )
  }

  render() {
    return (
      <ScrollView style={landingPage.container} scrollEnabled={true}>
        <View style={{ flex: 1 }}>{this.gymList()}</View>
      </ScrollView>
    )
  }
}

function mapStoreToProps(store) {
  return {
    token: store.login.token || store.register.token,
  }
}

export default connect(mapStoreToProps)(LandingPage);
