import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighLight
} from 'react-native';

class Second extends Component{
	render(){
		return(
			<View style = {styles.container}>
				<Text style = {styles.largeText}>
					from first page
				</Text>
			</View>
		)
	}

}

const styles = StyleSheet.create({
	container:{
		flex :1,
		justifyContent : 'center',
		alignItems : 'center',
		backgroundColor : '#dddfd4'
	},
	largeText:{
		flex : 1,
		fontSize : 52,
		paddingTop : 40,
		paddingRight : 20,
		paddingLeft : 20,
		color : "#173e43"
	}

});

module.exports = Second;
