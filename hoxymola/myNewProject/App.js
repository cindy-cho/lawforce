import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>"Hello World!"</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.boldText}>Lorem ipsum dolor sit amet.</Text>
        <Text style={styles.normalText}>Lorem ipsum dolor sit amet.</Text>
        <Text style={styles.normalText}>Lorem ipsum dolor sit amet.</Text>
      </View>
      <StatusBar style="auto" />
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
    textAlign: 'center',
    textTransform: 'uppercase',
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