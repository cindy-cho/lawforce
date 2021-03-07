import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, Text, View, SafeAreaView, Dimensions, StyleSheet, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Font from 'expo-font';

import Global from './shared/Global';
import Part from './screens/part'
import Quote from './screens/todayQuote';
import Today from './screens/todaySample';
import { ChapterOne } from './data/PartOne';
import { ChapterTwo } from './data/PartTwo';
import { ChapterThree } from './data/PartThree';
import { ChapterFour } from './data/PartFour';
import HTML from "react-native-render-html";

const tag = `
  <span style = "font-size: 18; color: #D4D4D4; font-family: gothic;">
`
const htmlContent = `

<h3 data-ke-size="size23">관행의&nbsp;법원성&nbsp;<b>[규사명&nbsp;이사확]</b></h3>
<p data-ke-size="size18">관행이&nbsp;근로계약의&nbsp;내용을&nbsp;이루고&nbsp;있다고&nbsp;하기&nbsp;위하여는&nbsp;그러한&nbsp;①&nbsp;<u>관행이&nbsp;기업사회에서&nbsp;일반적으로&nbsp;근로관계를&nbsp;규율하는&nbsp;<span style="color: #000000; background-color: #f3c000;"><b>규</b></span>범적인&nbsp;<b><span style="background-color: #f3c000;">사</span></b>실로서&nbsp;<span style="background-color: #f3c000;"><b>명</b></span>확히&nbsp;승인되거나</u>&nbsp;②&nbsp;<u>기업의&nbsp;구성원에&nbsp;의하여&nbsp;일반적으로&nbsp;아무도&nbsp;<span style="background-color: #f3c000;"><b>이</b></span>의를&nbsp;제기하지&nbsp;아니한&nbsp;채&nbsp;당연한&nbsp;것으로&nbsp;받아들여져서&nbsp;기업&nbsp;내에서&nbsp;<span style="background-color: #f3c000;"><b>사</b></span>실상의&nbsp;제도로서&nbsp;<span style="background-color: #f3c000;"><b>확</b></span>립되어&nbsp;있다고&nbsp;할&nbsp;수&nbsp;있을&nbsp;정도의&nbsp;규범의식에&nbsp;의하여&nbsp;지지되고&nbsp;있어야&nbsp;한다</u>&nbsp;<i>(대판&nbsp;2002.4.23.&nbsp;2000다50701).</i></p>
`

const tag2 = `
  </span>
`

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
            <View style={{borderColor: 'white', borderWidth: 1, width: '100%', padding: 10, height: '30%', backgroundColor: 'white'}}>
              <HTML source={{html: htmlContent }} />
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
const screen = Dimensions.get('window');
function HowTo() {
  return (
    <View style={{backgroundColor: '#242424', alignItems: 'center', flex: 1}}>
      <Image 
        source={require('./assets/howto.png')}
        style={{flex: 1}}
        resizeMode='contain'
      />
    </View>
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
            <Tab.Screen name="1편" component={chapterOne} />
            <Tab.Screen name="2편" component={chapterTwo} />
            <Tab.Screen name="3편" component={chapterThree} />
            <Tab.Screen name="4편" component={chapterFour} />
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