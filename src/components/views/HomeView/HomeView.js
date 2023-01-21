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
      <Link style={{textDecoration: "none", color: "white"}} to={'/choose'}>
        <Container>
          <LogoContainer>
            <Logo />
          </LogoContainer>
          <Clearfix />
          <H1>Welcome!</H1>
        </Container>
      </Link>
      </>
    );
  }

}


export default HomeView;
