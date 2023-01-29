import {Link, useParams} from "react-router-dom";
import MenuItemsManager from "../../../elements/MenuItemsManager/MenuItemsManager";
import styled from "styled-components";
import MenuView from "../MenuView/MenuView";
import {useCallback, useEffect, useState} from "react";
import AdditionalIngredientsManager from "../../../elements/AdditionalIngredient/AdditionalIngredientsManager";
import Basket from "../../../elements/Basket/Basket";
import BasketButton from "../../base/BasketButton/BasketButton";

const buttonColor = `
  background-color: #ff8c00;
`;

const ProductContainer = styled.div`
  width: 600px;
  height: 100%;
  padding: 40px 40px;
  margin-left: 50%;
  transform: translateX(-50%);
  float: left;
  background-color: white;
  color: black;
  font-size: 20px;
  padding-bottom: calc(40px + 300px); /* extra 100px for ButtonsContainer */
  border-radius: 15px;
  position: relative;
  overflow: hidden;
`;

const ProductName = styled.h1`
  font-size: 48px;
  font-weight: bold;
  text-align: center;
`

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

const ButtonsContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  padding: 0 40px;
`;

const Button = styled.button`
  min-width: 170px;
  font-size: 24px;
  font-weight: bold;
  ${buttonColor};
  color: white;
  border-radius: 7px;
  padding: 16px;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background-color: #cc7000;
  }

  ${props => props.isInAnimation ? "opacity: 0;" : "opacity: 1;"}
`;

const FeedbackInfo = styled.div`
  width: 100%;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -70%);
  text-align: center;
  font-size: 24px;
  transition: 0.5s;
  pointer-events: ${props => props.isVisible ? "auto" : "none;"};
  user-select: none;

  ${props => props.isVisible ? "opacity: 1;" : "opacity: 0;"}
`;

const IngredientButton = styled.button`
  width: 30px;
  height: 30px;
  font-weight: bold;
  ${buttonColor};
  color: white;
  border-radius: 7px;
  font-size: 20px;
  cursor: pointer;
  transition: 0.5s;
  margin: 0 8px;
`;


const IngredientsList = styled.li`
  width: 100%;
`;

const Table = styled.table`
  width: 100%;
`;


export default function ProductView(){
  let {id} = useParams();
  let product = MenuItemsManager.getItemById(id);
  let [additionalIngredients, setAdditionalIngredients] = useState([])
  let [additionalPrice, setAdditionalPrice] = useState(0);
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);
  let [isInAnimation, setIsInAnimation] = useState(false);


  useEffect( () => {
      setAdditionalIngredients(AdditionalIngredientsManager.getItems());
      }, []);

  const isBurger = (product) => {
      return product.getProductType() === "Burger";
  }

  const handleIngredientChange = (ingredient, value) => {
    if (1 !== Math.abs(value)) return console.error("handleIngredientChange wrong value. Must be -1 or 1.");

    if (value === 1 && ingredient.numberOfServings < 5) {
      ingredient.add();
      setAdditionalPrice(additionalPrice + ingredient.pricePerServing)
    }
    if (value === -1 && ingredient.numberOfServings > 0) {
      ingredient.delete();
      setAdditionalPrice(additionalPrice - ingredient.pricePerServing)
    }
    forceUpdate();
  }

  const getFullPrice = () => {
   return (parseInt(product.basePrice) + additionalPrice).toFixed(2)
  }

  const addToBasket = (price) => {
    Basket.addItem(product, additionalIngredients, price);

    setIsInAnimation(true);

    setTimeout(() => {
      setIsInAnimation(false);
    }, 2000);
  };

  return(
      <ProductContainer>
        <ProductName>{product.name}</ProductName>
        <BasketButton style={{top: "42px"}} />
        <Img src={product.image}/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        {isBurger(product)&&<IngredientsList>Additional ingredients:
            <Table>
              <tbody>
                {
                    additionalIngredients.map(
                      (ingredient, index) => <tr key={index}>
                          <td>{ingredient.name} (${ingredient.pricePerServing})</td>
                          <td>
                              <div style={{float: "right"}}>
                                <div>
                                <IngredientButton onClick={() => {handleIngredientChange(ingredient, -1)}}>-</IngredientButton>
                                {ingredient.numberOfServings}
                                <IngredientButton onClick={() => {handleIngredientChange(ingredient, 1)}}>+</IngredientButton>
                                </div>
                              </div>
                            </td>
                        </tr>
                    )
                }
              </tbody>
            </Table>
          </IngredientsList>}
        <ButtonsContainer>
          <Button isInAnimation={isInAnimation} onClick={() => addToBasket(getFullPrice())} style={{float: "right"}}>Add (${getFullPrice()})</Button>
          <Link to='/menu' element={<MenuView />}><Button isInAnimation={isInAnimation}>Back</Button></Link>
          <FeedbackInfo isVisible={isInAnimation}>Item added to the basket</FeedbackInfo>
        </ButtonsContainer>
      </ProductContainer>
  )
}
