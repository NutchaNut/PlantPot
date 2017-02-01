import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighLight
} from 'react-native';

class First extends Component {

  onButtonPress(){
    this.props.navigator.push({
      id : 'Second'
    });
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
            First page
        </Text>
        <TouchableHighLight onPress={this.onButtonPress.bind(this)}>
          <Text style={styles.instructions}>
              this is button
          </Text>
        </TouchableHighLight>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
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

module.exports = First;
