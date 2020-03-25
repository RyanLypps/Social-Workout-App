import React, { Component } from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';
import Login from './LoginRegister/Login';
import LandingPage from './Main/LandingPage'

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Stack key='root'>
          <Scene key='login' component={Login} initial={true} hideNavBar={true} />
          <Scene key='landingPage' component ={LandingPage} hideNavBar={true} />
        </Stack>
      </Router>
    )
  }
}
