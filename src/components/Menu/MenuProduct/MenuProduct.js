import styled from "styled-components";

const Container = styled.button`
  width: 200px;
  height: 270px;
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

const ProductName = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  padding-bottom: 8px;
  font-size: 28px;
`;

const Price = styled.span`
  position: absolute;
  top: 8px;
  right: 8px;
  font-size: 18px;
`

const ProductType = styled.span`
  position: absolute;
  top: 8px;
  font-size: 18px;
  left: 8px
`

const Img = styled.img`
  width: 140%;
`;


const MenuProduct = (props) => {
  return (
    <Container onClick={() => props.onClick ? props.onClick() : null}>
      <Img src={props.imageSrc} />
      <ProductName>{props.text}</ProductName>
      <ProductType>{props.type}</ProductType>
      <Price>${props.price.toFixed(2)}</Price>
    </Container>
  )
}

export default MenuProduct;
