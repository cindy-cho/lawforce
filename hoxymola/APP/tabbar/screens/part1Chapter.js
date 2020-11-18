import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ChapterList = () =>  {
    return(
        <View>

            <View style={styles.container}>
                <Text style={styles.text}>노동법의 법원</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.text}>노동법의 권리, 의무의 주체</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.text}>근로기준법상 근로자</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.text}>임원의 근로기준법상 근로자성</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.text}>노동조합법상 근로자</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.text}>특수형태근로종사자</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.text}>취업자격을 가지지 않은 외국인 근로자</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.text}>근로기준법상 사용자</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.text}>노동조합법상 사용자</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderBottomColor: '#bbb',
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      text: {
        flex: 5,
        fontWeight: '500',
        fontSize: 18,
        marginVertical: 20,
        width: 100,
      },
      circle: {
        width: 30,
        height: 30,
        borderRadius: 15,
        borderColor: 'blue',
        borderWidth: 2,
        marginRight: 20,
        marginLeft: 20,
      },   
});

export default ChapterList;