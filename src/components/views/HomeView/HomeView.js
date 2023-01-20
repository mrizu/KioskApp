import React from "react";
import {Component} from "react";
import styled from "styled-components";
import Logo from "../../base/Logo/Logo";



class HomeView extends Component {
  constructor(props) {
    super(props);
    this.state = {color: "red"};
  }

  test() {
    this.setState({color: "blue"});
  }

  render() {
    return(
      <>
        <Logo />
        <button onClick={() => this.setState({color: "blue"})}>test</button>
        home {this.state.color}
      </>
    );
  }

}


export default HomeView;
