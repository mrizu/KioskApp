import styled from "styled-components"
import {Field, Form, Formik} from "formik";
import CenteredSection from "../../base/CenteredSection/CenteredSection";
import Button from "../../base/Button/Button";
import {useParams} from "react-router-dom";
import MenuItemsManager from "../../../elements/MenuItemsManager/MenuItemsManager";
import ManuItemsManager from "../../../elements/MenuItemsManager/MenuItemsManager";
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
`;

function AdminEditProductView() {
  let {id} = useParams();
  let product = MenuItemsManager.getItemById(id);

  return(
    <Container>
      <h2>Product id: {id}</h2>
      <h2>Product name: {product.name}</h2>
      <Formik
        initialValues={{
          name: '',
          basePrice: '',
          type: '',
        }}
        onSubmit={async (values) => {
          console.log(values)
          ManuItemsManager.editProduct(product.id, values.name, values.basePrice, values.type);
        }}>
        <Form>
          <label htmlFor="name">Product name</label>
          <Field type="text" id="name" name="name" placeholder={product.name}/>
          <Clearfix/>
          <label htmlFor="basePrice">Product base price</label>
          <Field type="number" id="basePrice" name="basePrice" placeholder={product.basePrice}/>
          <Clearfix/>
          <label htmlFor="type">Product type</label>
          <Field type="type" id="type" name="type" placeholder={product.type}/>
          <CenteredSection>
            <Button type="submit">Submit</Button>
          </CenteredSection>
        </Form>
      </Formik>

    </Container>
  )
}

export default AdminEditProductView;
