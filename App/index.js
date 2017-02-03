import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';

import Login from './Login'
import First from './First'
import Second from './Second'


export default class PlantPot3 extends Component {

  render() {
		return (
			<NavigatorIOS
				initialRoute={{
          component: Login,
          title: 'Login',
          navigationBarHidden: true
        }}
        style={{flex :1}}
        barTintColor='#69D2E7'
        titleTextColor='#fff'
			/>
		)
	}

}

const styles = StyleSheet.create({

});


AppRegistry.registerComponent('PlantPot3', () => PlantPot3);
