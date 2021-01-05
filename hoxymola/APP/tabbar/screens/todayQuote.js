import React from 'react';
import { View, Text } from 'react-native';
import Global from '../shared/Global';
import { QuoteLists } from '../data/QuoteText';

function QuoteElement({quoteElement}){
    return(
        <Text style = {Global.text}>
            {quoteElement.content}
        </Text>
    );
}

function Quote () {

    var idx = Math.floor(Math.random()*50);

    return (
        <View style = {{flex:1, justifyContent : "center", alignItems :'center'}}>
            <QuoteElement quoteElement={QuoteLists[idx]} />
        </View>
    );
}

export default Quote;