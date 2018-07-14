import React, { Component } from "react";
import Container from "../component/container.component";
import HomeComponent from "../component/home.component";
import { inject } from 'mobx-react';
import { observer } from 'mobx-react/native'
import { observable } from 'mobx';

@inject("stores")
export default class Home extends Component {
  constructor(props) {
    super(props);    
  }

  render() {
    return (
      <Container>
        <HomeComponent {...this.props}/>
      </Container>
    );
  }
}
