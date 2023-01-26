import styled from "styled-components";
import BasketImage from "./basket.png";
import {Link} from "react-router-dom";
import BasketView from "../../views/BasketView/BasketView";

const Button = styled.button`
  width: 80px;
  height:80px;
  background-color: #ff8c00;
  padding: 16px;
  margin: 8px 16px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: 0.5s;
  position: absolute;
  top:12px;
  right: 16px;
  float: left;

  &:hover {
    background-color: #cc7000;
    cursor: pointer;
  }`;

const Img = styled.img`
  width: 100%;
  filter: brightness(0) invert(1);
`;

export default function BasketButton(props){
  return(
    <Link to= '/basket' element={<BasketView />}>
      <Button style={props.style}><Img src={BasketImage}/></Button>
    </Link>
  )
}
