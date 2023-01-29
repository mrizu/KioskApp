import styled from "styled-components";
import Logo from "../../base/Logo/Logo";
import Clearfix from "../../base/Clearfix/Clearfix";
import CenteredSection from "../../base/CenteredSection/CenteredSection";
import BigButton from "../../base/BigButton/BigButton";
import TakeoutImage from "./takeout.png"
import DineInImage from "./dineIn.png"
import {Link} from "react-router-dom";

const LogoContainer = styled.div`
  padding: 80px 0 ;
  margin-left: 50%;
  transform: translateX(-50%);
  float: left;
`;

export default function TakeoutChoiceView() {
    return (
      <>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <Clearfix />

        <CenteredSection>
          <h1>Select option</h1>
        </CenteredSection>


          <CenteredSection>
            <Link to='/menu'>
              <BigButton text="Dine in" imageSrc={DineInImage} />
            </Link>
            <Link to='/menu'>
              <BigButton text="Take out" imageSrc={TakeoutImage} />
            </Link>

          </CenteredSection>


      </>
    )
}
