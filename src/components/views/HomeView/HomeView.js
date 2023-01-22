import React from "react";
import {Component} from "react";
import styled from "styled-components";
import Logo from "../../base/Logo/Logo";



export default function HomeView(){
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
