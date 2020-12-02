import React, { useState } from 'react';
import { StyleSheet, View, Text, Modal, FlatList, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import Global from '../shared/Global';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';

export default function PartBasic({ label, data }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [index, setIndex] = useState(1);
  const [text, setText] = useState('aa');
  const [flag, setFlag] = useState(false);
  const [contentIndex, setContentIndex] = useState(0);
  const [eye, setEye] = useState('eye');
  const [title, setTitle] =useState('bb');

  const triger = () => {
    if (!flag) {
      setText(data[index - 1].content[contentIndex][0].text)
      setFlag(true)
      setEye('eye')
    } else {
      setText(data[index - 1].content[contentIndex][1].text)
      setFlag(false)
      setEye('eye-with-line')
    }
  }
  const next = () => {
    if(contentIndex != data[index-1].content.length - 1) {
      setContentIndex( (contentIndex + 1) )
      setText(data[index - 1].content[contentIndex + 1][0].text)
      setFlag(true)
      setEye('eye')
    }
  }
  const prev = () => {
    if(contentIndex != 0){
      setContentIndex( (contentIndex - 1) )
      setText(data[index - 1].content[contentIndex - 1][0].text)
      setFlag(true)
      setEye('eye')
    }
  }

  return (
    <SafeAreaView style={[Global.container, {backgroundColor: '#2E2E2E'}]}>
      <Modal
          visible={modalOpen}
      >
        <SafeAreaView style={{flex:1}}>
          <StatusBar style={'dark'}/>

          <View style={[Global.container, {paddingTop:60,paddingLeft:50,paddingRight:50}]}>
            <Text style={[Global.text, {textAlign : 'right',color: '#515151'}]}>{contentIndex + 1}/{data[index-1].content.length}</Text>
            <Text style={[Global.text, {color: '#515151', fontSize: 18, fontWeight: 'bold', paddingVertical: 10}]}>{title}</Text>
            <ScrollView
              showsVerticalScrollIndicator={false}
            >
              <Text style={[Global.text, {lineHeight : '30', fontFamily: 'gothic', fontSize: 16, color: '#515151'}]}>{text}</Text>
            </ScrollView>
          </View>
          <View style={[Global.modalButtonContainer, {justifyContent: 'space-between',flexDirection: 'row', alignItems: 'center'}]}>
            
          <TouchableOpacity
              activeOpacity={1}
              onPress={prev} 
            >
            <Ionicons name='md-arrow-dropleft-circle' color='#2E2E2E' size={70}/>
            </TouchableOpacity>
          
            <TouchableOpacity
              activeOpacity={1}
              onPress={triger}
            >
              <View style={{borderColor:'#2E2E2E',borderWidth: 6, borderRadius: 50, width: 65, height: 65, justifyContent: 'center', alignItems: 'center'}}>
                <Entypo name={eye} size='40' color='#2E2E2E' />
              </View>
            </TouchableOpacity>
    
            <TouchableOpacity
              activeOpacity={1}
              onPress={next} 
            >
              <Ionicons color='#2E2E2E' name='md-arrow-dropright-circle' size={70}/>
            </TouchableOpacity>
            
            
          </View>
          <TouchableOpacity
              activeOpacity={1}
              onPress={() => setModalOpen(false)}
            >
            <View style={[Global.modalButton, {marginLeft:'10%',width:'80%',marginBottom:60,backgroundColor: 'skyblue'}]}>
              <Text style={[Global.text, {fontSize: 20}]}>닫기</Text>
            </View>
          </TouchableOpacity>
        </SafeAreaView>
      </Modal> 

      <View style={{backgroundColor: '#242424', padding: 20}}>
        <Text style={[Global.text, {fontSize: 25, fontWeight: 'bold', color: 'skyblue'}]}>{label}</Text>
        <Text style={[Global.text, {fontSize: 15, fontWeight: 'bold', alignSelf: 'flex-end'}]}>{data.length}개 주제</Text>
      </View> 
      <View style={[Global.container]}>
          <FlatList
              data={data}
              bounces='false'
              renderItem={({ item }) => 
                <TouchableOpacity
                  onPress={() => {
                      setModalOpen(true)
                      setText(item.content[0][0].text)
                      setIndex(item.key)
                      setFlag(true)
                      setContentIndex(0);
                      setTitle(item.title)
                    }
                  }
                >
                  <View style={[Global.container, {borderColor: 'black', borderWidth: StyleSheet.hairlineWidth, borderBottomColor: '#2E2E2E', paddingVertical: 20, flexDirection: 'row'}]}>
                      <Text style={[Global.text, {fontSize: 17, paddingRight: 50, paddingLeft: 15}]}>{item.title}</Text>
                  </View>
                </TouchableOpacity>
              }
          />
      </View>
    </SafeAreaView>
  );
}