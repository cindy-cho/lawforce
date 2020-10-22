import React from 'react';
import PorpTypes from 'prop-types';
import { StyleSheet, View, Text, StatusBar }from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Thunderstorm: {
        iconName: 'weather-lightning',
        gradient: ['#373B44', '#4286F4'],
        title: 'Thunderstorm',
        subtitle: "Less thunder in the mouth\nand more lightning in the hand."
    },
    Drizzle: {
        iconName: 'weather-rainy',
        gradient: ['#89F7FE', '#66A6FF'],
        title: 'Drizzle',
        subtitle: 'Many a little makes a mickle.'
    },
    Rain: {
        iconName: 'weather-pouring',
        gradient: ['#00C6FB', '#005BEA'],
        title: "Raining",
        subtitle: "Save your pennies for a rainy day."
    },
    Snow: {
        iconName: 'weather-snowy-heavy',
        gradient: ['#7DE2FC', '#B9B6E5'],
        title: 'Snowing',
        subtitle: 'Do you want to build a snowman?'
    },
    Mist: {
        iconName: 'weather-fog',
        gradient: ['#000000', '#434343'],
        title: 'Mist',
        subtitle: "It's like you have no glasses on." 
    },
    Smoke: {
        iconName: 'weather-fog',
        gradient: ['#000000', '#434343'],
        title: 'Smoke',
        subtitle: "Just don't go outside."
    },
    Haze: {
        iconName: 'weather-hazy',
        gradient: ['#000000', '#434343'],
        title: 'Haze',
        subtitle: "Just don't go outside."
    },
    Dust: {
        iconName: 'weather-fog',
        gradient: ['#000000', '#434343'],
        title: 'Dust',
        subtitle: "Just don't go outside."
    },
    Fog: {
        iconName: 'weather-fog',
        gradient: ['#000000', '#434343'],
        title: 'Fog',
        subtitle: 'A fog cannot be dispelled with a fan.'
    },
    Sand: {
        iconName: 'weather-fog',
        gradient: ['#000000', '#434343'],
        title: 'Sand',
        subtitle: "Just don't go outside."
    },
    Ash: {
        iconName: 'weather-fog',
        gradient: ['#000000', '#434343'],
        title: 'Ash',
        subtitle: "Just don't go outside."
    },
    Squall: {
        iconName: 'weather-fog',
        gradient: ['#000000', '#434343'],
        title: 'Squall',
        subtitle: "Just don't go outside."
    },
    Tornado: {
        iconName: 'weather-tornado',
        gradient: ['#373B44', '#4286F4'],
        title: 'Tornado',
        subtitle: "I'm happier than a tornado in a trailer park."
    },
    Clear: {
        iconName: 'weather-sunny',
        gradient: ['#FF7300', '#FEF253'],
        title: 'Sunny',
        subtitle: 'Yesterday my life was filled with rain.'
    }, 
    Clouds: {
        iconName: 'weather-cloudy',
        gradient: ['#D7D2CC', '#304352'],
        title: 'Clouds',
        subtitle: 'Every cloud has a silver lining.'
    }
}

export default function Weather({ temp, condition }) {
    return (
            <LinearGradient
                colors={weatherOptions[condition].gradient}
                style={styles.container}
            >
                <StatusBar barStyle='white-content' />
                <View style={styles.halfContainer}>
                    <MaterialCommunityIcons 
                        size={96} 
                        name={weatherOptions[condition].iconName} 
                        color='white' 
                    />
                    <Text style={styles.temp}>{temp}°</Text>
                </View>
                <View style={{...styles.halfContainer, ...styles.textContainer}}>
                    <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                    <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
                </View>
            </LinearGradient>
    );
}

Weather.PorpTypes = {
    temp: PorpTypes.number.isRequired,
    condition: PorpTypes.oneOf([
        'Thunderstorm', 
        'Drizzle', 
        'Rain', 
        'Snow',
        'Mist',
        'Smoke',
        'Haze',
        'Dust',
        'Fog',
        'Sand',
        'Ash',
        'Squall',
        'Tornado',
        'Clear', 
        'Clouds',
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    temp:{
        fontSize: 42,
        color: 'white',

    },
    halfContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: 'white',
        fontSize: 44,
        fontWeight: '300',
        marginBottom: 10,
        alignSelf: 'center'
    },
    subtitle: {
        color: 'white',
        fontWeight: '600',
        fontSize: 24,
        alignSelf: 'flex-start'
    },
    textContainer: {
        paddingHorizontal: 20,
    }
})