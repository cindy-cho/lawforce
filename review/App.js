import React, { useState } from 'react';
import * as Font from 'expo-font';
import Home from './screens/home'
import { AppLoading } from 'expo';

const getFonts = () => Font.loadAsync({
    'gothic': require('./assets/fonts/NanumBarunGothic.ttf'),
    'gothic-bold': require('./assets/fonts/NanumBarunGothicBold.ttf'),
    'gothic-light': require('./assets/fonts/NanumBarunGothicLight.ttf'),
    'gothic-ultralight': require('./assets/fonts/NanumBarunGothicUltraLight.ttf')
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
 
  if(fontsLoaded) {
    return (
      <Home />
    );
  }
  else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    )
  }
}