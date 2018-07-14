import React, { Component } from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { COLORS, FONTS, SCALE, CONST } from "../global/constants.global";

export default class BlockButton extends React.Component {
  render() {
    return (
      <TouchableOpacity disabled={this.props.disabled} onPress={this.props.onPress} style={[styles.container,this.props.btnStyle]}>
        <Text style={[styles.btnStyle,this.props.textStyle]}>{this.props.btnText}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width:CONST.DEVICE_WIDTH,
    borderColor: COLORS.GREY,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 20,
    padding:5
  },
  btnStyle: {
    fontFamily: FONTS.BOLD,
    fontSize: SCALE.TITLE_TEXT_SIZE,
    color: COLORS.RED,
    padding: 5,
    alignSelf: "center"
  }
});
