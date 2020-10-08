import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function drawer1 ({ navigation }){
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>학습하기</Text>
        </View>
    )
}