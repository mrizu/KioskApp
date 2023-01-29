import {useMemo, useState} from "react";
import MenuItemsManager from "../../../elements/MenuItemsManager/MenuItemsManager";
import {Link} from "react-router-dom";
import styled from "styled-components";
import Button from "../../base/Button/Button";
import AdminEditProductView from "../AdminEditProductView/AdminEditProductView";
import Clearfix from "../../base/Clearfix/Clearfix";
import {useContext} from "react";
import {IsAccessGranted} from "../../../App";
import AdminView from "../AdminView/AdminView";

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
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const MenuProductContainer = styled.div`
  width: 100%;
  height: 170px;
  margin: 10px 0;
  border: 2px dotted black;
  float: left;
  border-radius: 8px;
`;

export default function AdminEditView(){
  let adminContext = useContext(IsAccessGranted);
  let [menuProducts, setMenuProducts] = useState([])
  useMemo(() => {
    setMenuProducts(MenuItemsManager.getItems());
  }, [])

  if (adminContext.isAdmin){
    return(
      <Container>
        <h1>Edit</h1>
        {
          menuProducts.map(
            menuProduct => <MenuProductContainer key={menuProduct.id}>
              <h2>{menuProduct.name}</h2>
              <Clearfix />
              <Link to={'/admin/editProduct/' + menuProduct.id} element={<AdminEditProductView />}>
                <Button style={{width: "calc(100% - 20px)"}}>Edit product</Button>
              </Link>
            </MenuProductContainer>
          )
        }
        <Link to='/admin' element={<AdminView/>}>
          <Button style={{position:"absolute",
            top:"20px",
            left: "20px"}}>Back</Button>
        </Link>
      </Container>
    )
  }
  else{
    return(
      <h1 style={{textAlign:"center"}}>You shouldn't be here</h1>
    )
  }

}
