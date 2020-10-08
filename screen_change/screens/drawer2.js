import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function drawer2 ({ navigation }){
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>강의 큐레이션</Text>
        </View>
    )
}