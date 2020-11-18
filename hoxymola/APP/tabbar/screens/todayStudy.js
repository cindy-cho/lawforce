import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, Alert, SafeAreaView, Platform } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Card from '../shared/card';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Global from '../shared/Global';



export default function HomeScreen() {
  
  const gotoPart = () =>{
    this.props.navigation.navigate('part')
  };
  const payAlert = () => {
    Alert.alert('PREMIUM UPGRADE', '596402-01-383562 국민 조재국', [
        {text: '송금하기'}
    ]);
  };
  const [modalOpen, setModalOpen] = useState(false);

  var now = new Date();
  var then = new Date("november 20, 2020");
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
            <Text style={[Global.text, {fontSize: 18, color: 'black'}]}>북마크</Text>
          </View>
          <View style={{paddingTop: 20, alignItems: 'center'}}>
            <Text style={Global.text, {color: 'gray', fontSize: 18, fontWeight: '700'}}></Text>
          </View>
        </View>
        <View style={Global.modalButtonContainer}>
          <TouchableOpacity
              activeOpacity={1}
              onPress={payAlert}
          >
            <View style={[Global.modalButton, {backgroundColor: 'skyblue'}]}>
                <Text style={[Global.text, {fontSize: 20}]}>Part 1 - chapter 12</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
              activeOpacity={1}
              onPress={payAlert}
          >
            <View style={[Global.modalButton, {backgroundColor: 'skyblue'}]}>
                <Text style={[Global.text, {fontSize: 20}]}>Part 2 - chapter 22</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
              activeOpacity={1}
              onPress={payAlert}
          >
            <View style={[Global.modalButton, {backgroundColor: 'skyblue'}]}>
                <Text style={[Global.text, {fontSize: 20}]}>Part 3 - chapter 35</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
              activeOpacity={1}
              onPress={payAlert}
          >
            <View style={[Global.modalButton, {backgroundColor: 'skyblue'}]}>
                <Text style={[Global.text, {fontSize: 20}]}>Part 4 - chapter 46</Text>
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
            <Text style={[Global.text, {fontSize: 17, marginTop: 30}]}>2020.11.20</Text>
            <Text style={[Global.text, {fontSize: 17, marginTop: 14, color: '#D7595A'}]}>D-{gap}</Text>
            <Text style={[Global.text, {fontSize: 11, marginTop: 25}]}>3 차 면접일</Text>
          </Card>
          <Card>  
          <Text style={[Global.text, {fontSize: 17, marginTop: 18}]}>진행중인 학습</Text>
            <Text style={[Global.text, {fontSize: 17, marginTop: 14}]}>Part 3</Text>
            <Text style={[Global.text, {fontSize: 11, marginTop: 14}]}>32 <Text style={[Global.text, {fontSize: 11, color:'gray'}]}>| </Text><Text style={[Global.text, {fontSize: 11, color:'#D7595A'}]}>191</Text></Text>
            <TouchableOpacity
            onPress={gotoPart}
            activeOpacity={1}
          >
            <Text style={[Global.text, {fontSize: 11, marginTop: 25}]}>바로가기 {'>'}</Text>
          </TouchableOpacity>
          </Card>
          <Card>
          <Text style={[Global.text, {fontSize: 17, marginTop: 18}]}>부족한 학습</Text>
            <Text style={[Global.text, {fontSize: 17, marginTop: 14}]}>Part 2</Text>
            <Text style={[Global.text, {fontSize: 11, marginTop: 14, color:'lightblue'}]}>32 %</Text>
            <TouchableOpacity
            onPress={payAlert}
            activeOpacity={1}
          >
            <Text style={[Global.text, {fontSize: 11, marginTop: 25}]}>바로가기 {'>'}</Text>
          </TouchableOpacity>
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
            <Text style={[Global.text, {fontSize: 20, color:'lightblue'}]}>{'<'}오늘의 주요 판례{'>'}</Text>
            <Text style={[Global.text, {fontSize: 12, color:'gray'}]}>1 / 3</Text>
          </View>
          
          <Text style={[Global.text, {color:'white',fontSize: 18, marginTop: 10, marginBottom:15}]}>근로기준법상 근로자의 판단기준</Text>
          <ScrollView>
          <Text style={[Global.text, {marginTop:25, marginBottom: 30, fontSize: 13}]}>근로기준법상 근로자에 해당하는지 여부는 계약의 형식이
           고용계약인지 도급계약인지보다 그 실질에 있어 근로자가 사업 또는 사업장에 임금을 목적으로 종속적인 관계에서 사용자에게 근로를 제공하였는지 여부에 따라
           판단하여야하고, 여기에서 종속적인 관계가 있는지 여부는 업무 내용을 사용자가 정하고 취업규칙 또는 복무규정 등의 적용을 받으며, 업무 수행과정에서
           사용자가 상당한 지휘 명령을 하는지, 사용자가 근무시간과 근무장소를 지정하고 근로자가 이에 구속을 받는지, 노무 제공자가 스스로 비품 및 원자재나 작업도구 등을 소유하거나
           제 3자를 고용하여 업무를 대행케 하는 등 독립하여 자신의 계산으로 사업을 영위할 수 있는지, 노무 제공을 통한 이윤의 창출과 손실의 초래 등 위험을 스스로 안고 있는지,
           보수의 성격이 근로 자체의 대상적 성격인지, 근로제공 관계의 계속성과 사용자에 대한 전속성의 유무와 그 정도, 기본급이나 고정급이 정하여 졌는지 및 근로소득세의
           원천징수 여부 등 보수에 관한 사항, 사회보장제도에 관한 법령에서 근로자로서 지위를 인정받는지 등의 경제적, 사회적 여러 조건을 종합하여 판단하여야 한다.
           다만, 기본급이나 고정급이 정하여졌는지, 근로소득세를 원천징수 하는지, 사회보장제도에 관하여 근로자로 인정받는지 등의 사정은 사용자가 경제적으로 우월한 지위를 이용하여
           임의로 결정 할 여지가 크기 때문에 그러한 점들이 인정되지 않는다는 것만으로 근로자성을 쉽게 부정하여서는 안된다.
        </Text>          
          </ScrollView>
          <Text style={{color: '#D7595A', marginTop: 100, marginBottom: 30}}>나의 북마크 확인하기 {'>'}</Text>
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
