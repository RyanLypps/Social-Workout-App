import React, { Component } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text, View, Button, TouchableOpacity} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import Schedule from '../Schedule/Schedule';
import LandingPage from '../Main/LandingPage';
import Hamburger from '../../../assets/hamburger.png';

const Drawer = createDrawerNavigator();

export default function Header() {

  return (
    <View style={{ alignSelf: 'center', backgroundColor: 'black'}}>
      <Image src={{ Hamburger }} />
    </View>
  )
}