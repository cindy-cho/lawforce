import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import { globalStyles } from '../styles/global';
import { Ionicons } from '@expo/vector-icons';

export default function Home({ navigation }){
    const payAlert = () => {
        Alert.alert('PREMIUM UPGRADE', '596402-01-383562 국민 조재국', [
            {text: '송금하기'}
        ]);
    };

    const [menu, setMenu] = useState([
         {title: '오늘의 학습', body: '오늘은 무엇을 공부할까요 ?', key: '1'},
         {title: 'Part1', body: "What's Part 1 ?", key: '2'},
         {title: 'Part2', body: "What's Part 2 ?", key: '3'},
         {title: 'Part3', body: "What's Part 3 ?", key: '4'},
         {title: 'Part4', body: "What's Part 4 ?", key: '5'},
         {title: 'Part5', body: "What's Part 5 ?", key: '6'},
         {title: 'Part6', body: "What's Part 6 ?", key: '7'},
         {title: 'Part7', body: "What's Part 7 ?", key: '8'},
    ]);

    return (
        <View style={globalStyles.container}>
            <View style={styles.menuContainer}>
                <FlatList
                    data={menu}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <TouchableOpacity 
                            onPress={() => navigation.navigate('MenuDetails', item)}
                            style={styles.menu}
                        >
                            <Ionicons name="md-lock" size={20} color='white' />
                            <Text style={styles.menuText}>{item.title}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
            <View>
                <TouchableOpacity
                    style={globalStyles.adContainer}
                    onPress={payAlert}
                    activeOpacity={true}
                >
                    <Text style={globalStyles.adText}>노동법 최신 판례를 보고싶다면? </Text>
                    <Text style={globalStyles.underscore}>구매하기</Text>
                    <Ionicons name="ios-arrow-forward" size={15} color="white" style={globalStyles.icon}/>
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    menuContainer: {
        backgroundColor: '#363636',
        height: 40,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    menuText:{
        color: 'white',
        fontFamily: 'gothic-bold',
        paddingRight: 20,
        paddingLeft: 5
    },
    menu:{
        flexDirection: 'row',
        alignItems: 'flex-end'
    }
});