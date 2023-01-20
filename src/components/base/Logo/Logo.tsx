import styled from "styled-components";
import LogoImageFile from "./mcdonaldlogo.png";

const LogoImg = styled.img`
  width: 600px;
  float: left;
`;

// logo
export default function Logo(){
  return(
    <>
      <LogoImg src={LogoImageFile} />
    </>
  )
}
