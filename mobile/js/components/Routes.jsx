import React, { Component } from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';
import Login from './Login/Login';
import LandingPage from './Main/LandingPage'
import Register from './Register/Register'
import ScheduleDetails from './ScheduleDetails/ScheduleDetails'
import Schedule from './Schedule/Schedule'

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Stack key='root'>
          <Scene key='login' component={Login} initial={true} hideNavBar={true} />
          <Scene key='register' component={Register} hideNavBar={true} />
          <Scene key='landingPage' component ={LandingPage} hideNavBar={true} />
          <Scene key='schedule' component ={Schedule} hideNavBar={true} />
          <Scene key='scheduleDetails' component ={ScheduleDetails} hideNavBar={true} />
        </Stack>
      </Router>
    )
  }
}
