import React, { useState, useRef } from 'react';
import { StyleSheet, View, Text, Modal, FlatList, SafeAreaView, TouchableOpacity, ScrollView, Alert } from 'react-native';
import Global from '../shared/Global';
import { Entypo, AntDesign } from '@expo/vector-icons';
import GestureRecognizer from 'react-native-swipe-gestures';



export default function PartBasic({ label, data }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [index, setIndex] = useState(1);
  const [text, setText] = useState('aa');
  const [flag, setFlag] = useState(false);
  const [contentIndex, setContentIndex] = useState(0);
  const [eye, setEye] = useState('eye');
  const [title, setTitle] =useState('bb');
  const scrollRef = useRef();

  const triger = () => {
    if (!flag) {
      setText(data[index-1].content[contentIndex].text[0])
      setFlag(true)
      setEye('eye')
    } else {
      setText(data[index-1].content[contentIndex].text[1])
      setFlag(false)
      setEye('eye-with-line')
    }
  }
  const next = () => {
    if(contentIndex != data[index-1].content.length - 1) {
      setContentIndex( (contentIndex + 1) )
      setText(data[index-1].content[contentIndex + 1].text[0])
      setFlag(true)
      setEye('eye')
      setTitle(data[index-1].content[contentIndex + 1].subtitle)
      scrollRef.current.scrollTo({y: 0, animated: false});
    }
  }
  const prev = () => {
    if(contentIndex != 0){
      setContentIndex( (contentIndex - 1) )
      setText(data[index - 1].content[contentIndex - 1].text[0])
      setFlag(true)
      setEye('eye')
      setTitle(data[index-1].content[contentIndex - 1].subtitle)
      scrollRef.current.scrollTo({y: 0, animated: false});
    }
  }

  return (
    <SafeAreaView style={[Global.container, {backgroundColor: '#2E2E2E'}]}>
      <Modal
        visible={modalOpen}
      >
        <View style={{paddingTop: 40, backgroundColor: '#242424'}}>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent:'space-between', paddingBottom: 10, paddingHorizontal: 15}}>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => setModalOpen(false)}
            >
              <AntDesign name='close' color='#D4D4D4' size={20}/>
            </TouchableOpacity>
            <Text style={[Global.text, {color: '#D4D4D4', fontSize: 20, fontWeight: 'bold' }]}>{title}</Text>
            <Text style={[Global.text, {color: '#D4D4D4'}]}>{contentIndex + 1}/{data[index-1].content.length}</Text>
          </View>
        </View>
        <View style={{flex: 1, backgroundColor: '#2E2E2E', paddingHorizontal: 15, borderTopWidth: 1, borderTopColor: '#D4D4D4', borderBottomWidth: 1, borderBottomColor: '#D4D4D4'}}>
          <ScrollView 
            bounces={false}
            showsVerticalScrollIndicator={false}
            ref={scrollRef}
            contentContainerStyle={{flexGrow: 1}}
          >
            <GestureRecognizer
              onSwipeLeft={next}
              onSwipeRight={prev}
              config={{
                velocityThreshold: 0.3,
                directionalOffsetThreshold: 80,
              }} 
              style={{flex:1}}
            >
              <TouchableOpacity
                activeOpacity= {1}
                style={{backgroundColor: '#2E2E2E', flex: 1}}
              >
                <Text style={[Global.text, {paddingVertical: 15, lineHeight: 30, fontFamily: 'gothic', fontSize: 16, color: '#D4D4D4'}]}>{text}</Text>
              </TouchableOpacity>
            </GestureRecognizer> 
          </ScrollView>
        </View>
        <View style={{backgroundColor: '#242424'}}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={triger}
            style={{alignSelf: 'flex-end', padding: 10}}
          >
            <Entypo name={eye} size={25} color='#D4D4D4' />
          </TouchableOpacity> 
        </View>
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
                setText(item.content[0].text[0])
                setIndex(item.key)
                setFlag(true)
                setContentIndex(0);
                setTitle(item.content[0].subtitle)
                setEye('eye')
              }}
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