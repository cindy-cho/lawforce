import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Global from '../shared/Global';
import { ChapterOne } from '../data/PartOne';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Study from '../screens/st'

class HomeScreen extends React.Component {
  render() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#2E2E2E' }}>
        <TouchableOpacity
            onPress={() => this.props.navigation.navigate('CHAP1')}
            style={[styles.card, {justifyContent: 'space-evenly', padding: 10, width: '93%'}]}
        >
            <Text style={[Global.text,{alignSelf: 'center'},{fontSize: 17}]}>CHAPTER 1</Text>
            <Text style={[Global.text,{alignSelf: 'center'},{fontSize: 17}]}>노동법 총론</Text>
            <Text style={[Global.text,{alignSelf: 'center'},{fontSize: 17, color: 'skyblue'}]}>공부하러 가기</Text>
        </TouchableOpacity>
  </View>
    );
  }
}

class Chapter1 extends React.Component {
    render() {
        return (
            <Study label='노동법 총론' data={ChapterOne} navigation={this.props.navigation}/>
          );
    }
}


  const AppNavigator2 = createStackNavigator(
  {
    Home: HomeScreen,
    CHAP1: Chapter1,
    // CHAP2: Chapter2,
    // CHAP3: Chapter3,
    // CHAP4: Chapter4
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  }
);

// 스택 네비게이터를 앱 컨데이너에 담기
export default createAppContainer(AppNavigator2);

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