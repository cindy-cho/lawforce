import React from 'react';
import {View, Text} from 'react-native';
import Global from '../shared/Global';
import { BGGT } from '../data/BGGT';

function TodayElement({todayElement}){
    return(
        <View>
            <Text style={[Global.text, {color:'white',fontSize: 18, marginTop: 10}]}>
                {todayElement.title}
            </Text>
            <Text style={[Global.text, {marginTop:10, fontSize: 15, lineHeight : 27, color:'#D1D0CE'}]}>
                {todayElement.content[0][0].text}
            </Text>
        </View>
    );
}

function Today () {

    var idx = Math.floor(Math.random()*6);

    return (
        <View style = {{flex:1, justifyContent : "center", alignItems :'center'}}>
            <TodayElement todayElement={BGGT[idx]} />
        </View>
    );
}

export default Today;