import styled from "styled-components";

const Button = styled.button`
  background-color: white;
  color: black;
  padding: 16px;
  margin: 8px 8px;
  font-size: 20px;
  border-radius: 8px;
  transition: 0.5s;
  float: left;

  &:hover {
    background-color: #dcdcdc;
    cursor: pointer;
  }
`;

export default Button;
