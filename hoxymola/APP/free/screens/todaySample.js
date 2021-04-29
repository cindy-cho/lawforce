import React from 'react';
import { View } from 'react-native';
import HTML from 'react-native-render-html';
import { ChapterOne } from '../data/PartOne';

function TodayElement({todayElement}){

    return(
        <View>
            <HTML source={{html : todayElement.content[0].text[0]}}/>
        </View>
    );
}

function Today () {
    var TM;
    var idx = Math.floor(Math.random()*ChapterOne.length);
    var TM = ChapterOne[idx];

    return (
        <View style = {{flex:1, justifyContent : "center", alignItems :'center', paddingBottom: 10}}>
            <TodayElement todayElement={TM}/>
        </View>
    );
}

export default Today;
