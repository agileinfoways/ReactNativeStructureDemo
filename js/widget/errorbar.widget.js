import React, { Component } from "react";
import { Animated, View, TouchableOpacity, Text } from "react-native";
import PropTypes from "prop-types";

import { COLORS, FONTS, SCALE } from "../global/constants.global";

export default class BannerErrorContainer extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  };

  static childContextTypes = {
    setBannerError: PropTypes.func.isRequired
  };

  state = {};

  getChildContext() {
    return {
      setBannerError: err => this.error(err)
    };
  }

  errorHeight = new Animated.Value(0);

  error(err) {
    this.err = err;

    if (err)
      this.setState(
        {
          err: err.toString()
        },
        () =>
          Animated.spring(this.errorHeight, {
            toValue: SCALE.h(70),
            duration: 300
          }).start(() => {
            setTimeout(() => this.error(), 2000);
          })
      );
    else
      Animated.spring(this.errorHeight, {
        toValue: 0,
        duration: 300
      }).start(() => this.setState({ err: this.err }));
  }

  render() {
    return (
      <View {...this.props} pointerEvents="box-none">
        <TouchableOpacity onPress={() => this.error()}>
          <Animated.View
            style={{
              height: this.errorHeight,
              backgroundColor: COLORS.RED,
              position: "relative"
            }}
          >
            <View
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                bottom: 0,
                height: SCALE.h(70),
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                zIndex: 999
              }}
            >
              <Text
                style={{
                  fontFamily: FONTS.ROMAN,
                  color: COLORS.WHITE,
                  fontSize: SCALE.h(30)
                }}
              >
                {this.state.err}
              </Text>
            </View>
          </Animated.View>
        </TouchableOpacity>
        <View
          pointerEvents="box-none"
          style={{ flex: 1, position: "relative", alignSelf: "stretch" }}
        >
          {this.props.children}
        </View>
      </View>
    );
  }
}
