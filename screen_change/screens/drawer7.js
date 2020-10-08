import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function drawer7 ({ navigation }){
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>내 설정</Text>
        </View>
    )
}