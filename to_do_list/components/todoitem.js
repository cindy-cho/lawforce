import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function TodoItem({item, pressHandler}){
    return(
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <Text style={styles.item}>{item.text}</Text>
        </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
  item: {
      padding: 16,
      marginTop: 8,
      marginBottom: 8,
      borderColor: '#bbb',
      borderWidth: 1,
      borderRadius: 15,
  }  
})