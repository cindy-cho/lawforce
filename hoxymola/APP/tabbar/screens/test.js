import React from 'react';
import { View, Text } from 'react-native';
import Global from '../shared/Global';

export default function test() {
    return (
      <View style={{backgroundColor: '#2E2E2E', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={[Global.text, {fontSize: 30}]}>준비중</Text>
      </View>
    );
}