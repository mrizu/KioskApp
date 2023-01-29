import styled from "styled-components";
import LogoImageFile from "./mcdonaldlogo.png";

const LogoImg = styled.img`
  width: 200px;
  float: left;
`;

export default function Logo() {
  return(
    <>
      <LogoImg src={LogoImageFile} />
    </>
  )
}
