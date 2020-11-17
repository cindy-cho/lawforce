import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Global from '../shared/Global';

const payAlert = () => {
  Alert.alert('PREMIUM UPGRADE', '596402-01-383562 국민 조재국', [
      {text: '송금하기'}
  ]);
};

export default function Part1({ label }) {
  return (
    <View style={[Global.container, {backgroundColor: '#2E2E2E'}]}>
      <View>
        <TouchableOpacity
          onPress={payAlert}
          style={Global.adContainer}
          activeOpacity={1}
          
        >
          <Text style={[Global.text, {fontSize: 13}]}>{label}</Text>
          <Ionicons name="ios-arrow-forward" size={15} color="white" style={{position: 'absolute', right: 30}}/>
        </TouchableOpacity>
        {/* 터치가능한 영역 */}
        {/* 빼버려도 상관 없음 */}
      </View>
      
      { <View style={styles.contents}>
        <ImageBackground source={require('../assets/waveBackground.png')} style={styles.image}>
          <View style={styles.up}>
            <View style={styles.name}>
              <Text style={styles.text}>노동법</Text>
              <Text style={styles.text}>{label}</Text>
            </View>
            <TouchableOpacity
              onPress={payAlert}
              activeOpacity={1}
              style={styles.study}
            >
              <View>
                <Text style={styles.studyText}>학습하기</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.down}>
            <View style={styles.premium}>
              <Text style={styles.premiumText}>해당 파트는 프리미엄 버전에서</Text>
              <Text style={styles.premiumText}>사용 가능합니다</Text>
            </View>
          </View>
        </ImageBackground>
      </View> }
    </View>
  );
}


//위에 주석된 부분 사용하지 않을거면 이부분 싹다 지워도 상관없음
 