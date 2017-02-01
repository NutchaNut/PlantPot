import React, { Component,PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
  Image,
  Button
} from 'react-native';

class Login extends Component {

  state = {
    email: '',
    password: ''
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
        style = {styles.imagePlant}
        source = {require('./img/lettuce.png')} />
        <Text style={styles.heading}>
          PlantPot
        </Text>

        <TextInput
          value={this.state.email}
          onChangeText={ (text)=> this.setState({email: text}) }
          style={styles.input} 
          placeholder="email">
        </TextInput>

        <TextInput
          value={this.state.password}
          onChangeText={ (text)=> this.setState({password: text}) }
          style={styles.input}
          placeholder="password">
        </TextInput>

        <View style={{marginTop: 51}}>
          <Button
            onPress={() => { }}
            title="Login"
            color="#fff"
          />
        </View>

      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#69D2E7',
    padding: 10,
    paddingTop: 80
  },
  input: {
    height: 50,
    marginTop: 10,
    padding: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48bbec',
    backgroundColor : '#D8F0F1'
  },
  button: {
    height: 50,
    backgroundColor: '#48BBEC',
    alignSelf: 'stretch',
    marginTop: 20,
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 22,
    color: '#FFF',
    alignSelf: 'center'
  },
  heading: {
    fontSize: 30,
    color : '#fff'
  },
  error: {
    color: 'red',
    paddingTop: 10
  },
  success: {
    color: 'green',
    paddingTop: 10
  },
  loader: {
    marginTop: 20
  }

});

module.exports = Login;
