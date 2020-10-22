import React from 'react';
import Loading from './Loading'
import * as Location from 'expo-location';
import { Alert } from 'react-native';
import axios from 'axios';
import Weather from './Weather';

const API_KEY = 'db02aa23c2208599ae5aa4a96dd60075';

export default class extends React.Component {
  state = {
    isLoading: true
  };
  getWeather = async(latitude, longitude) => {
    const { 
      data: {
        main: { temp },
        weather
      } 
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    this.setState({ 
      isLoading: false, 
      condition: weather[0].main,
      temp 
    })
  };
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync(); //권한을 받지 못하면 error를 반환 -> catch가 실행
      const {
         coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("Can't find you.", 'So sad');
    }
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading, temp, condition } = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition}/>;
  }
}
