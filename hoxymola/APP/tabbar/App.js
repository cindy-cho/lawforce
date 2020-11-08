import React, { useState } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import TabBar from "react-native-underline-tabbar";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Home from './screens/todayStudy';
import Part1 from './screens/part1';

const getFonts = () => Font.loadAsync({
  'gothic': require('./assets/fonts/NanumBarunGothic.ttf'),
  'gothic-bold': require('./assets/fonts/NanumBarunGothicBold.ttf'),
  'gothic-light': require('./assets/fonts/NanumBarunGothicLight.ttf'),
  'gothic-ultralight': require('./assets/fonts/NanumBarunGothicUltraLight.ttf'),
});

const Page = ({label}) => (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        {label}
      </Text>
      <Text style={styles.instructions}>
        To get started, edit index.ios.js
      </Text>
      <Text style={styles.instructions}>
        Press Cmd+R to reload,{'\n'}
        Cmd+D or shake for dev menu
      </Text>
    </View>
);

const payAlert = () => {
  Alert.alert('PREMIUM UPGRADE', '596402-01-383562 국민 조재국', [
      {text: '송금하기'}
  ]);
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <View style={{flex: 1}}>
        <View style={styles.header}>
          <MaterialCommunityIcons name='menu' size={23} style={styles.leftIcon} />
          <View>
              <Text style={styles.headerText}>Santa</Text>
          </View>
          <MaterialCommunityIcons name='cash-usd' size={28} onPress={payAlert} style={styles.rightIcon} />
        </View>
        <View style={{flex: 1}}>
          <ScrollableTabView
            tabBarActiveTextColor='white'
            tabBarInactiveTextColor='#7B7B7B'
            tabBarBackgroundColor='#242424'
            renderTabBar={() => 
              <TabBar 
                underlineColor='white' 
                tabBarTextStyle={{paddingBottom: 11, fontSize: 15}}
                tabBarStyle={{marginBottom: -1}}
                tabBarTextStyle={{fontSize: 15, paddingTop: 10, paddingBottom: 10}}
                tabMargin={18}
                underlineHeight={3}
                tabBadgeColor='red'
              />}
          >
            <Home tabLabel={{label: "  오늘의 학습  "}} label="오늘의 학습"/>
            <Part1 tabLabel={{label: "  🛑 Part1  "}} label="Part1"/>
            <Part1 tabLabel={{label: "  Part2  "}} label="Part2"/>
            <Part1 tabLabel={{label: "  🛑 Part3  "}} label="Part3"/>
            <Part1 tabLabel={{label: "  🛑 Part4  "}} label="Part4"/>
            <Part1 tabLabel={{label: "  Part5  "}} label="Part5"/>
            <Part1 tabLabel={{label: "  🛑 Part6  "}} label="Part6"/>
            <Part1 tabLabel={{label: "  🛑 Part7  "}} label="Part7"/>
          </ScrollableTabView>
        </View>
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

const styles = StyleSheet.create({
  header: {
    paddingTop: 20,
    width: '100%',
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#242424',
    marginBottom: -15
  },
  headerText: {
    fontFamily: 'gothic-light',
    fontSize: 25,
    color: 'white',
    letterSpacing: 1,
  },
  leftIcon: {
    paddingTop: 20,
    position: 'absolute',
    left: 16,
    color: 'white',
  },
  rightIcon: {
    paddingTop: 20,
    position: 'absolute',
    right: 16,
    color: 'white',
  },
})