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
        style={{flex: 1}}
			/>
		)
	}

}

const styles = StyleSheet.create({
  title: {
		color:'#fff',
    textAlign:'center',
    fontWeight:'bold',
    flex: 1,
    marginTop: 6,
    fontSize: 16
	},
	textBtn: {
		color: '#fff',
		fontSize: 24,
		marginLeft: 6,
	},
  container: {
		backgroundColor:'#69D2E7',
		height: 60
  },
  backBtn: {
  	width: 50,
  	height: 50
  }
});


AppRegistry.registerComponent('PlantPot3', () => PlantPot3);
