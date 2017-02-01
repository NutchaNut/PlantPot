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

export default class PlantPot3 extends Component {
  render() {
    const routes = [
    {title: 'First', index: 0},
    {title: 'Second', index: 1},
  ];

    return (

      <Navigator
      initialRoute={routes[0]}
      initialRouteStack={routes}
      renderScene={(route, navigator) =>
        <TouchableHighlight onPress={() => {
          if (route.index === 0) {
            navigator.push(routes[1]);
          } else {
            navigator.pop();
          }
        }}>
        <Text>Hello {route.title}!</Text>
        </TouchableHighlight>
      }
      style={{padding: 100}}

      navigationBar={
     <Navigator.NavigationBar
       routeMapper={{
         LeftButton: (route, navigator, index, navState) =>
         {
           if (route.index === 0) {
             return null;
           } else {
             return (
               <TouchableHighlight onPress={() => navigator.pop()}>
                 <Text>Back</Text>
               </TouchableHighlight>
             );
           }
         },
         RightButton: (route, navigator, index, navState) =>
           { return (<Text>Done</Text>); },
         Title: (route, navigator, index, navState) =>
           { return (<Text>Awesome Nav Bar</Text>); },
       }}
       style={{backgroundColor: 'gray'}}


       configureScene={(route, routeStack) =>
    Navigator.SceneConfigs.FloatFromBottom}

     />
  }



    />


      /*<View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>*/
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('PlantPot3', () => PlantPot3);
