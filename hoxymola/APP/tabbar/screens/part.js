import React from 'react';
import {View, Text, Alert, ScrollView } from 'react-native';
import Global from '../shared/Global';
import ChapterList from './partChapter';
//import styles from './partStyle';

const payAlert = () => {
  Alert.alert('PREMIUM UPGRADE', '596402-01-383562 국민 조재국', [
      {text: '송금하기'}
  ]);
};

const moveToStudy = () => {
  Alert.alert('학습하러 가기');
};

export default function PartBasic({ label, data }) {
  return (
    <View style={[Global.container, {backgroundColor: '#2E2E2E'}]}>
        <View style={{backgroundColor: '#242424', padding: 20}}>
          <Text style={[Global.text, {fontSize: 25, fontWeight: 'bold', color: 'skyblue'}]}>{label}</Text>
          <Text style={[Global.text, {fontSize: 15, fontWeight: 'bold', alignSelf: 'flex-end'}]}>{data.length}개 주제</Text>
        </View> 
        <ChapterList data={data}/>
    </View>
  );
}