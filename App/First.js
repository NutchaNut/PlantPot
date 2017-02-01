import React, { Component,PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighLight,
  Image
} from 'react-native';

class First extends Component {

  render() {
    return (
      <View style = {styles.container}>
        <View style = {styles.header}>
          <Image
          style = {styles.profile}
          source = {require('./img/carrot.png')}/>
          <Text style = {styles.labelHeader}> Malin J </Text>
        </View>
        <View style = {styles.body}>
          <View style = {styles.column}>
          <Image
            style = {styles.imagePlant}
            source = {require('./img/lettuce.png')} />
          <Text style = {styles.labelPlantName}> Hello </Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container :{
    flex: 1,
  },
  header :{
    flex: 2,
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#A7DBD8',
  },
  body: {
    flex: 6,
    backgroundColor: '#DCF7F3',
  },
  profile : {
    marginTop : 25,
    marginLeft : 25,
    width : 100,
    height : 100,
  },
  labelHeader :{
    marginTop : 30,
    marginLeft : 30,
    fontSize: 20,
    fontWeight: '100',
  },
  imagePlant :{
    marginTop : 25,
    marginLeft : 25,
    width : 80,
    height : 80,
  },
  column: {
		flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  labelPlantName :{
    fontSize: 20,
    fontWeight: '100',
    marginLeft : 40,
  },
});

module.exports = First;
