import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const Button = ({ index, text, onPress = () => {} }) => {
  const [flag, setFlag] = useState(false);
  const [icon, setIcon] = useState('close-circle');
  const [idxBox, setIdxBox] = useState([styles.idxBox]);
  const [text2, setText2] = useState([styles.text]);

  const triger = () => {
    if (flag) {
      setFlag(false);
      setIcon('close-circle');
      setIdxBox(styles.idxBox);
      setText2(styles.text);
      

    } else {
      setFlag(true);
      setIcon('restore');
      setIdxBox([styles.idxBox, { backgroundColor: '#B9B9B9' }]);
      setText2([styles.text, { textDecorationLine: 'line-through', color: '#B9B9B9' }]);
    }
  }

  return(
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <View style={idxBox}>
        <Text style={styles.idx}>{index}</Text>
      </View>
      <Text style={text2}>{text}</Text>
        <TouchableOpacity style={[styles.idxBox, styles.cancel]} onPress={triger}>
          <MaterialCommunityIcons name={icon} size={17} color="#D2D2D2"/>
        </TouchableOpacity>
    </TouchableOpacity>
  );
};

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
  },
  cancel: {
    position: 'absolute', 
    right: -5, 
    backgroundColor: 'white', 
    marginRight: 0, 
    borderRadius: 0
  },
  gray: {
    backgroundColor: 'red'
  }
})