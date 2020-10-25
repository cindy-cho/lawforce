import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import QuizIndex from './screens/QuizIndex';
import Quiz from './screens/Quiz';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const MainStack = createStackNavigator({
  QuizIndex: {
    screen: QuizIndex,
    navigationOptions: {
      headerTitle: 'Quiz'
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.getParam('title'),
      headerTintColor: 'white',
      headerStyle: { backgroundColor: '#242424' },
      headerTitleStyle: { left: 10, fontSize: 18},
      headerTitleAlign: 'left',
      headerLeft: () => false,
      headerRight: () => (
        <TouchableOpacity activeOpacity={1} onPress={() => { navigation.goBack() }}>
            <MaterialCommunityIcons name='close' size={25} style={{color: 'white'}}/>
        </TouchableOpacity>
      ),
      headerRightContainerStyle: {right: 30}
    })
  }
});

export default createAppContainer(MainStack);