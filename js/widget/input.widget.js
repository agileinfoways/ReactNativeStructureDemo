import React, { Component } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  TextInput,
  Platform
} from "react-native";
import { COLORS, FONTS, SCALE, CONST } from "../global/constants.global";

export default class CustomTextInput extends React.Component {
  render() {
    return (
      <TextInput
        {...this.props}
        onFocus={this.onFocusChange}
        onBlur={this.onBlurChange}
        style={[styles.unSelectedTextInputStyle, this.props.style]}
        placeholder={this.props.hint}
        secureTextEntry={this.props.isSecureText}
        keyboardType={this.props.keyboardType}
        underlineColorAndroid={COLORS.TRANSPARENT}
        selectionColor={COLORS.GREY}
      />
    );
  }
}

const styles = StyleSheet.create({
  selectedTextInputStyle: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.RED
  },
  unSelectedTextInputStyle: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.GREY,
    paddingBottom: Platform.OS === "ios" ? 10 : 10,
    paddingTop: Platform.OS === "ios" ? 10 : 10
  }
});
