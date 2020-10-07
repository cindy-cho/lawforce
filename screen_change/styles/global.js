import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 20,
    },
    titleText: {
        fontFamily: 'gothic-bold',
        fontSize: 18,
        color: '#333',
        textAlign: 'center'
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
});