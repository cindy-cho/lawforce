import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Global from '../shared/Global';
import Quote from './todayQuote';
import Today from './todaySample';

export default function HomeScreen() {
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
