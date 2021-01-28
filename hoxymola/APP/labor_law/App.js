import React from 'react';
import Part from './screens/part'
import { StatusBar } from 'expo-status-bar';
import { Text, View, SafeAreaView, Dimensions, StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Global from './shared/Global';
import { ChapterOne } from './data/PartOne';
import { ChapterTwo } from './data/PartTwo';
import { ChapterThree } from './data/PartThree';
import { ChapterFour } from './data/PartFour';

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
const screen = Dimensions.get('window');


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
        <SafeAreaView style={Global.header}>
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
            <Tab.Screen name="1편" component={chapterOne} />
            <Tab.Screen name="2편" component={chapterTwo} />
            <Tab.Screen name="3편" component={chapterThree} />
            <Tab.Screen name="4편" component={chapterFour} />
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