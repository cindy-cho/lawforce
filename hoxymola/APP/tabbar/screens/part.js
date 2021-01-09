import React, { useState, useRef } from 'react';
import { StyleSheet, View, Text, Modal, FlatList, SafeAreaView, TouchableOpacity, ScrollView, Alert } from 'react-native';
import Global from '../shared/Global';
import { Entypo, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

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
        statusBarTranslucent={true}
        onRequestClose={() => setModalOpen(false)}
      >
        <SafeAreaView style={{paddingTop: 30, backgroundColor: '#242424'}}>
          <StatusBar style='light'/>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent:'space-between',paddingTop:10, paddingBottom: 10, paddingHorizontal: 15}}>
            <TouchableOpacity
              hitSlop={{top: 30, left: 30, bottom: 30, right: 30}}
              activeOpacity={1}
              onPress={() => setModalOpen(false)}
            >
              <AntDesign name='close' color='#D4D4D4' size={20}/>
            </TouchableOpacity>
            <Text style={[Global.text, {color: '#D4D4D4', fontSize: 20, lineHeight: 25 ,fontWeight: 'bold', paddingHorizontal: 15}]}>{title}</Text>
            <AntDesign name='close' color='#242424' size={20}/>
          </View>
        </SafeAreaView>
        <View style={{flex: 1, backgroundColor: '#2E2E2E', paddingHorizontal: 15, borderTopWidth: 1.5, borderTopColor: '#D4D4D4', borderBottomWidth: 1.5, borderBottomColor: '#D4D4D4'}}>
          <ScrollView 
            showsVerticalScrollIndicator={false}
            ref={scrollRef}
            bounces={false}
          >
            <Text style={[Global.text, {paddingVertical: 15, lineHeight: 27, fontFamily: 'gothic', fontSize: 18, color: '#D4D4D4', letterSpacing: 0}]}>{text}</Text>
          </ScrollView>
        </View>
        <View style={{backgroundColor: '#242424', flexDirection: 'column', height: '8%', justifyContent: 'center'}}>
          
          <View style={{justifyContent:'space-between', flexDirection: 'row'}}>
            <View style={{justifyContent:'flex-start', flexDirection: 'row'}}>
              <TouchableOpacity
                activeOpacity={1}
                onPress={prev}
              >
                <MaterialCommunityIcons name='arrow-left' color='#D4D4D4' size={30} style={{paddingHorizontal: 10}}/>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={1}
                onPress={next}
              >
                <MaterialCommunityIcons name='arrow-right'color='#D4D4D4' size={30} style={{paddingHorizontal: 10}}/>
              </TouchableOpacity>
            </View>

            <Text style={[Global.text, {fontSize: 18, color: '#D4D4D4', alignSelf: 'center', position: 'absolute', left: '46.5%'}]}>{contentIndex + 1}/{data[index-1].content.length}</Text>
            <TouchableOpacity
              activeOpacity={1}
              onPress={triger}
              style={{paddingHorizontal: 10}}
            >
              <Entypo name={eye} size={30} color='#D4D4D4' />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>  

      <View style={{backgroundColor: '#242424', paddingHorizontal: 20, paddingTop: 10, paddingBottom: 5}}>
        <Text style={[Global.text, {fontSize: 25, fontWeight: 'bold', color: 'skyblue'}]}>{label}</Text>
        <Text style={[Global.text, {fontSize: 15, fontWeight: 'bold', alignSelf: 'flex-end'}]}>{data.length}개 주제</Text>
      </View> 
      <View style={[Global.container]}>
        <FlatList
          data={data}
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
              <View style={[Global.container, {borderWidth: StyleSheet.hairlineWidth, borderBottomColor: '#2E2E2E', paddingVertical: 20, flexDirection: 'row'}]}>
                <Text style={[Global.text, {fontSize: 17, paddingRight: 50, paddingLeft: 15}]}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          }
        />
      </View>
    </SafeAreaView>
  );
}