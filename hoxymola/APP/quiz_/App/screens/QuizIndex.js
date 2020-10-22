import React from 'react';
import { ScrollView, StatusBar } from 'react-native';
import { RowItem } from '../components/RowItem';
import GeneralLaborLaw from '../data/GeneralLaborLaw';
import IndividualLaborLaw from '../data/IndividualLaborLaw';

export default ({ navigation }) => (
  <ScrollView>
    <StatusBar barStyle='dark-content' />
    <RowItem
      name='노동법총론'
      color='#36B1F0'
      onPress={() =>
        navigation.navigate('Quiz', {
          title: '노동법총론',
          questions: GeneralLaborLaw,
          color: '#36B1F0'
        })
      }
    />
    <RowItem
    name='개별적 근로관계법'
    color='#799496'
    onPress={() =>
      navigation.navigate('Quiz', {
        title: '개별적 근로관계법',
        questions: IndividualLaborLaw,
        color: '#799496'
      })
    }
    >
    </RowItem>
  </ScrollView>
);