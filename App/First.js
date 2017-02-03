import React, { Component,PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighLight,
  Image,
  ScrollView,
  PanResponder
} from 'react-native';

import { AnimatedCircularProgress } from 'react-native-circular-progress';
import config from './config';

class First extends Component {

  componentDidMount = () => {
      this.getCurrentValue()
    }

    getCurrentValue() {
        console.log('request...')
        const topic = config.topic;
        const auth = `auth=${config.appKey}:${config.appSecret}`
        const urlTemp = `https://api.netpie.io/topic/${config.appId}/${topic}/Temperature?${auth}`;
        const urlHumid = `https://api.netpie.io/topic/${config.appId}/${topic}/Humidity?${auth}`;
        const urlLight = `https://api.netpie.io/topic/${config.appId}/${topic}/LightLevel?${auth}`;
        const urlWater = `https://api.netpie.io/topic/${config.appId}/${topic}/WaterController?${auth}`;

        // Promise
        //fetch('https://api.netpie.io/topic/Plant2/sensor/Temperature?auth=C3x0k8GgFykjSRr:6Yik9vgQc46jnkIAwCMPRVa6E')
        fetch(urlTemp)
            .then((response) => {
              return response.json()
            })
            .then((responseJson) => {
                console.log('recieveTemp', responseJson)
                const temperature = responseJson[0].payload;
                console.log('temperature', temperature)
                 this.setState({
                     temperature,
                 });

            });
        fetch(urlHumid)
        .then((response) =>{
            return response.json()
        })
        .then((responseJson) =>{
            console.log('recieveHumid', responseJson)
            const humidity = responseJson[0].payload;
            console.log('humidity', humidity)
            this.setState({
                humidity
            })
        })

        fetch(urlLight)
        .then((response) =>{
            return response.json()
        })
        .then((responseJson) =>{
            console.log('recieveLight', responseJson)
            const lightlevel = responseJson[0].payload;
            console.log('lightlevel', lightlevel)
            this.setState({
                lightlevel
            })
        })

        fetch(urlWater)
        .then((response) =>{
            return response.json()
        })
        .then((responseJson) =>{
            console.log('recieveWater', responseJson)
            const waterStatus = responseJson[0].payload;
            console.log('waterStatus', waterStatus)
            this.setState({
                waterStatus,
                waiting : false
            })
        })

    }

    functionDetectON() {
        const auth = `auth=${config.appKey}:${config.appSecret}`
        const urlWater = `https://api.netpie.io/microgear/${config.appId}/plug?${auth}`;

        fetch(urlWater,
            {
                method: 'PUT', // Use method PUT for send data.
                body: 'ON' // Change your messages send to netpie.
            }
        );

    } // End functionDetectON

    functionDetectOFF() {
        const auth = `auth=${config.appKey}:${config.appSecret}`
        const urlWater = `https://api.netpie.io/microgear/${config.appId}/plug?${auth}`;

        fetch(urlWater,
            {
                method: 'PUT', // Use method PUT for send data.
                body: 'OFF' // Change your messages send to netpie.
            }
        );
    } // End functionDetectOFF

  constructor(props) {
        super(props);
        this.state = {
            temperature: 0.0,
            humidity: 0.0,
            lightlevel: 0,
            soilHumid :0,
            waterStatus: 'OFF',
        }
    }

  render() {
    const fillWater = this.state.soilHumid;
    const fillLight = this.state.lightlevel;

    return (
      <ScrollView>
      <View style = {styles.container}>
        <View style = {styles.header}>
          <Image
          style = {styles.profile}
          source = {require('./img/woman.png')}/>
          <Text style = {styles.labelHeader}> Malin J </Text>
        </View>
        <View style = {styles.body}>
          <View style ={styles.bodyTop}>
            <Image
              style={styles.emoticon}
              source={require('./img/happy.png')}/>
            <Text style = {styles.labelPlantName}>
              Pakkard
            </Text>
            <Image
              style={styles.line}
              source={require('./img/line.png')}/>
          </View>
          <View style = {styles.midle}>
            <Image
              style = {styles.imagePlant}
              source = {require('./img/gardening.png')} />

              <View style ={styles.row}>
                <Image
                  style = {styles.icon}
                  source = {require('./img/temperature.png')} />
                <Text style = {styles.labelIcon}> {this.state.temperature} C </Text>
                <Text style = {styles.labelIcon}> Humidity : {this.state.humidity} % </Text>
              </View>
              <View style ={styles.row}>
                  <Image
                  style = {styles.icon}
                  source = {require('./img/drop.png')} />
                <AnimatedCircularProgress
                  size={100}
                  width={3}
                  fill={fillWater}
                  tintColor="#00e0ff"
                  backgroundColor="#3d5875">
                  {
                    (fillWater) => (
                      <Text style={styles.points}>
                        {this.state.soilHumid} %
                      </Text>
                    )
                  }
                </AnimatedCircularProgress>

                <Image
                  style = {styles.icon}
                  source = {require('./img/summer.png')} />
                <AnimatedCircularProgress
                  size={100}
                  width={3}
                  fill={fillLight}
                  tintColor="#00e0ff"
                  backgroundColor="#3d5875">
                  {
                    (fillLight) => (
                      <Text style={styles.points}>
                        {this.state.soilHumid} %
                      </Text>
                    )
                  }
                </AnimatedCircularProgress>
              </View>
          </View>
        </View>
      </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container :{
    flex: 8,
    backgroundColor: '#DCF7F3',
  },
  header :{
    flex: 2,
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#DCF7F3',
    //marginTop : 45,
  },
  body: {
    flex: 6,
    backgroundColor: '#A7DBD8',
  },
  profile : {
    marginTop : 15,
    marginBottom : 15,
    marginLeft : 25,
    width : 100,
    height : 100,
  },
  labelHeader :{
    marginTop : 40,
    marginLeft : 30,
    fontSize: 20,
    fontWeight: '100',
  },
  imagePlant :{
    marginTop : 25,
    width : 200,
    height : 200,
  },
  midle: {
		flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelPlantName :{
    marginTop : 10,
    fontSize: 20,
    fontWeight: '100',
    paddingTop : 5,
    paddingLeft : 30,
    paddingRight : 30,
    paddingBottom : 5,
    backgroundColor : '#fff',
  },
  bodyTop:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  emoticon:{
    marginLeft : 25,
    width : 30,
    height : 30,
    marginTop : 10,
  },
  line:{
    marginRight : 25,
    width : 30,
    height : 30,
    marginTop : 10,
  },
  row:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop : 20,
    marginBottom : 20,
  },
  icon :{
    width : 30,
    height : 30,
    marginLeft : 10,
    marginRight : 10,
  },
  labelIcon :{
    fontSize: 20,
    fontWeight: '100',
  },
  points: {
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 33,
    left: 15,
    width: 90,
    textAlign: 'center',
    color: '#7591af',
    fontSize: 30,
    fontWeight: "100"
  },

});

module.exports = First;
