import React from 'react';
import {StyleSheet, Dimensions ,View, Text, TouchableOpacity, ImageBackground, Alert, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Global from '../shared/Global';
import ChapterList from './part1Chapter';
//import styles from './partStyle';

const payAlert = () => {
  Alert.alert('PREMIUM UPGRADE', '596402-01-383562 국민 조재국', [
      {text: '송금하기'}
  ]);
};

const moveToStudy = () => {
  Alert.alert('학습하러 가기');
};

export default function PartBasic({ label }) {
  return (
    <View style={[Global.container, {backgroundColor: '#2E2E2E'}]}>
      <View>
        <TouchableOpacity
          onPress={payAlert}
          style={Global.adContainer}
          activeOpacity={1}
          
        >
          <Text style={[Global.text, {fontSize: 13}]}>{label} 학습을 하고 싶다면 ?</Text>
          <Ionicons name="ios-arrow-forward" size={15} color="white" style={{position: 'absolute', right: 30}}/>
        </TouchableOpacity>
      </View>
      
       <View style={styles.contents}>
        <ImageBackground source={require('../assets/waveBackground.png')} style={styles.image}>
          <View style={styles.up}>
            <View style={styles.name}>
              <Text style={styles.text}>진도상황 : 0%</Text>
              <Text style={styles.text}>{label}</Text>
            </View>
            <TouchableOpacity
              onPress={payAlert}
              activeOpacity={1}
              style={styles.study}
            >
              <View>
                <Text style={styles.studyText}>학습하기</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.down}>
            <View style={styles.premium}>
              <Text style={styles.premiumText}>매일 무료로</Text>
              <Text style={styles.premiumText}>10문제가 제공됩니다.</Text>
            </View>
          </View>
        </ImageBackground>
      </View> 
      <View style={styles.Container}>
        <View style={styles.bodyContainer}>
          <Text style={styles.bodyTitle}>9개 주제</Text>
          <View style={styles.chapterContainer}>
            <ScrollView>
              <ChapterList/>
            </ScrollView>
          </View>
        </View>
     </View>
    </View>
  );
}


//위에 주석된 부분 사용하지 않을거면 이부분 싹다 지워도 상관없음
  const styles = StyleSheet.create({
  Container: {
    backgroundColor : 'white',
    flex: 1,
  },
  bodyContainer: {
    paddingTop : 30,
    paddingLeft : 30,
    flex:1,
  },
  bodyTitle:{
    color : 'grey',
    fontFamily: 'gothic-bold',
    fontSize: 20,
    padding: 5,
  },
  chapterContainer:{
    marginTop: 20,
    borderRadius: 15,
    width: '90%',
    height: '100%',
    justifyContent : 'center',
  },
  chapterText:{
    marginLeft : '7%',
    fontFamily: 'gothic-bold',
    fontSize : 17,
    color : 'black',
  },
  adContainer: {
    backgroundColor: '#DF6881',
    height: 50,
  flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 30,
  },
  adText: {
    fontFamily: 'gothic',
    fontSize: 13,
    color: 'white'
  },
  underscore: {
    fontFamily: 'gothic',
    fontSize: 13,
    textDecorationLine: 'underline',
    color: 'white'
  },
 icon: {
    paddingLeft: 110
  },
  menuContainer: {
    backgroundColor: '#242424',
    height: 40,
    padding: 10,
    alignItems: 'center',
  },
 menuText:{
   color: 'white',
    fontFamily: 'gothic-bold',
    paddingTop: 5
  },
  up: {
    paddingTop: 40,
    flexDirection: 'row',
    paddingBottom: 40,
    paddingHorizontal: 25,
    justifyContent: 'space-between'
  },
  down: {
    paddingTop: 10,
    paddingHorizontal: 25,
  },
  text: {
    textTransform: 'uppercase',
    fontFamily: 'gothic-bold',
   fontSize: 25,
   color: 'white',
    padding: 5
  },
  contents: {
    backgroundColor: '#242424',
    height: 290,
 },
  study: {
    marginTop: 10,
    borderRadius: 30,
    width: 120,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  studyText:{
    fontSize: 17,
    fontFamily: 'gothic-bold',
  },
  premiumText: {
   color: 'white',
   paddingVertical: 5,
   paddingHorizontal : 5,
   fontSize: 19
  },
  image: {
    width: '100%',
    height: '100%'
  },
  name: {
    width : '55%'
  }
}); 