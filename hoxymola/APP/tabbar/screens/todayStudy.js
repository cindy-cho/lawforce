import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, Alert, SafeAreaView, Platform } from 'react-native';
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
    <SafeAreaView style={[Global.container, {backgroundColor: '#2E2E2E'}]}>
      
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

      <View style={Global.container}>
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
            <Text style={[Global.text, {fontSize: 17, marginTop: 30}]}>2020.12.31</Text>
            <Text style={[Global.text, {fontSize: 17, marginTop: 14}]}>D-{gap}</Text>
            <Text style={[Global.text, {fontSize: 11, marginTop: 25}]}>시험일</Text>
          </Card>
          <Card>  
            
          </Card>
          <Card>
            
          </Card>
          <Card>  
            
          </Card>
          <Card>
            
          </Card>
          <Card>  
            
          </Card>
        </ScrollView> 
        </View>
        <View style={[Global.container, {paddingHorizontal: 20}]}>
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
        </View>
      </View>
      <View>
          <MaterialCommunityIcons
            name='star-face'
            color='white'
            size={35}
            style={Global.modalToggle}
            onPress={() => setModalOpen(true)}
          />
      </View>
  </SafeAreaView>
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