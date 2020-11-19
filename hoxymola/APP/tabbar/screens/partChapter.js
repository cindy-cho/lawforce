import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, SafeAreaView} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Global from '../shared/Global';

const ChapterList = ({ data }) =>  {
    return(
        <View style={[Global.container]}>
            <FlatList
                data={data}
                bounces='false'
                renderItem={({ item }) => 
                    <View style={[Global.container, {borderColor: 'black', borderWidth: StyleSheet.hairlineWidth, borderBottomColor: '#2E2E2E', paddingVertical: 20, flexDirection: 'row'}]}>
                        <Text style={[Global.text, {fontSize: 15, paddingLeft: 15}]}>[{item.key}] </Text>
                        <Text style={[Global.text, {fontSize: 17, paddingRight: 65}]}>{item.title}</Text>
                    </View>
                }
            />
        </View>
    );
};

export default ChapterList;