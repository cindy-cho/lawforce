import React from 'react';
import { View, Text } from 'react-native';
import Global from '../shared/Global';
import { ChapterThree } from '../data/PartThree';
import { ChapterTwo } from '../data/PartTwo';
import { ChapterFour } from '../data/PartFour';
import { ChapterOne } from '../data/PartOne';

function TodayElement({todayElement}){

    return(
        <View>
            <Text style={[Global.text, {color:'#D4D4D4',fontSize: 18, marginTop: 10}]}>
                {todayElement.content[0].subtitle}
            </Text>
            <Text style={[Global.text, {marginTop:10, fontSize: 15, lineHeight : 27, color:'#D1D0CE'}]}>
                {todayElement.content[0].text[0]}
            </Text>
        </View>
    );
}

function Today () {
    var TM;
    var idx1 = Math.floor(Math.random()*4);
    if (idx1 == 0) {
        var idx = Math.floor(Math.random()*ChapterThree.length);
        var TM = ChapterThree[idx];
    } 
    else if (idx1 == 1) {
        var idx = Math.floor(Math.random()*ChapterTwo.length);
        var TM = ChapterTwo[idx];
    }
    else if (idx1 == 2) {
        var idx = Math.floor(Math.random()*ChapterFour.length);
        var TM = ChapterFour[idx];
    }
    else {
        var idx = Math.floor(Math.random()*ChapterOne.length);
        var TM = ChapterOne[idx];
    }

    return (
        <View style = {{flex:1, justifyContent : "center", alignItems :'center', paddingBottom: 10}}>
            <TodayElement todayElement={TM}/>
        </View>
    );
}

export default Today;
