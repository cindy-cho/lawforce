import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

export default class Loginscreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Image source={require('../images/4.png')} style={{position: 'absolute', top: 60, width:100, height: 100}}/>
                <Text style={styles.header}>Welcome To Sign Up</Text>
                <Text style={styles.subheader}>After Registration start your study career, and enjoy !</Text>
                <View style={styles.inputone}>
                    <View style={styles.icon}>
                        <Image source={require('../images/phone.png')} style={{width: 20, height: 20}}/>
                    </View>
                    <View style={styles.title}>
                        <Text style={{color: 'rgba(0, 0, 0, 0.5)'}}>Please Enter Your Mobile Number</Text>
                    </View>
                </View>
                <View style={styles.inputtwo}>
                    <View style={styles.icon}>
                        <Image source={require('../images/lock.png')} style={{width: 20, height: 20}}/>
                    </View>
                    <View style={styles.title}>
                        <Text style={{color: 'rgba(0, 0, 0, 0.5)'}}>6-10 character of numbers or letters</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => {this.props.navigation.navigate('Login')}}>
                    <View style={styles.btn}>
                        <Text style={{fontSize: 13, color: '#fff', textAlign: 'center'}}>Sign Up</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF'
    },
    header: {
        fontWeight: 'bold',
        fontSize: 28,
        position: 'absolute',
        top: 170,
    },
    subheader: {
        fontSize: 15,
        color: 'rgba(0, 0, 0, 0.5)',
        textAlign: 'center',
        position: 'absolute',
        top: 205,
        paddingHorizontal: 10
    },
    inputone: {
        width: 320,
        height: 50,
        backgroundColor: '#F2F2FF',
        borderRadius: 5,
        display: 'flex',
        flexDirection: 'row'
    },
    inputtwo: {
        width: 320,
        height: 50,
        backgroundColor: '#F2F2FF',
        borderRadius: 5,
        top: 20,
        display: 'flex',
        flexDirection: 'row'
    },
    icon: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.5
    },
    title: {
        flex: 5,
        justifyContent: 'center',
    },
    btn: {
        top: 85,
        alignSelf: 'center',
        width: 320,
        height: 55,
        backgroundColor: '#EB2075',
        borderRadius: 10,
        justifyContent: 'center'
    },
})