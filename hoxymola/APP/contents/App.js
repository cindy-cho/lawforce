import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native'
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

const getFonts = () => Font.loadAsync({
  'gothic': require('./assets/fonts/NanumBarunGothic.ttf'),
  'gothic-bold': require('./assets/fonts/NanumBarunGothicBold.ttf'),
  'gothic-light': require('./assets/fonts/NanumBarunGothicLight.ttf'),
  'gothic-ultralight': require('./assets/fonts/NanumBarunGothicUltraLight.ttf')
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleText1}>Contents</Text>
          <Text style={styles.titleText2}>차례</Text>
        </View>

        <View style={styles.content}>

          <ScrollView
            bounces={false}
            contentInset={{bottom: 40}}
          >
            <View style={styles.Hline}></View>
            <Collapse>
              <CollapseHeader>
                <View style={styles.header}>
                  <Text style={styles.headerText1}>제1편</Text>
                  <Text style={styles.headerText2}>노동법총론</Text>
                </View>
              </CollapseHeader>
              <CollapseBody>
                <View style={styles.body}>
                  <Text style={styles.bodyText}>[CHAP 01] 노동법의 법원</Text>
                  <Text style={styles.bodyText}>[CHAP 02] 노동법상 권리·의무의 주체</Text>
                  <Text style={styles.bodyText}>[CHAP 03] 근로기준법상 근로자</Text>
                  <Text style={styles.bodyText}>[CHAP 04] 임원의 근로기준법상 근로자성</Text>
                  <Text style={styles.bodyText}>[CHAP 05] 노동조합법상 근로자</Text>
                  <Text style={styles.bodyText}>[CHAP 06] 특수형태근로종사자</Text>
                  <Text style={styles.bodyText}>[CHAP 07] 취업자격을 가지지 않은 외국인 근로자</Text>
                  <Text style={styles.bodyText}>[CHAP 08] 근로기준법상 사용자</Text>
                  <Text style={styles.bodyText}>[CHAP 09] 노동조합법상 사용자</Text>
                </View>
              </CollapseBody>
            </Collapse>

            <View style={styles.Hline}></View>
            <Collapse>
              <CollapseHeader>
                <View style={styles.header}>
                  <Text style={styles.headerText1}>제2편</Text>
                  <Text style={styles.headerText2}>개별적 근로관계법</Text>
                </View>
              </CollapseHeader>
              <CollapseBody>
                <View style={styles.body}>
                  <Text style={styles.bodyText}>[CHAP 10] 근로계약 당사자의 권리·의무</Text>
                  <Text style={styles.bodyText}>[CHAP 11] 근로자의 취업청구권</Text>
                  <Text style={styles.bodyText}>[CHAP 12] 근로계약의 효력</Text>
                  <Text style={styles.bodyText}>[CHAP 13] 근로계약서의 작성 및 교부의무</Text>
                  <Text style={styles.bodyText}>[CHAP 14] 취업규칙의 작성·불의익하지 않은 변경</Text>
                  <Text style={styles.bodyText}>[CHAP 15] 취업규칙 불이익변경</Text>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={styles.bodyText}>[CHAP 16] </Text>
                    <View style={{flex: 1}}><Text style={styles.bodyText}>불이익 변경절차(동의)를 얻지 못한 취업규칙의 효력</Text></View>
                  </View>
                  <Text style={styles.bodyText}>[CHAP 17] 차별 금지(근로기준법·남녀고용평등법)</Text>
                  <Text style={styles.bodyText}>[CHAP 18] 직장 내 성희롱·괴롭힘 금지</Text>
                  <Text style={styles.bodyText}>[CHAP 19] 근로기준법 기본원칙</Text>
                  <Text style={styles.bodyText}>[CHAP 20] 위약예정의 금지</Text>
                  <Text style={styles.bodyText}>[CHAP 21] 전차금 상계금지·강제 저금의 금지</Text>
                  <Text style={styles.bodyText}>[CHAP 22] 과도적 근로관계(채용내정·시용)</Text>
                  <Text style={styles.bodyText}>[CHAP 23] 임금의 개념</Text>
                  <Text style={styles.bodyText}>[CHAP 24] 평균임금</Text>
                  <Text style={styles.bodyText}>[CHAP 25] 통상임금</Text>
                  <Text style={styles.bodyText}>[CHAP 26] 휴업수당</Text>
                  <Text style={styles.bodyText}>[CHAP 27] 최저임금</Text>
                  <Text style={styles.bodyText}>[CHAP 28] 임금지급의 방법</Text>
                  <Text style={styles.bodyText}>[CHAP 29] 근로시간의 개념 및 시간</Text>
                  <Text style={styles.bodyText}>[CHAP 30] 휴게시간</Text>
                  <Text style={styles.bodyText}>[CHAP 31] 휴일, 주휴일</Text>
                  <Text style={styles.bodyText}>[CHAP 32] 연장·야간·휴일근로와 가산임금</Text>
                  <Text style={styles.bodyText}>[CHAP 33] 포괄임금계약</Text>
                  <Text style={styles.bodyText}>[CHAP 34] 연차휴가</Text>
                  <Text style={styles.bodyText}>[CHAP 35] 인사와 징계</Text>
                  <Text style={styles.bodyText}>[CHAP 36] 전직</Text>
                  <Text style={styles.bodyText}>[CHAP 37] 전적</Text>
                  <Text style={styles.bodyText}>[CHAP 38] 휴직</Text>
                  <Text style={styles.bodyText}>[CHAP 39] 직위해제</Text>
                  <Text style={styles.bodyText}>[CHAP 40] 징계</Text>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={styles.bodyText}>[CHAP 41] </Text>
                    <View style={{flex: 1}}><Text style={styles.bodyText}>근로자 측 사정에 따른 해고의 정당성(근기법 제 23조 제1항 정당한 이유)</Text></View>
                  </View>
                  <Text style={styles.bodyText}>[CHAP 42] 정리해고(경영해고)</Text>
                  <Text style={styles.bodyText}>[CHAP 43] 전리해고와 우선재고용</Text>
                  <Text style={styles.bodyText}>[CHAP 44] 해고금지기간</Text>
                  <Text style={styles.bodyText}>[CHAP 45] 해고의 법정절차</Text>
                  <Text style={styles.bodyText}>[CHAP 46] 부당해고 등의 구제</Text>
                  <Text style={styles.bodyText}>[CHAP 47] 근로관계의 종료사유</Text>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={styles.bodyText}>[CHAP 48] </Text>
                    <View style={{flex: 1}}><Text style={styles.bodyText}>근로관계 종료에 따른 법률관계(퇴직급여제도)</Text></View>
                  </View>
                  <Text style={styles.bodyText}>[CHAP 49] 근로관계 종료에 따른 법률관계</Text>
                  <Text style={styles.bodyText}>[CHAP 50] 사업변동과 노동관계</Text>
                </View>
              </CollapseBody>
            </Collapse>

            <View style={styles.Hline}></View>
            <Collapse>
              <CollapseHeader>
                <View style={styles.header}>
                  <Text style={styles.headerText1}>제3편</Text>
                  <Text style={styles.headerText2}>비정규 근로자에 관한 특별법</Text>
                </View>
              </CollapseHeader>
              <CollapseBody>
                <View style={styles.body}>
                  <Text style={styles.bodyText}>[CHAP 51] 기간제 근로자 근로계약기간의 보호</Text>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={styles.bodyText}>[CHAP 52] </Text>
                    <View style={{flex: 1}}><Text style={styles.bodyText}>기간제 근로자 차별적 처우 금지 및 기타 보호</Text></View>
                  </View>
                  <Text style={styles.bodyText}>[CHAP 53] 단시간근로자에 대한 보호</Text>
                  <Text style={styles.bodyText}>[CHAP 54] 파견과 도급의 구분</Text>
                  <Text style={styles.bodyText}>[CHAP 55] 파견제한 위반의 효과</Text>
                  <Text style={styles.bodyText}>[CHAP 56] 파견근로자 차별금지와 사용자 책임</Text>
                </View>
              </CollapseBody>
            </Collapse>

            <View style={styles.Hline}></View>
            <Collapse>
              <CollapseHeader>
                <View style={styles.header}>
                  <Text style={styles.headerText1}>제4편</Text>
                  <Text style={styles.headerText2}>집단적 노사관계법</Text>
                </View>
              </CollapseHeader>
              <CollapseBody>
                <View style={styles.body}>
                  <Text style={styles.bodyText}>[CHAP 58] 근로3권</Text>
                  <Text style={styles.bodyText}>[CHAP 59] 단결권(단결강제·소극적 단결권)</Text>
                  <Text style={styles.bodyText}>[CHAP 60] 노동조합의 설립요건</Text>
                  <Text style={styles.bodyText}>[CHAP 61] "노조법 제2조 제4호 라목"에 대한 논의</Text>
                  <Text style={styles.bodyText}>[CHAP 62] 법외조합(근로자단체)의 법적 지위</Text>
                  <Text style={styles.bodyText}>[CHAP 63] 노동조합의 민주적·자주적 운영</Text>
                  <Text style={styles.bodyText}>[CHAP 64] 노동조합 기관</Text>
                  <Text style={styles.bodyText}>[CHAP 65] 조합비 공제제도(check-off)</Text>
                  <Text style={styles.bodyText}>[CHAP 66] 노조전임자</Text>
                  <Text style={styles.bodyText}>[CHAP 67] 노동조합의 통제권</Text>
                  <Text style={styles.bodyText}>[CHAP 68] 노동조합의 조직변동</Text>
                  <Text style={styles.bodyText}>[CHAP 69] 조직협태의 변경방법</Text>
                  <Text style={styles.bodyText}>[CHAP 70] 조합활동의 정당성</Text>
                  <Text style={styles.bodyText}>[CHAP 71] 단체교섭의 당사자</Text>
                  <Text style={styles.bodyText}>[CHAP 72] 사업(장)단위의 교섭창구 단일화</Text>
                  <Text style={styles.bodyText}>[CHAP 73] 공정대표의무</Text>
                  <Text style={styles.bodyText}>[CHAP 74] 단체교섭의 담당자</Text>
                  <Text style={styles.bodyText}>[CHAP 75] 단체협약 체결권과 노동조합의 인준권</Text>
                  <Text style={styles.bodyText}>[CHAP 76] 단체교섭의 대상</Text>
                  <Text style={styles.bodyText}>[CHAP 77] 단체교섭의 방법과 그 위반에 대한 구제</Text>
                  <Text style={styles.bodyText}>[CHAP 78] 단체협약의 의의와 성립</Text>
                  <Text style={styles.bodyText}>[CHAP 79] 단체협약의 효력</Text>
                  <Text style={styles.bodyText}>[CHAP 80] 단체협약의 문제 조항</Text>
                  <Text style={styles.bodyText}>[CHAP 81] 단체협약의 해석</Text>
                  <Text style={styles.bodyText}>[CHAP 82] 단체협약의 효력확장제도</Text>
                  <Text style={styles.bodyText}>[CHAP 83] 단체협약의 실효</Text>
                  <Text style={styles.bodyText}>[CHAP 84] 노동쟁의의 개념(조정의 대상)</Text>
                  <Text style={styles.bodyText}>[CHAP 85] 쟁의행위의 개념과 준법투쟁</Text>
                  <Text style={styles.bodyText}>[CHAP 86] 쟁의행위에 대한 보호</Text>
                  <Text style={styles.bodyText}>[CHAP 87] 쟁의행위 방법상 제한·금지법규</Text>
                  <Text style={styles.bodyText}>[CHAP 88] 쟁의행위의 정당성</Text>
                  <Text style={styles.bodyText}>[CHAP 89] 위법한 쟁의행위와 책임 귀속</Text>
                  <Text style={styles.bodyText}>[CHAP 90] 쟁의행위와 근로계약관계</Text>
                  <Text style={styles.bodyText}>[CHAP 91] 직장폐쇄</Text>
                  <Text style={styles.bodyText}>[CHAP 92] 부당노동행위 총론</Text>
                  <Text style={styles.bodyText}>[CHAP 93] 불이익취급</Text>
                  <Text style={styles.bodyText}>[CHAP 94] 반조합계약(비열계약)</Text>
                  <Text style={styles.bodyText}>[CHAP 95] 지배·개입</Text>
                  <Text style={styles.bodyText}>[CHAP 96] 부당노동행위 구제</Text>
                  <Text style={styles.bodyText}>[CHAP 97] 공무원의 노동조합 설립 및 운영</Text>
                  <Text style={styles.bodyText}>[CHAP 98] 교원의 노동조합 설립 및 운영</Text>
                </View>
              </CollapseBody>
            </Collapse>
          </ScrollView>

        </View>
      </View>
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    backgroundColor: '#D4D4D4',
    padding: 40,
    flex: 1
  },
  titleText1: {
    fontSize: 30,
    fontFamily: 'gothic-bold',
    letterSpacing: -1.5
  },
  titleText2: {
    fontSize: 35,
    fontFamily: 'gothic-bold',
    letterSpacing: 25
  },
  content: {
    backgroundColor: '#AEAFB1',
    flex: 5,
  },
  header: {
    flexDirection: 'row',
    paddingHorizontal: 40,
    marginTop: 40,
    alignItems: 'center'
  },
  headerText1: {
    fontSize: 20,
    color: '#505156',
    fontFamily: 'gothic-bold',
    marginRight: 15
  },
  headerText2: {
    fontSize: 20,
    fontFamily: 'gothic-bold',
  },
  Hline: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: 100,
    marginHorizontal: 40,
    marginTop: 40
  },
  body: {
    marginTop: 40,
    marginHorizontal: 40,
  },
  bodyText: {
    marginBottom: 5,
    fontFamily: 'gothic',
  }
});
