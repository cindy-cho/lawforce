import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';

export default function A({ navigation }){

    const pressHandler = () => {
        navigation.goBack()
        //navigation.pop()
    }

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>AAAAA</Text>
            <TouchableOpacity
                style={globalStyles.button}
                onPress={pressHandler}
            >
                <Text style={globalStyles.buttonText}>BACK TO HOME SCREEN</Text>
            </TouchableOpacity>            
        </View>
    )
}