import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container:{
        flex: 1,
    },
    titleText: {
        fontFamily: 'gothic-bold',
        fontSize: 18,
        color: '#333',
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
    },
    button: {
        backgroundColor: 'coral',
        padding: 10,
        borderRadius: 10,
        marginVertical: 3,
    },
    buttonText: {
        fontFamily: 'gothic-bold',
        color: 'white',
        textAlign: 'center',
    },
    menuContainer:{
        padding: 20
    },
    menuText: {
        fontFamily: 'gothic-bold',
        fontSize: 30
    },
    adContainer: {
        backgroundColor: '#DF6881',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 30,
    },
    adText: {
        fontFamily: 'gothic',
        fontSize: 13,
        color: 'white'
    },
    underscore: {
        fontFamily: 'gothic',
        fontSize: 13,
        textDecorationLine: 'underline',
        color: 'white'
    },
    icon: {
        paddingLeft: 110
    }
});