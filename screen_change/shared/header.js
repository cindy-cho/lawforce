import React from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { MaterialIcons, Fontisto } from '@expo/vector-icons';

export default function Header({ navigation, title }) {
    const openMenu = () => {
        navigation.openDrawer();
    }

    const payAlert = () => {
        Alert.alert('PREMIUM UPGRADE', '596402-01-383562 국민 조재국', [
            {text: '송금하기'}
        ]);
    };

    return (
        <View style={styles.header}>
            <MaterialIcons name='menu' size={23} onPress={openMenu} style={styles.leftIcon} />
            <View>
                <Text style={styles.headerText}>{ title }</Text>
            </View>
            <Fontisto name='apple-pay' size={28} onPress={payAlert} style={styles.rightIcon} />
        </View>
        
    )
}

const styles = StyleSheet.create({
    header: {
        paddingTop: 20,
        width: '100%',
        height: 70,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#363636'
    },
    headerText: {
        fontFamily: 'gothic-light',
        fontSize: 25,
        color: 'white',
        letterSpacing: 1,
    },
    leftIcon: {
        paddingTop: 20,
        position: 'absolute',
        left: 16,
        color: 'white',
    },
    rightIcon: {
        paddingTop: 20,
        position: 'absolute',
        right: 16,
        color: 'white',

    },
});