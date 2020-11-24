import React, { useState } from 'react';
import { View, Text, Alert, SafeAreaView, StyleSheet } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import Global from '../shared/Global';
import Quote from './todayQuote';
import Today from './todaySample';

export default function HomeScreen() {
  var now = new Date();
  var then = new Date("December 2, 2020");
  var duetitle = "3차 발표일";
  var duedate = "2020. 12. 02";
  var todayTitle = "근로기준법상 근로자의 판단기준";
  var todayContent = "근로기준법상 근로자에 해당하는지 여부는 계약의 형식이 고용계약인지 도급계약인지보다 그 실질에 있어 근로자가 사업 또는 사업장에 임금을 목적으로 종속적인 관계에서 사용자에게 근로를 제공하였는지 여부에 따라 판단하여야하고, 여기에서 종속적인 관계가 있는지 여부는 업무 내용을 사용자가 정하고 취업규칙 또는 복무규정 등의 적용을 받으며, 업무 수행과정에서 사용자가 상당한 지휘 명령을 하는지, 사용자가 근무시간과 근무장소를 지정하고 근로자가 이에 구속을 받는지, 노무 제공자가 스스로 비품 및 원자재나 작업도구 등을 소유하거나 제 3자를 고용하여 업무를 대행케 하는 등 독립하여 자신의 계산으로 사업을 영위할 수 있는지, 노무 제공을 통한 이윤의 창출과 손실의 초래 등 위험을 스스로 안고 있는지, 보수의 성격이 근로 자체의 대상적 성격인지, 근로제공 관계의 계속성과 사용자에 대한 전속성의 유무와 그 정도, 기본급이나 고정급이 정하여 졌는지 및 근로소득세의 원천징수 여부 등 보수에 관한 사항, 사회보장제도에 관한 법령에서 근로자로서 지위를 인정받는지 등의 경제적, 사회적 여러 조건을 종합하여 판단하여야 한다. 다만, 기본급이나 고정급이 정하여졌는지, 근로소득세를 원천징수 하는지, 사회보장제도에 관하여 근로자로 인정받는지 등의 사정은 사용자가 경제적으로 우월한 지위를 이용하여 임의로 결정 할 여지가 크기 때문에 그러한 점들이 인정되지 않는다는 것만으로 근로자성을 쉽게 부정하여서는 안된다.";
  var gap = then.getTime() - now.getTime();
  gap = Math.floor(gap / (1000 * 60 * 60 * 24) + 1);

  return (
    <SafeAreaView style={[Global.container, {backgroundColor: '#2E2E2E'}]}>
      <View style={Global.container}>
        <View style={{paddingBottom: 10},{alignItems :'center'}}>
          <View style={{flexDirection : 'row'}}>
            <View style={styles.card}>
              <Text style={[Global.text,{alignSelf: 'center'},{fontSize: 11, marginTop: '13%'}]}>{duetitle}</Text>
              <Text style={[Global.text,{alignSelf: 'center'},{fontSize: 11, marginTop: '5%'}]}>{duedate}</Text>
              <Text style={[Global.text,{alignSelf: 'center'},{fontSize: 17, marginTop: '5%', color: '#D7595A'}]}>D-{gap}</Text>
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
          <ScrollView>
            <Today/>
          </ScrollView>          
        </View>
      </View>
  </SafeAreaView>
  );
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
