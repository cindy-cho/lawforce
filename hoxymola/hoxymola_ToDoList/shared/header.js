import React, { useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { MaterialIcons, Fontisto, Ionicons } from '@expo/vector-icons';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

export default function Header({ navigation, title }) {
    const openMenu = () => {
        navigation.openDrawer();
    }


    const payAlert = () => {
        Alert.alert('PREMIUM UPGRADE', '596402-01-383562 국민 조재국', [
            {text: '송금하기'}
        ]);
    };

    const [menu, setMenu] = useState([
        //{title: '오늘의 학습', body: '오늘은 무엇을 공부할까요 ?', key: '1'},
        {title: 'Part1', body: "What's Part 1 ?", key: '2'},
        {title: 'Part2', body: "What's Part 2 ?", key: '3'},
        {title: 'Part3', body: "What's Part 3 ?", key: '4'},
        {title: 'Part4', body: "What's Part 4 ?", key: '5'},
        {title: 'Part5', body: "What's Part 5 ?", key: '6'},
        {title: 'Part6', body: "What's Part 6 ?", key: '7'},
        {title: 'Part7', body: "What's Part 7 ?", key: '8'},
   ]);

    return (
        <View>
            <View style={styles.top}>
                <MaterialIcons name='menu' size={23} onPress={openMenu} style={styles.leftIcon} />
                <View>
                    <Text style={styles.headerText}>{ title }</Text>
                </View>
                <Fontisto name='apple-pay' size={28} onPress={payAlert} style={styles.rightIcon} />
            </View>
            <View style={styles.bottom}>
                <View style={styles.menuContainer}>
                    <ScrollView 
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Home')}
                            style={styles.menu}
                            activeOpacity={1}
                        >
                            <Text style={styles.menuText}>오늘의 학습</Text>
                        </TouchableOpacity>
                        <FlatList
                            data={menu}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item }) => (
                                <TouchableOpacity 
                                    onPress={() => navigation.navigate('MenuDetails', item)}
                                    style={styles.menu}
                                    activeOpacity={1}
                                >
                                    <Ionicons name="md-lock" size={20} color='white' />
                                    <Text style={styles.menuText}>{item.title}</Text>
                                </TouchableOpacity>
                            )}
                        />
                    </ScrollView>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    top: {
        paddingTop: 20,
        width: '100%',
        height: 70,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#242424'
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
    menuContainer: {
        backgroundColor: '#242424',
        height: 39,
        paddingBottom: 15,
        paddingLeft: 30,
        flexDirection: 'row',
       alignItems: 'flex-end',

    },
    menuText:{
        color: 'white',
        fontFamily: 'gothic-bold',
        paddingRight: 30,
        paddingLeft: 9,
        paddingTop: 5,
        fontSize: 15,
    },
    menu:{
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
});