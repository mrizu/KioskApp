import styled from "styled-components"
import {Field, Form, Formik} from "formik";
import CenteredSection from "../../base/CenteredSection/CenteredSection";
import Button from "../../base/Button/Button";
import {Link, useParams} from "react-router-dom";
import MenuItemsManager from "../../../elements/MenuItemsManager/MenuItemsManager";
import ManuItemsManager from "../../../elements/MenuItemsManager/MenuItemsManager";
import Clearfix from "../../base/Clearfix/Clearfix";
import AdminEditView from "../AdminEditView/AdminEditView";
import {useContext} from "react";
import {IsAccessGranted} from "../../../App";

const Container = styled.div`
  width: 600px;
  min-height: 100%;
  padding: 40px 40px;
  margin-left: 50%;
  padding-top: 100px;
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
`;

function AdminEditProductView() {
  let {id} = useParams();
  let product = MenuItemsManager.getItemById(id);
  let isAdmin = useContext(IsAccessGranted)

  if (isAdmin) {
    return(
      <Container>
        {/*<h2>Product id: {id}</h2>*/}
        <h1>{product.name}</h1>
        <h3>ID: {id}</h3>
        <Formik
          initialValues={{
            name: '',
            basePrice: '',
            type: '',
          }}
          onSubmit={async (values) => {
            ManuItemsManager.editProduct(product.id, values.name, values.basePrice, values.type);
          }}>
          <Form>
            <label htmlFor="name">Product name</label>
            <Field style={{padding: 10, margin: "6px 10px", height: 30, fontSize: 20, border: "2px solid black", borderRadius: 5}} type="text" id="name" name="name" placeholder={product.name} required/>
            <Clearfix/>
            <label htmlFor="basePrice">Product base price</label>
            <Field style={{padding: 10, margin: "6px 10px", height: 30, fontSize: 20, border: "2px solid black", borderRadius: 5}} type="number" id="basePrice" name="basePrice" placeholder={product.basePrice} required/>
            <Clearfix/>
            <label htmlFor="type">Product type</label>
            <Field style={{padding: 10, margin: "6px 10px", height: 30, fontSize: 20, border: "2px solid black", borderRadius: 5}} type="type" id="type" name="type" placeholder={product.type} required/>
            <CenteredSection>
              <Button type="submit">Submit</Button>
            </CenteredSection>
            <Link to='/admin/edit' element={<AdminEditView/>}>
              <Button style={{position:"absolute",
                top:"20px",
                left: "20px"}}>Back</Button>
            </Link>
          </Form>
        </Formik>

      </Container>
    )
  }
  else{
    return (
      <h1>You shouldn't be here</h1>
    )
  }
}

export default AdminEditProductView;
