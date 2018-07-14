import React, { Component } from 'react';
import { StackNavigator, NavigationActions } from 'react-navigation';
import { TouchableOpacity, Text, Alert } from 'react-native';
import Home from './js/screen/home.screen';
import Login from './js/screen/login.screen';
import { CONST, COLORS, FONTS } from './js/global/constants.global';
import {Provider} from 'mobx-react';
import stores from './js/stores/index.store';
import { GS } from './js/global/styles.global';

const RootNavigator = StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: ({ navigation }) => ({
      title: CONST.TITLE_LOGIN,
      headerBackTitle: null,
      headerTitleStyle: {
        color: COLORS.BLACK,
        fontFamily: FONTS.BOLD,
      },
    })
  },
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: CONST.TITLE_HOME,
      headerBackTitle: null,
      headerTitleStyle: {
        color: COLORS.BLACK,
        fontFamily: FONTS.BOLD,
      },
      headerRight: (
        <TouchableOpacity onPress={() => { 


          Alert.alert(
            'ReactAppDemo',
            'Do you really want to logout?', [{
              text: 'OK',
              onPress: () => {

                const resetAction = NavigationActions.reset({
                  index: 0,
                  actions: [
                    NavigationActions.navigate({
                      routeName: 'Login'
                    })
                  ]
                });

                navigation.dispatch(resetAction);

              }
            }, {
              text: 'Cancel',
              onPress: () => {

              }
            }], {
              cancelable: false
            }
          )         
          
          }}>
          <Text style={GS.logoutBtnStyle}> LOGOUT </Text>
        </TouchableOpacity>
      )
    })
  },
});

export default class App extends Component{
  render(){
    return(
      <Provider stores={stores}>
      <RootNavigator {...this.props}/>
      </Provider>
    );
  }
}
