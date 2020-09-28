import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [state, changeState] = useState({ first: '?????', second: '?????' });

  const clickHandler = () => {
    changeState({ first: 'Hello', second: 'World' });
  }
  const clickHandler2 = () => {
    changeState({ first: '?????', second: '?????' });
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.bigText}>{state.first}, {state.second}!</Text>
      <View style={styles.buttonContainer}>
        <Button title='update state' onPress={clickHandler} />
        <Button title='initialize' onPress={clickHandler2} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bigText: {
    fontSize: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
  },
  normalText: {
    fontWeight: 'normal',
    fontSize: 10,
    textAlign: 'center',
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