import MenuItemsManager from "../../../elements/MenuItemsManager/MenuItemsManager";
import { useMemo, useState} from "react";
import MenuProduct from "../../Menu/MenuProduct/MenuProduct";
import {Link} from "react-router-dom";
import ProductView from "../ProductView/ProductView";
import Clearfix from "../../base/Clearfix/Clearfix";
import styled from "styled-components";
import BasketButton from "../../base/BasketButton/BasketButton";
import CenteredSection from "../../base/CenteredSection/CenteredSection";


const H1 = styled.h1`
  font-size: 50px;
  text-align: center;
`;

export default function MenuView(){
  let [menuProducts, setMenuProducts] = useState([])

  useMemo(() => {
    setMenuProducts(MenuItemsManager.getItems());
  }, [])

  return(
    <>
      <H1>Menu</H1>
      <BasketButton/>
      <Clearfix />
      <CenteredSection>
        <div style={{marginLeft:"12px"}}>
        {
          menuProducts.map(
              menuProduct => <Link key={menuProduct.id} to={'/item/' + menuProduct.id} element={<ProductView />}>
                <MenuProduct key={menuProduct.id}
                             text={menuProduct.name}
                             type={menuProduct.type}
                             price={menuProduct.basePrice}
                             imageSrc={menuProduct.image} />
              </Link>
          )
        }
        </div>
      </CenteredSection>
    </>
  )

}
