import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Navigator
} from 'react-native';

import First from './First'
import Second from './Second'

const NavigationBar = ({AddRoute, MoreDetailRoute, onSendPress}) => {
	return (
		<Navigator.NavigationBar
    	routeMapper={{
     		LeftButton: (route, navigator, index, navState) => {
			    if (route.pathname !== 'main') {
			      return (
			        <TouchableHighlight
			        	style={styles.backBtn}
			        	underlayColor="rgba(0,0,0,0)"
			        	onPress={() => navigator.pop()}
		        	>
			          <Text style={styles.textBtn}>{'<'}</Text>
			        </TouchableHighlight>
			      );
			    }
				},
      	RightButton: (route, navigator, index, navState) => {

      		switch(route.pathname) {
      			/*case 'main':
      				/*return (
			      		<TouchableHighlight
				        	style={styles.backBtn}
				        	underlayColor="rgba(0,0,0,0)"
				        	onPress={() => navigator.push(AddRoute)}
		        		>
				          <Text style={styles.textBtn}>+</Text>
				        </TouchableHighlight>
		      		)*/
	      		case 'detail':
	      			let dataRoute = {
	      				...MoreDetailRoute,
	      				title: route.props.name,
	      				props: route.props
	      			}
	      			return (
				    		<TouchableHighlight
				        	style={styles.backBtn}
				        	underlayColor="rgba(0,0,0,0)"
				        	onPress={() => navigator.push(dataRoute)}
		        		>
				          <Text style={styles.textBtn}>?</Text>
				        </TouchableHighlight>
			    		)
		    		case 'add':
	      			return (
				    		<TouchableHighlight
				        	style={styles.backBtn}
				        	underlayColor="rgba(0,0,0,0)"
				        	onPress={() => {
				        		onSendPress()
				        		navigator.pop()
				        	}}
		        		>
				          <Text style={styles.textBtn, {marginTop: 6, fontSize: 16, color: '#fff'}}>send</Text>
				        </TouchableHighlight>
			    		)
      		}
      	},
       	Title: (route, navigator, index, navState) => {
       		return (<Text style={styles.title}>{route.title}</Text>)
     		}
     	}}
    	style={styles.container} />
	)
}


export default class PlantPot3 extends Component {

  _renderScene = (route, navigator, routes) => {
  switch (route.pathname) {
    case 'main':
      return (
        <First
          //onPressImage={(passProps) => {this.handleOnPressImage(routes[1], navigator, passProps)}}
          //insects={this.state.insects}
          />
      )
    case 'detail':
      return (
        <Second
           name={route.props.name}
      //     timeToHavest={route.props.timeToHavest}
      //     maxTimeToHavest={route.props.maxTimeToHavest}
      //
      //     temperatureStatus={route.props.temperatureStatus}
      //     maxTemperatureStatus={route.props.maxTemperatureStatus}
      //
      //     lightStatus={route.props.lightStatus}
      //     maxLightStatus={route.props.maxLightStatus}
      //
      //     waterStatus={route.props.waterStatus}
      //     maxWaterStatus={route.props.maxWaterStatus}
      //
           url={route.props.url}
      />
    )
  }
}

  render() {
    const routes = [
    	{title: 'Plant Pot', pathname: 'main', index: 0, props: { }},
    	{title: 'Second', pathname: 'detail', index: 1, props: { }},
		]

	  return (
	    <Navigator
	      initialRoute={routes[0]}
	      initialRouteStack={routes}
	      renderScene={(route, navigator) =>
	      	this._renderScene(route, navigator, routes)
	      }
	      navigationBar={NavigationBar({
	      	//AddRoute: routes[2],
	      	//MoreDetailRoute: routes[3],
	      	//onSendPress:
	      })}
		  	style={{paddingTop: 60}}
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
