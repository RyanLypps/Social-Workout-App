import React, { Component } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { gymList } from '../../MockData';
import { landingPage } from '../../../styles/Styles'
import Schedule from '../Schedule/Schedule';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';

class LandingPage extends Component {

  goToSchedulePage = gymId => Actions.schedule({ gymId: gymId });

  gymList() {
    return (
      gymList.results.map((gym, index) => {
        return (
          <TouchableOpacity
            onPress={() => this.goToSchedulePage(gym.place_id)}
            key={index + 1}
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
  
  // goToHeader = () => Actions.header();

  render() {
    return (
      <ScrollView style={landingPage.container} scrollEnabled={true}>
        <Button  title='Header' style={{color: 'black'}} />
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

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="LandingPage">
//         <Drawer.Screen name="LandingPage" component={LandingPage} />
//         <Drawer.Screen name="Schedule" component={Schedule} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }