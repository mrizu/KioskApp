import {useEffect, useState} from "react";
import MenuItemsManager from "../../../elements/MenuItemsManager/MenuItemsManager";
import {Link} from "react-router-dom";
import styled from "styled-components";
import Button from "../../base/Button/Button";
import AdminEditProductView from "../AdminEditProductView/AdminEditProductView";
import Clearfix from "../../base/Clearfix/Clearfix";

const Container = styled.div`
  width: 600px;
  min-height: 100%;
  padding: 40px 40px;
  margin-left: 50%;
  transform: translateX(-50%);
  float: left;
  background-color: white;
  color: black;
  font-size: 20px;
  padding-bottom: calc(40px + 100px);
  border-radius: 15px;
  position: relative;
  //overflow-y: auto;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const MenuProductContainer = styled.div`
  width: 25%;
  height: 170px;
  margin: 20px 10px;
  border: 1px solid black;
  float: left;
  position: relative;
  align-items: center;
  justify-content: center;
  left: 7%;
`;

export default function AdminEditView(){
  let [menuProducts, setMenuProducts] = useState([])

  useEffect(() => {
    setMenuProducts(MenuItemsManager.getItems());
  }, [])

  return(
    <Container>
      <h1>Edit</h1>
      {
        menuProducts.map(
          menuProduct => <MenuProductContainer key={menuProduct.id}>
            <h3>{menuProduct.name}</h3>
            <Clearfix />
            <Link to={'/admin/editProduct/' + menuProduct.id} element={<AdminEditProductView />}>
              <Button>Edit product</Button>
            </Link>
          </MenuProductContainer>
        )
      }
    </Container>
  )
}
