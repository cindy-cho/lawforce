import React, { useState } from 'react';
import { Text, View, Alert, SafeAreaView } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import TabBar from "react-native-underline-tabbar";
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons'; 
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Home from './screens/todayStudy';
import Global from './shared/Global';
import { StatusBar } from 'expo-status-bar';

import Part from './screens/part';
import Test from './screens/test';
import { NDBCR } from './data/NDBCR';
import { GBJ_GRGGB } from './data/GBJ_GRGGB';
import { BGGT } from './data/BGGT';
import { JN } from './data/JN';

const getFonts = () => Font.loadAsync({
  'gothic': require('./assets/fonts/NanumBarunGothic.ttf'),
  'gothic-bold': require('./assets/fonts/NanumBarunGothicBold.ttf'),
  'gothic-light': require('./assets/fonts/NanumBarunGothicLight.ttf'),
  'gothic-ultralight': require('./assets/fonts/NanumBarunGothicUltraLight.ttf'),
});

const payAlert = () => {
  Alert.alert('PREMIUM UPGRADE', '596402-01-383562 국민 조재국', [
      {text: '송금하기'}
  ]);
};
 
export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <View style={[Global.container]}>
        <SafeAreaView style={Global.header}>
          <Entypo name='flower' size={23} style={Global.icon} />
          <View>
              <Text style={[Global.text, {fontSize: 25}]}>노동법</Text>
          </View>
          <MaterialCommunityIcons name='cash-usd' size={28} onPress={payAlert} style={Global.icon} />
        </SafeAreaView>
        <SafeAreaView style={[Global.container, {marginTop: -15}]}>
          <ScrollableTabView
            tabBarActiveTextColor='white'
            tabBarInactiveTextColor='#7B7B7B'
            tabBarBackgroundColor='#242424'
            renderTabBar={() => 
              <TabBar 
                underlineColor='white' 
                tabBarStyle={{marginBottom: -2}}
                tabBarTextStyle={{fontFamily: 'gothic-bold', fontSize: 15, paddingTop: 10, paddingBottom: 10}}
                tabMargin={18}
                underlineHeight={3}
                tabBadgeColor='red'
              />}
          >
            <Home tabLabel={{label: "  HOME  "}} label="오늘의 학습"/>
            <Part tabLabel={{label: "  제1편  "}} label="노동법총론" data={NDBCR}/>
            <Part tabLabel={{label: "  제2편  "}} label="개별적 근로관계법" data={GBJ_GRGGB}/>
            <Part tabLabel={{label: "  제3편  "}} label="비정규 근로자에 관한 특별법" data={BGGT}/>
            <Part tabLabel={{label: "  제4편  "}} label="집단적 노사관계법" data={JN}/>
            <Test tabLabel={{label: "  진단평가  "}} />
          </ScrollableTabView>
        </SafeAreaView>
        <StatusBar style={'light'}/>
      </View>
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={()=> setFontsLoaded(true)}
      />
    );
  }
}