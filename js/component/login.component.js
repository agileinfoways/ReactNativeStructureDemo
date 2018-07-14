import React, { Component } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ImageBackground,
  Image,
  StyleSheet
} from "react-native";
import { NavigationActions } from 'react-navigation';
import { COLORS, VALIDATION_CONST, CONST, FONTS, SCALE } from "../global/constants.global";
import BlockButton from "../widget/button.widget";
import CustomTextInput from "../widget/input.widget";
import GlobalValidations from "../global/validations.global";
import BannerErrorContainer from "../widget/errorbar.widget";
import { GS } from "../global/styles.global";
import { observer } from 'mobx-react/native'
import { observable } from 'mobx';
import styles from '../style/login.style.js';

@observer
export default class LoginComponent extends Component {

  @observable textUsername = '';

  constructor() {
    super();
    this.state = {
      isFocused: false,
      email: "test@test.com",
      password: "123456"
    };
  }

  componentWillMount() { 
    this.textUsername = this.state.email;
  }

  _validation() {
    if (GlobalValidations.isFieldEmpty(this.state.email)) {
      this.refs.ebc.error("Please enter your mail id.");
      return false;
    } else if (GlobalValidations.isEmailInvalid(this.state.email)) {
      this.refs.ebc.error("Please enter valid email id.");
      return false;
    } else if (GlobalValidations.isFieldEmpty(this.state.password)) {
      this.refs.ebc.error("Please enter your password.");
      return false;
    } else if (
      GlobalValidations.isTextLengthInvalid(
        this.state.password,
        VALIDATION_CONST.minPasswordLength
      )
    ) {
      this.refs.ebc.error(
        "Password should contain at least " +
        VALIDATION_CONST.minPasswordLength +
        " characters."
      );
      return false;
    }
    return true;
  }

  onFocusChange = () => {
    this.setState({ isFocused: true });
    console.log("FOCUS STATE==>" + this.state.isFocused);
  };

  onBlurChange = () => {
    this.setState({ isFocused: false });
    console.log("FOCUS STATE==>" + this.state.isFocused);
  };

  onLoginClick() {
    if (this._validation()) {
      const {loginStore} = this.props.stores; 
      loginStore.setUser({ email: this.state.email, password: this.state.password});


      const resetAction = NavigationActions.reset({
        index: 0,
        actions: [
            NavigationActions.navigate({
                routeName: 'Home'
            })
        ]
    });
    
      this.props.navigation.dispatch(resetAction);

    }
  }

  render() {
    const {loginStore} = this.props.stores;                  
    return (
      <BannerErrorContainer ref="ebc" style={GS.gsOneFlex}>
        <View style={styles.parentContainer}>
          <View style={styles.formUp}>
           {/*  <Image
              source={require("../img/login.png")}
              style={styles.imgStyle}
            /> */}

            <Image source={{uri: 'logo'}} style={styles.imgStyle} />
          </View>
          <View style={styles.formDown}>

          <Text>Observable: {this.textUsername}</Text>

            <View>
              <CustomTextInput
                onChangeText={text => {
                  this.setState({ email: text });
                  this.textUsername = text;
                  }}
                hint="Email"
                isSecureText={false}
                keyboardType="email-address"
                style={styles.inputStyle}
                value={this.state.email}
              />
              <CustomTextInput
                hint="Password"
                onChangeText={text => this.setState({ password: text })}
                isSecureText={true}
                keyboardType="numeric"
                style={styles.inputStyle}
                value={this.state.password}
                maxLength={VALIDATION_CONST.maxPasswordLength}
              />
            </View>

            <View>
              <BlockButton
                btnStyle={styles.btnStyle}
                textStyle={styles.textStyle}
                btnText="LOGIN"
                onPress={() => {
                  this.onLoginClick();
                  
                }}
              />
            </View>

          </View>
          

        </View>
      </BannerErrorContainer>
    );
  }
}