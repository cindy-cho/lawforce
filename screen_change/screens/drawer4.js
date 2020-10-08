import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function drawer4 ({ navigation }){
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>특별학습</Text>
        </View>
    )
}