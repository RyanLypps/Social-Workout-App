import React, { Component } from 'react';
import { View, Text, ScrollView, Image, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import { gymList } from '../../MockData';
import { landingPage } from '../../../styles/Styles'


class LandingPage extends Component {

  gymList() {
    return (
      gymList.results.map((gym,index) => {
        return (
            <View key={index}style={{flexDirection: 'row', flex: 1, borderTopColor: 'white', borderWidth: .5}}>
            <Image style={landingPage.photo} source={require('../../../assets/gymPic.png')} />
            <View style={{flex: 1}}>
            <Text style={{fontSize: 25, alignSelf:'center'}}>{gym.name && gym.name.length > 21 ? gym.name.slice(0, 21) + '...' : gym.name}</Text>
            <Text style={{fontSize: 15, alignSelf:'center'}}>{gym.vicinity}</Text>
            </View>
            </View>
        )
      })
    )
  }

  render() {
    return (
      <ScrollView style={landingPage.container} scrollEnabled={true}>
        <View style={{flex:1}}>{this.gymList()}</View>
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