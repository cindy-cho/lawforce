import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';

export default function B({ navigation }){

    const pressHandler = () => {
        navigation.goBack()
        //navigation.pop()
    }

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>ABOUT SCREEN</Text>
        </View>
    )
}