import React, { Component } from "react";
import { Text, TouchableOpacity, View, StyleSheet, ScrollView } from "react-native";
import { COLORS, FONTS, SCALE, CONST } from "../global/constants.global";
import styles from '../style/scroll.style.js';

export default class ScrollContainer extends React.Component {

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container} {...this.props} bounces={false}>
        {this.props.children}
      </ScrollView>
    );
  }
}

