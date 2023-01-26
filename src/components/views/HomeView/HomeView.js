import React from "react";
import styled from "styled-components";
import Logo from "../../base/Logo/Logo";
import Clearfix from "../../base/Clearfix/Clearfix";
import {Link} from "react-router-dom";
import AdminView from "../AdminView/AdminView";

const LogoContainer = styled.div`
  padding: 80px 0 40px;
  margin-left: 50%;
  transform: translateX(-50%);
  float: left;
`;

const H1 = styled.h1`
  font-size: 60px;
  text-align: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  cursor: default;
`;

const AdminButton = styled.div`

`;

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
          <Link to='/admin' element={<AdminView />}><AdminButton>admin</AdminButton></Link>
        </Container>
      </Link>

      </>
    );
}
