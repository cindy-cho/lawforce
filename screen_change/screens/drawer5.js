import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function drawer5 ({ navigation }){
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>어휘학습</Text>
        </View>
    )
}