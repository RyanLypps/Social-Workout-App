import React, { Component } from 'react';
import { registerRootComponent } from 'expo';
import { Provider } from 'react-redux';
import Routes from './components/Routes'
import store from './rootStore';

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <Routes />
      </Provider>
    );
  }
}
export default registerRootComponent(App);
