import React, { Component } from "react";
import { Text, TouchableOpacity, View, Image, StyleSheet } from "react-native";
import GM from "../global/methods.global";
import { CONFIG } from "../global/config.global";
import { COLORS, VALIDATION_CONST, FONTS, CONST, SCALE } from "../global/constants.global";
import { GS } from "../global/styles.global";
import Container from "../component/container.component";
import { observer } from 'mobx-react/native'
import BlockButton from "../widget/button.widget";
import Backend from "../service/backend.service";
import styles from '../style/home.style.js';

@observer
export default class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pic: null,
      name: ""
    };
  }

  render() {
    const { loginStore } = this.props.stores;
    return (

      <View style={styles.container}>
        <Image source={(this.state.pic) ? { uri: this.state.pic } : { uri: 'icon_placeholder' }} style={styles.profileImage} />
        <Text style={styles.text}>Email: {loginStore.getUser.email} </Text>

        <BlockButton
          btnStyle={styles.btnStyle}
          textStyle={styles.textStyle}
          btnText="Increase count"
          onPress={() => {
            loginStore.temp_array.push(Math.floor(Math.random() * 100));
          }}
        />
        <Text style={styles.styleMargin}>Counter using store: {loginStore.getTemp}</Text>
      </View>
    );
  }

  async componentWillMount() {
    let result = await Backend.callApi(CONFIG.userEndPoints, 'GET', null, null, this.props.navigation);
    if (result) {
      GM.showLog("Success==>" + JSON.stringify(result));
      this.setState({
        pic: result.results[0].picture.large,
        name: result.results[0].name.first
      });
    }
  }
}