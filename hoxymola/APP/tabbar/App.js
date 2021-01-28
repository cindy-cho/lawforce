import React, { useState, } from 'react';
import { Text, View, SafeAreaView, StyleSheet,  } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
<<<<<<< Updated upstream
import Global from './shared/Global';
import Quote from './screens/todayQuote';
import Today from './screens/todaySample';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Part from './screens/part';
import { ChapterOne } from './data/PartOne';
import { ChapterTwo } from './data/PartTwo';
import { ChapterThree } from './data/PartThree';
import { ChapterFour } from './data/PartFour';
=======
>>>>>>> Stashed changes

const getFonts = () => Font.loadAsync({
  'gothic': require('./assets/fonts/NanumBarunGothic.ttf'),
  'gothic-bold': require('./assets/fonts/NanumBarunGothicBold.ttf'),
  'gothic-light': require('./assets/fonts/NanumBarunGothicLight.ttf'),
  'gothic-ultralight': require('./assets/fonts/NanumBarunGothicUltraLight.ttf'),
});
<<<<<<< Updated upstream
 
function HomeScreen() {
  var now = new Date();
  var then = new Date("December 2, 2020");
  var duetitle = "3차 발표일";
  var duedate = "2020. 12. 02";
  var gap = then.getTime() - now.getTime();
  gap = Math.floor(gap / (1000 * 60 * 60 * 24) + 1);
  var pm = gap > 0 ? "D-"+gap : gap == 0 ? "D-Day" : "D+"+-gap;


  return (
    <SafeAreaView style={[Global.container, {backgroundColor: '#2E2E2E'}]}>
      <View style={Global.container}>
        <View style={{paddingBottom: 10},{alignItems :'center'}}>
          <View style={{flexDirection : 'row'}}>
            <View style={styles.card}>
              <Text style={[Global.text,{alignSelf: 'center'},{fontSize: 11, marginTop: '13%'}]}>{duetitle}</Text>
              <Text style={[Global.text,{alignSelf: 'center'},{fontSize: 11, marginTop: '5%'}]}>{duedate}</Text>
              <Text style={[Global.text,{alignSelf: 'center'},{fontSize: 17, marginTop: '5%', color: '#D7595A'}]}>{pm}</Text>
            </View>
            <View style={styles.card}>
              <Quote/>
            </View>
          </View>
        </View>

        <View style={[Global.container, {paddingHorizontal: 20, marginTop : '2.5%'}]}>
          <View style={{justifyContent: 'space-between', marginBottom:10}}>
            <Text style={[Global.text, {fontSize: 20, color:'lightblue'}]}>{'<'}오늘의 주요 판례{'>'}</Text>
          </View>  
          <ScrollView
            showsVerticalScrollIndicator={false}
          >
            <Today/>
          </ScrollView>          
        </View>
      </View>
  </SafeAreaView>
  );
}

function chapterOne() {
  return (
    <Part label='노동법 총론' data={ChapterOne}/>
  );
}
function chapterTwo() {
  return (
    <Part label='개별적 근로관계법' data={ChapterTwo}/>
  );
}
function chapterThree() {
  return (
    <Part label='비정규 근로자에 관한 특별법' data={ChapterThree}/>
  );
}
function chapterFour() {
  return (
    <Part label='집단적 노사관계법' data={ChapterFour}/>
  );
}

const Tab = createBottomTabNavigator();
=======
>>>>>>> Stashed changes

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
<<<<<<< Updated upstream
      <SafeAreaView style={[Global.container, {backgroundColor: '#242424'}]}>
        <SafeAreaView style={Global.header}>
          <View>
              <Text style={[Global.text, {fontSize: 25}]}>노동법</Text>
          </View>
        </SafeAreaView>
        
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused }) => {
                let color = focused ? 'white' : 'gray';

                return <Text style={{color: color, fontWeight: 'bold', fontSize: 17}}>{route.name}</Text>;
              },
            })}
            tabBarOptions={{
              activeBackgroundColor: '#242424',
              inactiveBackgroundColor: '#242424',
              showLabel: false
            }}
          >
            <Tab.Screen name="HOME" component={HomeScreen} />
            <Tab.Screen name="1편" component={chapterOne} />
            <Tab.Screen name="2편" component={chapterTwo} />
            <Tab.Screen name="3편" component={chapterThree} />
            <Tab.Screen name="4편" component={chapterFour} />
          </Tab.Navigator>
        </NavigationContainer>

        <StatusBar style={'light'}/>
      </SafeAreaView>
=======
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontFamily: 'gothic-bold'}}>HI</Text>
        <Text style={{fontFamily: 'gothic'}}>HI</Text>
      </View>
>>>>>>> Stashed changes
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