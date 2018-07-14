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
import Container from "../component/container.component";
import LoginComponent from "../component/login.component";
import ScrollContainer from "../component/scroll.component";
import { inject } from 'mobx-react';
import { observer } from 'mobx-react/native'
import { observable } from 'mobx';

@inject("stores")
class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: "Agile"      
    };
  }

  render() {
    return (
      <ScrollContainer>
        <Container>
          <LoginComponent {...this.props} state={this.state} />
        </Container>
      </ScrollContainer>
    );
  }
}
export default Login;