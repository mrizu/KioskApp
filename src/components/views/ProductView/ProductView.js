import {Link, useParams} from "react-router-dom";
import MenuItemsManager from "../../../elements/MenuItemsManager/MenuItemsManager";
import styled from "styled-components";
import MenuView from "../MenuView/MenuView";
import {useEffect, useState} from "react";
import AdditionalIngredientsManager from "../../../elements/AdditionalIngredient/AdditionalIngredientsManager";

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

const BackButton = styled.button`
    
`;

const AddButton = styled.button`
  position: absolute;
  padding: 20px 30px;
  right: 8px;
  font-size: 24px;
  font-weight: bold;
  background-color: orange;
  color: white;
  border-radius: 7px;
  float:right
`;

const ProductName = styled.h1`
    top:10px;
    text-align: center;
`;

const Price = styled.h2`
  right: 8px;
`;

const IngredientsList = styled.li`

`;


export default function ProductView(){
  let {id} = useParams();
  let product = MenuItemsManager.getItemById(id);
  let [additionalIngredients, setAdditionalIngredients] = useState([])

  useEffect( () => {
      setAdditionalIngredients(AdditionalIngredientsManager.getItems());
      }, []);

  const isBurger = (product) => {
      return product.getType() === "burger";
  }
  
  return(
    <ProductContainer>
      <ProductName>{product.name}</ProductName>
        <Link to='/menu' element={<MenuView />}> <BackButton>Back</BackButton></Link>
      <Img src={product.image}/>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        <IngredientsList>Additional ingredients:
            {
                additionalIngredients.map(
                    ingredient => <>
                        <ul key={ingredient.id}>
                            {ingredient.name} (${ingredient.pricePerServing})
                            <button onClick={ingredient.delete()}>-</button><button onClick={ingredient.add()}>+</button>
                            {ingredient.numberOfServings}
                        </ul>
                    </>
                )
            }
        </IngredientsList>
      <AddButton>Add</AddButton>
      <Price>${product.basePrice.toFixed(2)}</Price>
    </ProductContainer>
  )
}
