import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/home';
import MenuDetails from '../screens/menuDetails';
import Header from '../shared/header'
import React from 'react';
import { createAppContainer } from 'react-navigation';

const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return {
                header: () => <Header navigation={navigation} title='Santa' />,
            }
        }
    },
    MenuDetails: {
        screen: MenuDetails,
        navigationOptions: ({ navigation }) => {
            return {
                header: () => <Header navigation={navigation} title='Santa' />,
            }
        }
    },
}


const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 60 },
        title:'aa',
    }
});

export default createAppContainer(HomeStack);
