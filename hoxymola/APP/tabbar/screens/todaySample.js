import React from 'react';
import {View, Text} from 'react-native';
import Global from '../shared/Global';
import { BGGT } from '../data/BGGT';
import { GBJ_GRGGB } from '../data/GBJ_GRGGB';
import { JN } from '../data/JN';
import { NDBCR } from '../data/NDBCR';

function TodayElement({todayElement}){
    var len = todayElement.content.length;
    var idx = Math.floor(Math.random()*len);

    return(
        <View>
            <Text style={[Global.text, {color:'#D4D4D4',fontSize: 18, marginTop: 10}]}>
                {todayElement.content[idx].subtitle}
            </Text>
            <Text style={[Global.text, {marginTop:10, fontSize: 15, lineHeight : 27, color:'#D1D0CE'}]}>
                {todayElement.content[idx].text[0]}
            </Text>
        </View>
    );
}

function Today () {

    // var TM;
    // var idx1 = Math.floor(Math.random()*4);
    // if(idx1 == 0){
    //     var idx = Math.floor(Math.random()*BGGT.length);
    //     var TM = BGGT[idx];
    // }else if(idx1 == 1){
    //     var idx = Math.floor(Math.random()*GBJ_GRGGB.length);
    //     var TM = GBJ_GRGGB[idx];
    // }else if(idx1 == 2){
    //     var idx = Math.floor(Math.random()*JN.length);
    //     var TM = JN[idx];
    // }else{
    //     var idx = Math.floor(Math.random()*NDBCR.length);
    //     var TM = NDBCR[idx];
    // }

    var idx = Math.floor(Math.random()*NDBCR.length);
    var TM = NDBCR[idx];

    return (
        <View style = {{flex:1, justifyContent : "center", alignItems :'center', paddingBottom: 10}}>
            <TodayElement todayElement={TM}/>
        </View>
    );
}

export default Today;