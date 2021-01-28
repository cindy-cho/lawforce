import React, { useState, } from 'react';
import { Text, View } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const getFonts = () => Font.loadAsync({
  'gothic': require('./assets/fonts/NanumBarunGothic.ttf'),
  'gothic-bold': require('./assets/fonts/NanumBarunGothicBold.ttf'),
  'gothic-light': require('./assets/fonts/NanumBarunGothicLight.ttf'),
  'gothic-ultralight': require('./assets/fonts/NanumBarunGothicUltraLight.ttf'),
});

export default class App extends React.Component {
  state = {
    isReady: false,
  };

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._cacheResourcesAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      ); }

    return (
      <View style={{ flex: 1 }}>
        <Image source={require('./assets/snack-icon.png')} />
      </View>
    );
  }