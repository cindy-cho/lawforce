import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard, TouchableOpacity, Text } from 'react-native';
import * as Font from 'expo-font';
import Header from './components/header'
import TodoItem from './components/todoitem'
import AddTodo from './components/addTodo'
import { AppLoading } from 'expo';
//import Sandbox from './components/sandbox'

const getFonts = () => Font.loadAsync({
  'gothic': require('./assets/fonts/NanumBarunGothic.ttf'),
  'gothic-bold': require('./assets/fonts/NanumBarunGothicBold.ttf'),
  'gothic-light': require('./assets/fonts/NanumBarunGothicLight.ttf'),
  'gothic-ultralight': require('./assets/fonts/NanumBarunGothicUltraLight.ttf')
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const [todo, setTodo] = useState([
    {text: '노동법의 법원', key: '1'},
    {text: '노동법상 권리 · 의무의 주체', key: '2'},
    {text: '근로기준법상 근로자', key: '3'},
    {text: '근로계약 당사자의 권리 · 의무', key: '10'},
    {text: '근로자의 취업청구권', key: '11'},
    {text: '근로계약의 효력', key: '12'},
    {text: '기간제 근로자 근로계약기간의 보호', key: '51'},
    {text: '기간제 근로자 차별적 처우 금지 및 기타 보호', key: '52'},
    {text: '단시간근로자에 대한 보호', key: '53'},
    {text: '근로3권', key: '58'},
    {text: '단결권 (단결강제 · 소극적 단결권)', key: '59'},
    {text: '노동조합의 설립 요건', key: '60'}
  ]);

  const initiate = () => {
    setTodo([
      {text: '노동법의 법원', key: '1'},
      {text: '노동법상 권리 · 의무의 주체', key: '2'},
      {text: '근로기준법상 근로자', key: '3'},
      {text: '근로계약 당사자의 권리 · 의무', key: '10'},
      {text: '근로자의 취업청구권', key: '11'},
      {text: '근로계약의 효력', key: '12'},
      {text: '기간제 근로자 근로계약기간의 보호', key: '51'},
      {text: '기간제 근로자 차별적 처우 금지 및 기타 보호', key: '52'},
      {text: '단시간근로자에 대한 보호', key: '53'},
      {text: '근로3권', key: '58'},
      {text: '단결권 (단결강제 · 소극적 단결권)', key: '59'},
      {text: '노동조합의 설립 요건', key: '60'}
    ])
  };
  
  const pressHandler = (key) => {
    setTodo((prevTodo) => {
      return prevTodo.filter(todo => todo.key != key);
    })
  };

  const submitHandler = (text) => {
    if(text.length > 3){
      setTodo((prevTodo) => {
        return [
          { text: text, key: Math.random().toString() },
          ...prevTodo
        ];
      });
    }
    else{
      Alert.alert('OPPS!', 'Contents must be over 3 chars long.', [
        {text: 'Understood', onPress: () => console.log('alert closed')}
      ])
    }
  };

  if(fontsLoaded){
    return (
      //<Sandbox />
      <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss();
        console.log('dismissed keyboard');
      }}>
        <View style={styles.container}>
          <Header />
            <View style={styles.content}>
              <AddTodo submitHandler={submitHandler}/>
              <View style={styles.list}>
                <FlatList 
                  showsVerticalScrollIndicator={false}
                  data={todo}
                  renderItem={({item}) => (
                    <TodoItem item={item} pressHandler={pressHandler}/>
                  )}
                />
              </View>
              <TouchableOpacity 
                style={styles.button}
                onPress={initiate}
                activeOpacity={true}
              >
                <Text style={styles.text}>INITIATE</Text>
              </TouchableOpacity>
            </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
  else{
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    flex: 1,
    marginVertical: 20,
  },
  button: {
    padding: 12,
    backgroundColor: 'coral',
    borderRadius: 3,
  },
  text: {
    fontFamily: 'gothic-bold',
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
});