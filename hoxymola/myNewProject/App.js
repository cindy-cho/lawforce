import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Header from './components/header'
import TodoItem from './components/todoitem'

export default function App() {
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
    {text: '노동조합의 설립 요건', key: '60'},
  ])

  const pressHandler = (key) => {
    setTodo((prevTodo) => {
      return prevTodo.filter(todo => todo.key != key);
    })
  };

  return (
    <View style={styles.container}>
      <Header />
        <View style={styles.list}>
          <FlatList 
            showsVerticalScrollIndicator={false}
            data={todo}
            renderItem={({item}) => (
              <TodoItem item={item} pressHandler={pressHandler}/>
            )}
          />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  list: {
    paddingHorizontal: 40,
    marginTop: 20,
    marginBottom: 100,
  },
});