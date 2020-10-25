import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export const Button = ({ index, text, onPress = () => {} }) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    <View style={styles.idxBox}>
      <Text style={styles.idx}>{index}</Text>
    </View>
    <Text style={styles.text}>{text}</Text>
    <MaterialIcons name="cancel" size={17} color="#D2D2D2" style={{position: 'absolute', right: -5}} />
  </TouchableOpacity>
);

export const ButtonContainer = ({ children }) => (
  <View style={styles.ButtonContainer}>{children}</View>
);

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    paddingVertical: 4
  },
  text: {
    fontSize: 14,
  },
  ButtonContainer: {
    marginVertical: 12,
  },
  idxBox: {
    backgroundColor: 'black',
    width: 40,
    height: 40,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15
  },
  idx: {
    color: 'white',
    fontSize: 15
  }
})