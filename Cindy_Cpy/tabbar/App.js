import React, { useState } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import { ScrollableTabView, DefaultTabBar, ScrollableTabBar, } from '@valdio/react-native-scrollable-tabview';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Home from './screens/todayStudy';
import Part1 from './screens/part1';

import { AntDesign } from '@expo/vector-icons';

const pt1 = ( <AntDesign name="lock" size={15} onPress="red"><Text>제1편</Text></AntDesign>);
const pt2 = ( <AntDesign name="lock" size={15}><Text>제2편</Text></AntDesign>);
const pt3 = ( <AntDesign name="lock" size={15}><Text>제3편</Text></AntDesign>);
const pt4 = ( <AntDesign name="lock" size={15}><Text>제4편</Text></AntDesign>);
const pt5 = ( <AntDesign name="lock" size={15}><Text>제5편</Text></AntDesign>);
const ptQuiz = ( <AntDesign name="lock" size={15}><Text>문제풀기</Text></AntDesign>);


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
              <Text style={styles.headerText}>노동법</Text>
          </View>
          <MaterialCommunityIcons name='cash-usd' size={28} onPress={payAlert} style={styles.rightIcon} />
        </View>
        <View style={{flex: 1}}>
          <ScrollableTabView
            tabBarActiveTextColor='red'
            tabBarInactiveTextColor='#7B7B7B'
            tabBarBackgroundColor='#242424'
            renderTabBar={() => 
              <TabBar 
                underlineColor='white' 
                tabBarTextStyle={{paddingBottom: 11, fontSize: 15}}
                tabBarStyle={{marginBottom: -1,}}
                tabBarTextStyle={{fontSize: 15, paddingTop:20, paddingBottom: 5}}
                tabMargin={20}
                underlineHeight={3}
                tabBadgeColor='red'
              />}

          >
            <Home  tabLabel= {{label: "오늘의 학습"}} label="Part_Today"/>
            <Part1 tabLabel={{label: pt1}} label="Part1"/>
            <Part1 tabLabel={{label: pt2}} label="Part2"/>
            <Part1 tabLabel={{label: pt3}} label="Part3"/>
            <Part1 tabLabel={{label: pt4}} label="Part4"/>
            <Part1 tabLabel={{label: pt5}} label="Part5"/>
            <Part1 tabLabel={{label: ptQuiz}} label="Part_Quiz"/>
            <Part1 tabLabel={{label: "  북마크  "}} label="Part_Bookmark"/>
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
    top : 10,
    color: 'white',
    letterSpacing: 1,
  },
  leftIcon: {
    paddingTop: 20,
    position: 'absolute',
    display : 'flex',
    left : 40,
    top : 20,
    textAlign : 'left',
    color: 'white',
  },
  rightIcon: {
    paddingTop: 20,
    position: 'absolute',
    right: 16,
    top : 20,
    color: 'white',
  },
})