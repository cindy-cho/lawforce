import { StyleSheet, Dimensions } from 'react-native';

const screen = Dimensions.get('window');

export default StyleSheet.create({
    base:{
        backgroundColor: '#242424' ,
        flex: 1
    },
    container: {
        flex: 1,
    },
    header: {
        width: '100%',
        height: 70,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#242424',
        paddingTop: 20,
    },
    text: {
        fontFamily: 'gothic-bold',
        color: '#D4D4D4',
        fontSize: 15
    },
    icon: {
        color: '#D4D4D4',
        padding: 16
    },
    adContainer: {
        backgroundColor: '#DF6881',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 30,
    },
    modalContent: {
        flex: 1,
        top: screen.height / 10,
        backgroundColor: '#EFEFEF',
        width: screen.width * 3 / 4,
        height: screen.height / 5,
        alignSelf: 'center',
        paddingTop: 30,
        paddingHorizontal: 35,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30, 
    },
    modalButtonContainer: {
        backgroundColor: '#FFFFFF',
        width: screen.width * 3 / 4,
        alignSelf: 'center',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        paddingVertical: 20
    },
    modalButton: {
        borderRadius: 30, 
        marginHorizontal: 20,
        marginVertical: 5,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalToggle: {
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 10,
        alignSelf: 'center',
        padding: 10,
        position: 'absolute',
        bottom: 10
    }
    
})