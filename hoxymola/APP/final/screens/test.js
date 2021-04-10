import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Global from '../shared/Global';
import { ChapterOne } from '../data/PartOne';
import { ChapterTwo } from '../data/PartTwo';
import { ChapterThree } from '../data/PartThree';
import { ChapterFour } from '../data/PartFour';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Part from '../screens/part'

// 렌더링 할 컴포넌트. <div> => <View>
// 'Go to Details' 버튼을 터치하면 'Details' 스크린으로 이동하게 된다.
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
                <Text style={[Global.text,{alignSelf: 'center'},{fontSize: 17, color: '#D7595A'}]}>테스트하러 가기</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => this.props.navigation.navigate('CHAP2')}
                style={[styles.card, {justifyContent: 'space-evenly', padding: 10, width: '93%'}]}
            >
                <Text style={[Global.text,{alignSelf: 'center'},{fontSize: 17}]}>CHAPTER 2</Text>
                <Text style={[Global.text,{alignSelf: 'center'},{fontSize: 17}]}>개별적 근로관계법</Text>
                <Text style={[Global.text,{alignSelf: 'center'},{fontSize: 17, color: '#D7595A'}]}>테스트하러 가기</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => this.props.navigation.navigate('CHAP3')}
                style={[styles.card, {justifyContent: 'space-evenly', padding: 10, width: '93%'}]}
            >
                <Text style={[Global.text,{alignSelf: 'center'},{fontSize: 17}]}>CHAPTER 3</Text>
                <Text style={[Global.text,{alignSelf: 'center'},{fontSize: 17}]}>비정규 근로자에 관한 특별법</Text>
                <Text style={[Global.text,{alignSelf: 'center'},{fontSize: 17, color: '#D7595A'}]}>테스트하러 가기</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => this.props.navigation.navigate('CHAP4')}
                style={[styles.card, {justifyContent: 'space-evenly', padding: 10, width: '93%'}]}
            >
                <Text style={[Global.text,{alignSelf: 'center'},{fontSize: 17}]}>CHAPTER 4</Text>
                <Text style={[Global.text,{alignSelf: 'center'},{fontSize: 17}]}>집단적 노사관계법</Text>
                <Text style={[Global.text,{alignSelf: 'center'},{fontSize: 17, color: '#D7595A'}]}>테스트하러 가기</Text>
            </TouchableOpacity>
      </View>
    );
  }
}

class Chapter1 extends React.Component {
    render() {
        return (
            <Part label='노동법 총론' data={ChapterOne} navigation={this.props.navigation}/>
          );
    }
}
class Chapter2 extends React.Component {
    render() {
        return (
            <Part label='개별적 근로관계법' data={ChapterTwo} navigation={this.props.navigation}/>
          );
    }
}
class Chapter3 extends React.Component {
    render() {
        return (
            <Part label='비정규 근로자에 관한 특별법' data={ChapterThree} navigation={this.props.navigation}/>
          );
    }
}
class Chapter4 extends React.Component {
    render() {
        return (
            <Part label='집단적 노사관계법' data={ChapterFour} navigation={this.props.navigation}/>
          );
    }
}


  const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    CHAP1: Chapter1,
    CHAP2: Chapter2,
    CHAP3: Chapter3,
    CHAP4: Chapter4
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  }
);

// 스택 네비게이터를 앱 컨데이너에 담기
export default createAppContainer(AppNavigator);

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