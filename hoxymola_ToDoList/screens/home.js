import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Alert, Modal, LogBox } from 'react-native';
import { globalStyles } from '../styles/global';
import { Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import Card from '../shared/card';
import Form from './form';
import moment from 'moment';
import { ScrollView } from 'react-native-gesture-handler';
import InfiniteScroll from 'react-native-infinite-looping-scroll';
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

export default function Home({ navigation }){
    const payAlert = () => {
        Alert.alert('PREMIUM UPGRADE', '596402-01-383562 국민 조재국', [
            {text: '송금하기'}
        ]);
    };
    const [modalOpen, setModalOpen] = useState(false);
    
    var now = new Date();
    var then = new Date("december 31, 2020");
    var gap = then.getTime() - now.getTime();
    gap = Math.floor(gap / (1000 * 60 * 60 * 24) + 1);

    return (
        <View style={styles.container}>

            <Modal
                transparent={true}
                visible={modalOpen}
            >
                <View style={styles.modalContent1}>
                    <View>
                        <Text style={{fontFamily: 'gothic-bold', fontSize: 18, alignSelf: 'center', marginTop: 30}}>진단테스트부터 시작해보자!</Text>
                        <Text style={{fontFamily: 'gothic-bold', fontSize: 18, alignSelf: 'center', marginTop: 10, marginBottom: 20}}>네 실력을 꼼꼼히 분석해줄게</Text>
                    </View>
                    <View style={{marginBottom: 20}}>
                        <Text style={styles.modalText}>현재점수 예측(정확도 90%)</Text>
                        <Text style={styles.modalText}>파트별, 유형별 실력분석</Text>
                        <Text style={styles.modalText}>필요없는 문제 예측 및 제거</Text>
                        <Text style={styles.modalText}>약점분석 기반 맞춤강의 추천</Text>
                    </View>

                </View>
                <View style={styles.modalContent2}>
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={payAlert}
                    >
                        <View style={{backgroundColor: 'skyblue', borderRadius: 30, marginHorizontal : 20, marginBottom: 5, marginTop: 25}}>
                            <Text style={{fontFamily: 'gothic-bold', fontSize: 20, color: 'white', alignSelf: 'center', padding: 15}}>진단테스트 시작하기</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => setModalOpen(false)}
                    >
                        <View style={{backgroundColor: 'gray', borderRadius: 30, marginHorizontal: 20, marginBottom: 25}}>
                            <Text style={{fontFamily: 'gothic-bold', fontSize: 20, color: 'white', alignSelf: 'center', padding: 15}}>나중에 하기</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </Modal>

            <View style={styles.cardContainer}>
                 <ScrollView 
                    horizontal 
                    disableIntervalMomentum={true}
                    snapToInterval={195+8}
                    bounces={false}
                    snapToAlignment='center'
                    showsHorizontalScrollIndicator={false}
                >
                    <Card>
                        <Text style={styles.ddayText1}>2020.12.31</Text>
                        <Text style={styles.ddayText2}>D-{gap}</Text>
                        <Text style={styles.ddayText3}>시험일</Text>
                    </Card>
                    <Card>  
                        <Text style={styles.tdayText1}>오늘의 학습</Text>
                        <Text style={styles.tdayText2}>0% 완료</Text>
                        <Text style={styles.tdayText3}>••••</Text>
                        <Text style={styles.tdayText4}>누적 학습 세트0개</Text>
                    </Card>
                    <Card>
                        <View style={styles.preContainer1}>
                            <View style={styles.preContainer2}>
                                <Text style={styles.preText1}>0</Text>
                                <Text style={styles.preText2}>예측점수</Text>
                            </View>
                            <View style={styles.HLine}></View>
                            <View style={styles.preContainer2}>
                                <Text style={styles.preText1}>840</Text>
                                <Text style={styles.preText2}>목표점수</Text>
                            </View>
                        </View>
                        <Text style={styles.preText2}>오차범위 ±20점</Text>
                    </Card>
                    <Card>  
                        <View style={styles.LCRCContainer}>
                            <View style={{flexDirection: 'row', justifyContent:"space-between"}}>
                                <Text style={styles.LCRC}>LC 0</Text>
                                <View style={styles.VLine}></View>
                            </View>
                            <View style={{flexDirection: 'row', justifyContent:"space-between"}}>
                                <Text style={styles.LCRC}>RC 0</Text>
                                <View style={styles.VLine}></View>
                            </View>
                        </View>
                        <Text style={styles.preText2}>오차범위 ±20점</Text>
                    </Card>
                    <Card>  
                    <View style={styles.preContainer1}>
                            <View style={styles.preContainer2}>
                                <Text style={styles.preText1}>1</Text>
                                <Text style={styles.preText2}>일 연속</Text>
                            </View>
                            <View style={styles.HLine}></View>
                            <View style={styles.preContainer2}>
                                <Text style={styles.preText1}>1</Text>
                                <Text style={styles.preText2}>최고기록</Text>
                            </View>
                        </View>
                        <Text style={styles.preText2}>연속학습 달성 중</Text>
                    </Card>
                </ScrollView> 
            </View>
            <View style={styles.container2}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={{color: 'gray', fontFamily: 'gothic-bold', fontSize: 12}}>T O D A Y</Text>
                    <Text style={{color: 'gray', fontFamily: 'gothic-bold', fontSize: 12}}>1 / 6</Text>
                </View>
                <Text style={{color: 'white', fontFamily: 'gothic-bold', fontSize: 17, marginTop: 12}}>진단 고사 완료 후 위젯 정보를 확인할</Text>
                <Text style={{color: 'white', fontFamily: 'gothic-bold', fontSize: 17, marginTop: 6}}>수 있습니다.</Text>


                <TouchableOpacity
                    onPress={payAlert}
                    activeOpacity={1}
                >
                    <Text style={{color: '#D7595A', marginTop: 48}}>진단고사 시작하기 ></Text>
                </TouchableOpacity>

                <MaterialCommunityIcons
                name='star-face'
                color='white'
                size={35}
                style={styles.modalToggle}
                onPress={() => setModalOpen(true)}
            />
            </View>
            
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2E2E2E',
    },
    container2: {
        flex: 1,
        backgroundColor: '#040404',
        paddingHorizontal: 25,
        paddingVertical: 33
    },
    modalToggle: {
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 100,
        marginTop: 115,
        marginBottom: 10,
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 20,
    },
    modalContent1: {
        backgroundColor: '#efefef',
        marginTop: 160,
        marginHorizontal: 50,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },
    modalContent2: {
        backgroundColor: 'white',
        marginHorizontal: 50,
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30
    },
    cardContainer: {
        flexDirection: 'row',
        marginBottom: 10
    },
    modalText: {
        fontFamily: 'gothic-bold', 
        fontSize: 18, 
        color: 'gray', 
        margin: 3,
        marginLeft: 35
    },
    ddayText1: {
        marginTop: 30,
        fontSize: 17,
        color: 'white'
    },
    ddayText2: {
        marginTop: 14,
        fontSize: 17,
        color: 'white'
    },
    ddayText3: {
        marginTop: 25,
        fontSize: 11,
        color: 'white'
    },
    tdayText1: {
        marginTop: 30,
        fontSize: 11,
        color: 'white'
    },
    tdayText2: {
        marginTop: 7,
        fontSize: 19,
        color: 'white'
    },
    tdayText3: {
        marginTop: 1,
        fontSize: 20,
        color: 'white'
    },
    tdayText4: {
        marginTop: 1,
        fontSize: 11,
        color: 'white'
    },
    preContainer1: {
        flexDirection: 'row',
        marginBottom: 15
    },
    preContainer2: {
        margin: 20,
        alignItems: 'center',
    },
    preText1: {
        fontSize: 24,
        color: 'white',
        marginTop: 10,
        marginBottom: 4
    },
    preText2: {
        fontSize: 10,
        color: 'white',
    },
    LCRCContainer:{
        marginTop: 27,
        marginBottom: 30
    },
    LCRC: {
        color: 'white',
        marginVertical: 6,
        fontSize: 12
    },
    HLine:{
        borderRightColor: 'white',
        borderRightWidth: 1,
        height: 35,
        marginTop: 35
    },
    VLine: {
        borderBottomColor: 'white', 
        borderBottomWidth: 1.5,
        width: 100, 
        height: 14,
        marginLeft: 20
    }
});