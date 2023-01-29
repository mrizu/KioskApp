import styled from "styled-components";
import Basket from "../../../elements/Basket/Basket";
import {useCallback, useState, useMemo} from "react";
import Clearfix from "../../base/Clearfix/Clearfix";
import {Link} from "react-router-dom";
import MenuView from "../MenuView/MenuView";
import FinalView from "../FinalView/FinalView";


const BaskerContainer = styled.div`
  width: 600px;
  min-height: 100%;
  padding: 40px 40px;
  margin-left: 50%;
  transform: translateX(-50%);
  float: left;
  background-color: white;
  color: black;
  font-size: 20px;
  padding-bottom: calc(40px + 100px); /* extra 100px for ButtonsContainer */
  border-radius: 15px;
  position: relative;
`;

const SmallText = styled.p`
  font-size: 14px;
  color: gray;
`;

const ProductImg = styled.img`
  width: 160px;
  margin-right: 40px;
  float: left;
`;

const ProductName = styled.h1`
  font-size: 30px;
  margin-bottom: 0;
  float: left;
`;

const ProductContainer = styled.div`
  width: 100%;
  float: left;
  position: relative;
`;

const H1 = styled.h1`
  font-size: 45px;
  text-align: center;
  font-weight: bold;
`;

const AdditionalIngredientsContainer = styled.div`
  float: left;
`;

const Price = styled.div`
  position: absolute;
  top: 50%;
  right: 60px;
  transform: translateY(-50%);
`;

const DeleteButton = styled.button`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  width: 38px;
  height: 38px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  background: #ff8c00;
  border-radius: 7px;
  padding: 2px;
  color: white;

  transition: 0.5s;

  &:hover {
    background-color: #cc7000;
  }
`;

const ButtonsContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  padding: 0 40px;
`;

const Button = styled.button`
  font-size: 24px;
  font-weight: bold;
  background-color: #ff8c00;
  color: white;
  border-radius: 7px;
  padding: 16px;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background-color: #cc7000;
  }
`;

const EmptyBasketText = styled.div`
  font-size: 30px;
  padding-top: 10px;
`;


const ImageSection = styled.div`
  width: 200px;
  float: left;
`;

const DescriptionSection = styled.div`
  float: left;
`;


export default function BasketView(){
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  useMemo(() => {
    Basket.loadBasket();
  }, [])

  const handleClick = (index) => {
    Basket.removeItemById(index);
    forceUpdate();
  }

  const handleBasketClearClick = () => {
    Basket.clearBasket()
    forceUpdate();
  }

  const getBasketPrice = () => {
    let sum = 0;
    for (let i = 0; i<Basket.items.length; i++){
      sum += parseFloat(Basket.items[i].fullPrice);
    }
    return sum.toFixed(2);
  }

  const isBasketEmpty = () => {
    return Basket.items.length === 0;
  }

  return(
    <>
      <BaskerContainer>
        <DeleteButton onClick={() => handleBasketClearClick()} style={{transform: "none", top: "74px", right: "36px", width: "auto", padding: "0 16px"}}>Clear</DeleteButton>
        <H1>Basket</H1>
        {
          Basket.items.map((basketItem, index) =>
            <ProductContainer key={"product-" + index}>
              <ImageSection>
                <ProductImg src={basketItem.menuItem.image}/>
              </ImageSection>
              <DescriptionSection>
                <ProductName>{basketItem.menuItem.name}</ProductName>
                <Clearfix />
                <AdditionalIngredientsContainer>
                  {basketItem.additionalIngredients.map((ingredient) =>
                    ingredient.numberOfServings > 0
                      ?
                        <SmallText><b>Extra</b> {ingredient.name} x {ingredient.numberOfServings}</SmallText>
                      :
                      ""
                  )}
                </AdditionalIngredientsContainer>
                <Price>${basketItem.fullPrice}</Price>
                <DeleteButton onClick={() => handleClick(index)}>X</DeleteButton>
              </DescriptionSection>
            </ProductContainer>
          )
        }
        <ButtonsContainer>
          {!isBasketEmpty()
            ?
          <Link to='/final' element={<FinalView />}>
            <Button onClick={() => isBasketEmpty()} style={{float: "right"}}>Pay(${getBasketPrice()})</Button>
          </Link>
            :
            <EmptyBasketText style={{float: "right"}}>Basket is empty</EmptyBasketText>
          }
          <Link to='/menu' element={<MenuView />}><Button>Back</Button></Link>
        </ButtonsContainer>
      </BaskerContainer>
    </>

  )
}
