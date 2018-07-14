import { AppRegistry } from 'react-native';
import App from './App';

console.ignoredYellowBox = ["Setting a timer"]
console.ignoredYellowBox = ["BackAndroid is deprecated"]
console.disableYellowBox = true

AppRegistry.registerComponent('DemoReactStructure', () => App);
