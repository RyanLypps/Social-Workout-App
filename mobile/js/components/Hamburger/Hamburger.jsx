import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, Button, Modal } from 'react-native';
import { Actions } from 'react-native-router-flux'
import Menu from '../../../assets/Menu.png';
import { connect } from 'react-redux';

class Hamburger extends Component {
  constructor() {
    super();
    this.state = {
      toggle: false
    }
  }

  toggleHamburger(toggle) {
    this.setState({ toggle: !toggle });
  }
  goToInbox = () => Actions.inbox();

  render() {
    return (
      <View style={{ backgroundColor: '#3282b8', top: -60 }}>
        <TouchableOpacity
          onPress={() => this.toggleHamburger(this.state.toggle)}>
          <Image style={{ height: 50, width: 50 }} source={Menu} />
        </TouchableOpacity>
        <Modal
          animationType='fade'
          presentationStyle='overFullScreen'
          transparent={true}
          visible={this.state.toggle}
        >
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ backgroundColor: 'white', height: '100%', width: '40%' }}>
              <TouchableOpacity
              style={{top: 20}}
                onPress={() => this.toggleHamburger(this.state.toggle)}
              >
                <Image style={{ height: 50, width: 50, marginTop: 20, marginBottom: 20 }} source={Menu} />
              </TouchableOpacity>
              <View style={{ flex: 1, flexDirection: 'Column' }}>
                <TouchableOpacity style={{marginBottom: 20, marginLeft: 50}}>
                  <Text>Logout</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginBottom: 20, marginLeft: 50}}>
                  <Text>Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginBottom: 20, marginLeft: 50}} onPress={() => {this.goToInbox(); this.toggleHamburger(this.state.toggle)}}>
                  <Text>Inbox</Text>
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => this.toggleHamburger(this.state.toggle)}
              style={{ hight: '100%', width: '60%' }}>
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
  }
}

export default connect(mapStoreToProps)(Hamburger);
