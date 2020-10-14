import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function drawer1 ({ navigation }){
    return (
        <View style={globalStyles.drawerContainer}>
            <Text style={globalStyles.drawerText}>내 설정</Text>
            <Text style={globalStyles.drawerText}>COMING SOON..</Text>
        </View>
    )
}