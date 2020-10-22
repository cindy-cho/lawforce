import React from 'react';
import { View, Text, StyleSheet, Alert, Image, ImageBackground } from 'react-native';
import { globalStyles } from '../styles/global';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures'

const payAlert = () => {
    Alert.alert('PREMIUM UPGRADE', '596402-01-383562 국민 조재국', [
        {text: '송금하기'}
    ]);
};

export default function MenuDetails({ navigation }){

    return (
        <GestureRecognizer
            onSwipeLeft={() => navigation.goBack()}
            onSwipeRight={() => navigation.goBack()}
        >
            <View style={globalStyles.Container}>
                <View>
                    <TouchableOpacity
                        onPress={payAlert}
                        style={globalStyles.adContainer}
                        activeOpacity={1}
                    >
                        <Text style={globalStyles.adText}>{ navigation.getParam('title')} 학습을 하고 싶다면? </Text>
                        <Text style={globalStyles.underscore}>구매하기</Text>
                        <Ionicons name="ios-arrow-forward" size={15} color="white" style={globalStyles.icon}/>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.contents}>
                    <ImageBackground source={require('../assets/waveBackground.png')} style={styles.image}>
                        <View style={styles.up}>
                            <View style={styles.name}>
                                <Text style={styles.text}>노동법</Text>
                                <Text style={styles.text}>{ navigation.getParam('title') }</Text>
                            </View>
                            <TouchableOpacity
                                onPress={payAlert}
                                activeOpacity={1}
                                style={styles.study}
                            >
                                <View>
                                    <Text style={styles.studyText}>학습하기</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.down}>
                            <View style={styles.premium}>
                                <Text style={styles.premiumText}>해당 파트는 프리미엄 버전에서</Text>
                                <Text style={styles.premiumText}>사용 가능합니다</Text>
                            </View>
                        </View>
                    </ImageBackground>
                </View>

            </View>
        </GestureRecognizer>
        
    )
}

const styles = StyleSheet.create({
    menuContainer: {
        backgroundColor: '#242424',
        height: 40,
        padding: 10,
        alignItems: 'center',
    },
    menuText:{
        color: 'white',
        fontFamily: 'gothic-bold',
        paddingTop: 5
    },
    up: {
        paddingTop: 40,
        flexDirection: 'row',
        paddingBottom: 40,
        paddingHorizontal: 25,
        justifyContent: 'space-between'
    },
    down: {
        paddingTop: 10,
        paddingHorizontal: 25,
    },
    text: {
        textTransform: 'uppercase',
        fontFamily: 'gothic-bold',
        fontSize: 25,
        color: 'white',
        padding: 5
    },
    contents: {
        //paddingTop: 40,
        backgroundColor: '#242424',
        height: 290,
    },
    study: {
        marginTop: 10,
        borderRadius: 30,
        width: 120,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#5D5D5D',
    },
    studyText:{
        fontSize: 17,
        fontFamily: 'gothic-bold',
    },
    premiumText: {
        color: '#E66A84',
        paddingVertical: 5,
        fontSize: 19
    },
    image: {
        width: '100%',
        height: '100%'
    }
});