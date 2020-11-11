import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Card from '../shared/card';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Global from '../shared/Global';

export default function HomeScreen() {
  const payAlert = () => {
    Alert.alert('PREMIUM UPGRADE', '596402-01-383562 국민 조재국', [
        {text: '송금하기'}
    ]);
  };
  const [modalOpen, setModalOpen] = useState(false);

  var now = new Date();
  var then = new Date("december 31, 2020");
  var gap = then.getTime() - now.getTime();
  gap = Math.floor(gap / (1000 * 60 * 60 * 24) + 1);

  return (
    <View style={[Global.container, {backgroundColor: '#2E2E2E'}]}>
      
      <Modal
        transparent={true}
        visible={modalOpen}
      >
        <View style={Global.modalContent}>
          <View style={{alignItems: 'center'}}>
            <Text style={[Global.text, {fontSize: 18, color: 'black'}]}>팝업제목팝업제목팝업제목</Text>
            <Text style={[Global.text, {fontSize: 18, color: 'black'}]}>팝업제목팝업제목팝업제목</Text>
          </View>
          <View style={{paddingTop: 20, alignItems: 'center'}}>
            <Text style={Global.text, {color: 'gray', fontSize: 18, fontWeight: '700'}}>팝업내용팝업내용팝업내용</Text>
            <Text style={Global.text, {color: 'gray', fontSize: 18, fontWeight: '700'}}>팝업내용팝업내용팝업내용</Text>
            <Text style={Global.text, {color: 'gray', fontSize: 18, fontWeight: '700'}}>팝업내용팝업내용팝업내용</Text>
            <Text style={Global.text, {color: 'gray', fontSize: 18, fontWeight: '700'}}>팝업내용팝업내용팝업내용</Text>
            <Text style={Global.text, {color: 'gray', fontSize: 18, fontWeight: '700'}}>팝업내용팝업내용팝업내용</Text>
          </View>
        </View>
        <View style={Global.modalButtonContainer}>
          <TouchableOpacity
              activeOpacity={1}
              onPress={payAlert}
          >
            <View style={[Global.modalButton, {backgroundColor: 'skyblue'}]}>
                <Text style={[Global.text, {fontSize: 20}]}>팝업 버튼 1</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
              activeOpacity={1}
              onPress={() => setModalOpen(false)}
          >
            <View style={[Global.modalButton, {backgroundColor: 'gray'}]}>
                <Text style={[Global.text, {fontSize: 20}]}>닫기</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Modal>

      <View style={[Global.container]}>
        <View style={{paddingBottom: 10}}>
        <ScrollView 
          horizontal 
          disableIntervalMomentum={true}
          snapToInterval={195+8}
          bounces={false}
          snapToAlignment='center'
          showsHorizontalScrollIndicator={false}
        >
          <Card>
            {/* <Text style={styles.ddayText1}>2020.12.31</Text>
            <Text style={styles.ddayText2}>D-{gap}</Text>
            <Text style={styles.ddayText3}>시험일</Text> */}
          </Card>
          <Card>  
            {/* <Text style={styles.tdayText1}>오늘의 학습</Text>
            <Text style={styles.tdayText2}>0% 완료</Text>
            <Text style={styles.tdayText3}>••••</Text>
            <Text style={styles.tdayText4}>누적 학습 세트0개</Text> */}
          </Card>
          <Card>
            {/* <View style={styles.preContainer1}>
              <View style={styles.preContainer2}>
                <Text style={styles.preText1}>0</Text>
                <Text style={styles.preText2}>예측점수</Text>
              </View>
                <View style={styles.HLine}></View>
                <View style={styles.preContainer2}>
                  <Text style={styles.preText1}>840</Text>
                  <Text style={styles.preText2}>목표점수</Text>
                </View>
            </View>
            <Text style={styles.preText2}>오차범위 ±20점</Text> */}
          </Card>
          <Card>  
            {/* <View style={styles.LCRCContainer}>
              <View style={{flexDirection: 'row', justifyContent:"space-between"}}>
                <Text style={styles.LCRC}>LC 0</Text>
                <View style={styles.VLine}></View>
              </View>
              <View style={{flexDirection: 'row', justifyContent:"space-between"}}>
                <Text style={styles.LCRC}>RC 0</Text>
                <View style={styles.VLine}></View>
              </View>
            </View>
            <Text style={styles.preText2}>오차범위 ±20점</Text> */}
          </Card>
          <Card>
            {/* <View style={{flexDirection: 'row'}}>
              <View style={{alignItems: 'center', paddingHorizontal: 3}}>
                <View style={{borderRightColor: 'gray', borderRightWidth: 2, height: 40, marginTop: 25}}></View>
                <View style={{borderRightColor: 'white', borderRightWidth: 2, height: 3}}></View>
                <Text style={{marginTop: 10, color: 'gray', fontSize: 13}}>P1</Text>
              </View>
              <View style={{alignItems: 'center', paddingHorizontal: 3}}>
                <View style={{borderRightColor: 'gray', borderRightWidth: 2, height: 40, marginTop: 25}}></View>
                <View style={{borderRightColor: 'white', borderRightWidth: 2, height: 3}}></View>
                <Text style={{marginTop: 10, color: 'gray', fontSize: 13}}>P2</Text>
              </View>
              <View style={{alignItems: 'center', paddingHorizontal: 3}}>
                <View style={{borderRightColor: 'gray', borderRightWidth: 2, height: 40, marginTop: 25}}></View>
                <View style={{borderRightColor: 'white', borderRightWidth: 2, height: 3}}></View>
                <Text style={{marginTop: 10, color: 'gray', fontSize: 13}}>P3</Text>
              </View>
              <View style={{alignItems: 'center', paddingHorizontal: 3}}>
                <View style={{borderRightColor: 'gray', borderRightWidth: 2, height: 40, marginTop: 25}}></View>
                <View style={{borderRightColor: 'white', borderRightWidth: 2, height: 3}}></View>
                <Text style={{marginTop: 10, color: 'gray', fontSize: 13}}>P4</Text>
              </View>
              <View style={{alignItems: 'center', paddingHorizontal: 3}}>
                <View style={{borderRightColor: 'gray', borderRightWidth: 2, height: 40, marginTop: 25}}></View>
                <View style={{borderRightColor: 'white', borderRightWidth: 2, height: 3}}></View>
                <Text style={{marginTop: 10, color: 'gray', fontSize: 13}}>P5</Text>
              </View>
              <View style={{alignItems: 'center', paddingHorizontal: 3}}>
                <View style={{borderRightColor: 'gray', borderRightWidth: 2, height: 40, marginTop: 25}}></View>
                <View style={{borderRightColor: 'white', borderRightWidth: 2, height: 3}}></View>
                <Text style={{marginTop: 10, color: 'gray', fontSize: 13}}>P6</Text>
              </View>
              <View style={{alignItems: 'center', paddingHorizontal: 3}}>
                <View style={{borderRightColor: 'gray', borderRightWidth: 2, height: 40, marginTop: 25}}></View>
                <View style={{borderRightColor: 'white', borderRightWidth: 2, height: 3}}></View>
                <Text style={{marginTop: 10, color: 'gray', fontSize: 13}}>P7</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', marginTop: 16}}>
              <View style={{flexDirection: 'row', marginRight: 15}}>
                <Text style={{color: 'white', fontSize: 11}}>현재등급</Text>
                <View style={{borderTopColor: 'white', borderTopWidth: 2, width: 12, alignSelf: 'center', marginLeft: 10}}></View>
              </View>
              <View style={{flexDirection: 'row', marginLeft: 15}}>
                <Text style={{color: '#C54D4E', fontSize: 11}}>목표등급</Text>
                <View style={{borderTopColor: '#C54D4E', borderTopWidth: 2, width: 12, alignSelf: 'center', marginLeft: 10}}></View>
              </View>
            </View>  */}
          </Card>
          <Card>  
            {/* <View style={styles.preContainer1}>
              <View style={styles.preContainer2}>
                <Text style={styles.preText1}>1</Text>
                <Text style={styles.preText2}>일 연속</Text>
              </View>
              <View style={styles.HLine}></View>
              <View style={styles.preContainer2}>
                <Text style={styles.preText1}>1</Text>
                <Text style={styles.preText2}>최고기록</Text>
              </View>
            </View>
            <Text style={styles.preText2}>연속학습 달성 중</Text> */}
          </Card>
        </ScrollView> 
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={[Global.text, {fontSize: 12, color:'gray'}]}>T O D A Y</Text>
          <Text style={[Global.text, {fontSize: 12, color:'gray'}]}>1 / 6</Text>
        </View>
        <Text style={[Global.text, {fontSize: 18}]}>홈화면텍스트홈화면텍스트</Text>
        <Text style={[Global.text, {fontSize: 18}]}>홈화면텍스트홈화면텍스트</Text>
        <TouchableOpacity
          onPress={payAlert}
          activeOpacity={1}
        >
          <Text style={{color: '#D7595A', marginTop: 48}}>터치 가능한 텍스트 {'>'}</Text>
        </TouchableOpacity>
        <MaterialCommunityIcons
          name='star-face'
          color='white'
          size={35}
          style={Global.modalToggle}
          onPress={() => setModalOpen(true)}
        />
      </View>
  </View>
  );
}


//위에 주석된 부분 사용하지 않을거면 이부분도 싹다 지워도 상관없음
// const styles = StyleSheet.create({
//   ddayText1: {
//     marginTop: 30,
//     fontSize: 17,
//     color: 'white'
//   },
//   ddayText2: {
//     marginTop: 14,
//     fontSize: 17,
//     color: 'white'
//   },
//   ddayText3: {
//     marginTop: 25,
//     fontSize: 11,
//     color: 'white'
//   },
//   tdayText1: {
//     marginTop: 30,
//     fontSize: 11,
//     color: 'white'
//   },
//   tdayText2: {
//     marginTop: 7,
//     fontSize: 19,
//     color: 'white'
//   },
//   tdayText3: {
//     marginTop: 1,
//     fontSize: 20,
//     color: 'white'
//   },
//   tdayText4: {
//     marginTop: 1,
//     fontSize: 11,
//     color: 'white'
//   },
//   preContainer1: {
//     flexDirection: 'row',
//     marginBottom: 15
//   },
//   preContainer2: {
//     margin: 20,
//     alignItems: 'center',
//   },
//   preText1: {
//     fontSize: 24,
//     color: 'white',
//     marginTop: 10,
//     marginBottom: 4
//   },
//   preText2: {
//     fontSize: 10,
//     color: 'white',
//   },
//   LCRCContainer:{
//     marginTop: 27,
//     marginBottom: 30
//   },
//   LCRC: {
//     color: 'white',
//     marginVertical: 6,
//     fontSize: 12
//   },
//   HLine:{
//     borderRightColor: 'white',
//     borderRightWidth: 1,
//     height: 35,
//     marginTop: 35
//   },
//   VLine: {
//     borderBottomColor: 'white', 
//     borderBottomWidth: 1.5,
//     width: 100, 
//     height: 14,
//     marginLeft: 20
//   }
// });