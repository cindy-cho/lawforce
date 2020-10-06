import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function AddTodo({ submitHandler }) {
    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val);
    }

    return(
        <View>
            <TextInput
                style={styles.input} 
                placeholder='new content...'
                onChangeText={changeHandler}
                clearButtonMode='always'
            />
            <View>
                <TouchableOpacity 
                    onPress={() => submitHandler(text)}
                    style={styles.button}
                    activeOpacity={true}
                >
                    <Text style={styles.text}>ADD CONTENT</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        padding: 12,
        backgroundColor: 'coral',
        borderRadius: 3,
    },
    text: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
    },
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
})