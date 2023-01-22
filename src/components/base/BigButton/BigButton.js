import styled from "styled-components";

const Container = styled.button`
  width: 200px;
  height: 360px;
  background-color: white;
  color: black;
  border: 0;
  padding: 16px;
  margin: 8px 16px;
  font-size: 40px;
  font-weight: bold;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: 0.5s;
  float: left;

  &:hover {
    background-color: #dcdcdc;
    cursor: pointer;
  }
`;

const Text = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  padding-bottom: 8px;
  font-size: 28px;
`;

const Img = styled.img`
  width: 100%;
`;


const BigButton = (props) => {
  return (
    <Container onClick={() => props.onClick ? props.onClick() : null}>
      <Img src={props.imageSrc} />
      <Text>{props.text}</Text>
    </Container>
  )
}

export default BigButton;

// export default function BigButton (text, imageSrc) {
//   return (
//     <Container onClick={}>
//       <Img src={imageSrc} />
//       <Text>{text}</Text>
//     </Container>
//   )
// }
