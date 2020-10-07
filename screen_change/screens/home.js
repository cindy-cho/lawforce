import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Home({ navigation }){
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>HOME SCREEN</Text>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('A')
                }}
                style={globalStyles.button}
            >
                <Text style={globalStyles.buttonText}>GO TO A</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('B')
                }}
                style={globalStyles.button}
            >
                <Text style={globalStyles.buttonText}>GO TO B</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('C')
                }}
                style={globalStyles.button}
            >
                <Text style={globalStyles.buttonText}>GO TO C</Text>
            </TouchableOpacity>
        </View>
    )
}