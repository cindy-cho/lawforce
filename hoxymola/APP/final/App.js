import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, Text, View, SafeAreaView, Dimensions, StyleSheet, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Font from 'expo-font';

import Test from './screens/test';
import Study from './screens/study';
import Global from './shared/Global';
import Quote from './screens/todayQuote';
import Today from './screens/todaySample';

function HomeScreen() {
  var now = new Date();
  var then = new Date("May 8, 2021");
  var duetitle = "1차 시험일";
  var duedate = "2021. 05. 08";
  var gap = then.getTime() - now.getTime();
  gap = Math.floor(gap / (1000 * 60 * 60 * 24) + 1);
  var pm = gap > 0 ? "D-"+gap : gap == 0 ? "D-Day" : "D+"+-gap;

  var then2 = new Date("August 21, 2021");
  var duetitle2 = "2차 시험일";
  var duedate2 = "2021. 08. 21";
  var gap2 = then2.getTime() - now.getTime();
  gap2 = Math.floor(gap2 / (1000 * 60 * 60 * 24) + 1);
  var pm2 = gap2 > 0 ? "D-"+gap2 : gap2 == 0 ? "D-Day" : "D+"+-gap2;

  return (
    <SafeAreaView style={[Global.container, {backgroundColor: '#2E2E2E'}]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <View style={Global.container}>
          <View style={{paddingBottom: 10},{alignItems :'center'}}>
            <View style={{flexDirection : 'row'}}>
              <View style={[styles.card, {justifyContent: 'space-evenly', padding: 10}]}>
                <Text style={[Global.text,{alignSelf: 'center'},{fontSize: 11}]}>{duetitle}</Text>
                <Text style={[Global.text,{alignSelf: 'center'},{fontSize: 11}]}>{duedate}</Text>
                <Text style={[Global.text,{alignSelf: 'center'},{fontSize: 17, color: '#D7595A'}]}>{pm}</Text>
              </View>
              <View style={[styles.card, {justifyContent: 'space-evenly', padding: 10}]}>
                <Text style={[Global.text,{alignSelf: 'center'},{fontSize: 11}]}>{duetitle2}</Text>
                <Text style={[Global.text,{alignSelf: 'center'},{fontSize: 11}]}>{duedate2}</Text>
                <Text style={[Global.text,{alignSelf: 'center'},{fontSize: 17, color: '#D7595A'}]}>{pm2}</Text>
              </View>
            </View>
            <View style={[styles.card, {marginTop: 0, width: '93%'}]}>
              <Quote/>
            </View>
          </View>

          <View style={[Global.container, {paddingHorizontal: 20, marginTop : '2.5%'}]}>
            <View style={{justifyContent: 'space-between', marginBottom:10}}>
              <Text style={[Global.text, {fontSize: 20, color:'lightblue'}]}>{'<'}오늘의 주요 판례{'>'}</Text>
            </View>  
            <Today/>
          </View>
        </View>
      </ScrollView>          
    </SafeAreaView>
  );
}
function study() {
  return (
    <Study />
  );
}
function test() {
  return (
    <Test />
  );
}
const screen = Dimensions.get('window');
function HowTo() {
  return (
      <ScrollView horizontal={true} style={{flex: 1}}>
        <Image 
          source={require('./assets/howto.png')}
          style={{minHeight: screen.height*0.5}}
        />
      </ScrollView>
  );
}
const Tab = createBottomTabNavigator();

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isReady: false};
  }
  
  async componentDidMount() {
    await Font.loadAsync({
      'gothic': require('./assets/fonts/NanumBarunGothic.ttf'),
      'gothic-bold': require('./assets/fonts/NanumBarunGothicBold.ttf'),
      'gothic-light': require('./assets/fonts/NanumBarunGothicLight.ttf'),
      'gothic-ultralight': require('./assets/fonts/NanumBarunGothicUltraLight.ttf'),
    });
    this.setState({ isReady: true });
  }
  
  render() {
    if (this.state.isReady) {
      return (
        <SafeAreaView style={[Global.container, {backgroundColor: '#242424', }]}>
          <SafeAreaView style={[Global.header]}>
            <View>
                <Text style={[Global.text, {fontSize: 25}]}>노동법</Text>
            </View>
          </SafeAreaView>
          
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                  let color = focused ? '#D4D4D4' : 'gray';

                  return <Text style={{color: color, fontWeight: 'bold', fontSize: 17}}>{route.name}</Text>;
                },
              })}
              tabBarOptions={{
                activeBackgroundColor: '#242424',
                inactiveBackgroundColor: '#242424',
                showLabel: false,
                style: {height: screen.height / 12, borderTopColor: '#D4D4D4', borderTopWidth: StyleSheet.hairlineWidth}
              }}
            >
              <Tab.Screen name="HOME" component={HomeScreen} />
              <Tab.Screen name="STUDY" component={study} />
              <Tab.Screen name="TEST" component={test} />
              <Tab.Screen name="HELP" component={HowTo} />
            </Tab.Navigator>
          </NavigationContainer>

          <StatusBar style={'light'}/>
        </SafeAreaView>
      );
    }
    else {
      return <View><Text>Loding...</Text></View>;
    }
  }
}

const styles = StyleSheet.create({
  card: {
      marginVertical: '3%',
      borderRadius: 6,
      backgroundColor: '#202020',
      shadowOffset: { width: 1, height: 1 },
      shadowColor: '#333',
      shadowOpacity: 0.3,
      shadowRadius: 2,
      height: 100,
      width: '45%',
      marginHorizontal : '1.5%', 
      paddingHorizontal : '2%'
  }
});