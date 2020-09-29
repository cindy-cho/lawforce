import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [first, setFirst] = useState('?????');
  const [second, setSecond] = useState('?????');
  const clickHandler = () => {
    setFirst('Hello');
    setSecond('World');
  }
  const clickHandler2 = () => {
    setFirst('?????');
    setSecond('?????');
  }
  
  return (

    <View style={styles.container}>
      <Text style={styles.bigText}>{first}, {second}!</Text>
      <View style={styles.buttonContainer}>
        <Button title='UPDATE' onPress={clickHandler} color='blue'/>
        <Button title='INITIALIZE' onPress={clickHandler2} color='red'/>
      </View>
      <Text></Text>
      <TextInput 
        clearTextOnFocus='ture'
        style={styles.input}
        placeholder='first'
        onChangeText={(val) => setFirst(val)}/>
      <TextInput 
        clearTextOnFocus='ture'
        style={styles.input}
        placeholder='second'
        onChangeText={(val) => setSecond(val)}/>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 5,
    width: 200,
  },
  bigText: {
    fontSize: 20,
    textAlign: 'center',
  },
  header: {
    backgroundColor: 'pink',
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderLeftWidth: 2,
    padding: 20,
  },
  boldText: {
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  normalText: {
    fontWeight: 'normal',
    fontSize: 15,
    textAlign: 'center',
    color: 'violet'
  },
  body: {
    backgroundColor: 'yellow',
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    padding: 20,
  }
});