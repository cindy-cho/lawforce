import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import HomeStack from './homeStack';
import drawer1 from '../screens/drawer1';
import drawer2 from '../screens/drawer2';
import drawer3 from '../screens/drawer3';
import drawer4 from '../screens/drawer4';
import drawer5 from '../screens/drawer5';
import drawer6 from '../screens/drawer6';
import drawer7 from '../screens/drawer7';
import drawer8 from '../screens/drawer8';
import drawer9 from '../screens/drawer9';

const RootDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: HomeStack
    },
    학습하기: {
        screen: drawer1,
    },
    강의_큐레이션: {
        screen: drawer2,
    },
    마이노트: {
        screen: drawer3, 
    },
    특별학습: {
        screen: drawer4, 
    },
    어휘학습: {
        screen: drawer5, 
    },
    이벤트: {
        screen: drawer6, 
    },
    내설정: {
        screen: drawer7, 
    },
    고객센터: {
        screen: drawer8, 
    },
    공지사항: {
        screen: drawer9, 
    },
});

export default createAppContainer(RootDrawerNavigator);