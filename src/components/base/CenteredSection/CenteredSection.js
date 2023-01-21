import styled from "styled-components";
import Clearfix from "../Clearfix/Clearfix";

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  float: left;
`

const SubContainer = styled.div`
  width: auto;
  float: left;
`;

const CenteredSection = (props) => {
  return (
    <>
      <Container>
        <SubContainer>
          {props.children}
        </SubContainer>
      </Container>
      <Clearfix />
    </>
  )
}

export default CenteredSection;
