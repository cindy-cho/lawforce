import { StyleSheet, Dimensions } from 'react-native';

const nGlobal = StyleSheet.create({
   Container: {
     flex: 1
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
   },
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