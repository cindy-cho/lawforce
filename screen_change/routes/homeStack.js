import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import A from '../screens/A';
import B from '../screens/B';
import C from '../screens/C';

const screens = {
    Home: {
        screen: Home
    },
    A: {
        screen: A
    },
    B: {
        screen: B
    },
    C: {
        screen: C
    },
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);