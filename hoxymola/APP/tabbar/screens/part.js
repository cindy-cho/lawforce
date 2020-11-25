import React, { useState } from 'react';
import { StyleSheet, View, Text, Modal, FlatList, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import Global from '../shared/Global';
import { Entypo } from '@expo/vector-icons';

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
        <View style={[Global.container, {padding: 30}]}>
          <Text style={[Global.text, {color: '#515151', fontSize: 18, fontWeight: 'bold', paddingVertical: 10}]}>{title}</Text>
          <Text style={[Global.text, {fontFamily: 'gothic', fontSize: 16, color: '#515151'}]}>{text}</Text>
          <Text style={[Global.text, {color: '#515151'}]}>{contentIndex + 1}/{data[index-1].content.length}</Text>
        </View>
        <View style={[Global.modalButtonContainer, {flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}]}>
          
        <TouchableOpacity
            activeOpacity={1}
            onPress={prev} 
          >
            <Entypo name='arrow-with-circle-left' size={80}/>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            onPress={triger} 
          >
            <View style={{borderWidth: 8, borderRadius: 50, width: 78, height: 78, justifyContent: 'center', alignItems: 'center'}}>
              <Entypo name={eye} size={40} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            onPress={next} 
          >
             <Entypo name='arrow-with-circle-right' size={80}/>
          </TouchableOpacity>
          
          
        </View>
        <TouchableOpacity
            activeOpacity={1}
            onPress={() => setModalOpen(false)}
          >
            <View style={[Global.modalButton, {backgroundColor: 'skyblue'}]}>
              <Text style={[Global.text, {fontSize: 20}]}>닫기</Text>
            </View>
          </TouchableOpacity>
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
                      <Text style={[Global.text, {fontSize: 15, paddingLeft: 15}]}>[{item.key}] </Text>
                      <Text style={[Global.text, {fontSize: 17, paddingRight: 65}]}>{item.title}</Text>
                  </View>
                </TouchableOpacity>
              }
          />
      </View>
    </SafeAreaView>
  );
}