import {useParams} from "react-router-dom";
import MenuItemsManager from "../../../elements/MenuItemsManager/MenuItemsManager";
import styled from "styled-components";
import MenuProduct from "../../Menu/MenuProduct/MenuProduct";
import { Formik, Field, Form } from 'formik';

const ProductContainer = styled.div`
  width: 80%;
  height: 100%;
  padding: 80px 0 40px;
  margin-left: 50%;
  transform: translateX(-50%);
  float: left;
  background-color: white;
  color: black;
  border-radius: 15px;
`;

const Img = styled.img`
  width: 100%;
  background-color: white;
  color: black;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  float: left;
`;

const AddButton = styled.button`
  position: absolute;
  padding: 10px 20px;
  right: 8px;
  font-size: 18px;
  font-weight: bold;
  background-color: orange;
  color: white;
  border-radius: 7px;
  float:right
`;


export default function ProductView(){
  let {id} = useParams();
  let product = MenuItemsManager.getItemById(id)

  return(
    <ProductContainer>
      <h1>{product.name}</h1>
      <Img src={product.image}/>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
      {/*<Formik initialValues={{selectedIngredient: ''}}*/}
      {/*        onSubmit={}*/}
      {/*<Form>*/}
      {/*  <Field></Field>*/}
      {/*</Form>*/}
      <AddButton>Add</AddButton>
      <h2>${product.basePrice.toFixed(2)}</h2>
    </ProductContainer>
  )
}
