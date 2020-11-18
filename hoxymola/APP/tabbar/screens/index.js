import { Navigation } from 'react-native-navigation';

import todayStudy from './todayStudy';
import part1 from './part1';

export function registerScreens() {
  Navigation.registerComponent('Dk.todayStudy', () => todayStudy);
  Navigation.registerComponent('Dk.part1', () => part1);
}