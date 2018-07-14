import React, { Component } from "react";
import { View } from "react-native";
import styles from '../style/container.style.js';

export default class Container extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        {this.props.children}
      </View>
    );
  }
}

