import { AppLoading } from 'expo';
import React, { useState } from 'react';
import Navigator from './routes/drawer'

const getFonts = () => Font.loadAsync({
  'gothic': require('./assets/fonts/NanumBarunGothic.ttf'),
  'gothic-bold': require('./assets/fonts/NanumBarunGothicBold.ttf'),
  'gothic-light': require('./assets/fonts/NanumBarunGothicLight.ttf'),
  'gothic-ultralight': require('./assets/fonts/NanumBarunGothicUltraLight.ttf'),
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if(fontsLoaded){
    return (
     <Navigator />
    );
  }
  else{
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={()=> setFontsLoaded(true)}
      />
    )
  }
}
