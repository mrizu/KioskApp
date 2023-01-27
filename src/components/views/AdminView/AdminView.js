import { Formik, Field, Form } from 'formik';
import {useRef, useState} from "react";
import {Link} from "react-router-dom";
import AdminStatisticsView from "../AdminStatisticsView/AdminStatisticsView";
import styled from "styled-components";
import CenteredSection from "../../base/CenteredSection/CenteredSection";
import Button from "../../base/Button/Button";

const Container = styled.div`
  width: 320px;
  min-height: 250px;
  background-color: white;
  color: black;
  border: 0;
  padding: 16px;
  margin: 8px 16px;
  margin-top: 50vh;
  transform: translateY(-50%);
  font-size: 40px;
  font-weight: bold;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: 0.5s;
  float: left;
  text-align: center;
`;

export default function AdminView(){
  let [isAccessGranted, setAccessGranted] = useState(false);
  let [accessCodeInput, setAccessCodeInput] = useState("");

  const handleSubmit = () => {
    if (parseInt(accessCodeInput) === 777) {
      localStorage.setItem("isAdmin", 1);
      setAccessGranted(true);
    } else {
      alert("Code is wrong")
    }
  }

  return(
    <>
      <CenteredSection>
      <Container>
        <CenteredSection>
        {
          !isAccessGranted
          ?
            <Formik
              initialValues={{
                accessCode: '',
              }}
              >
              <Form>
                <label htmlFor="accessCode">Access code</label>
                <Field style={{height: "50px", border: "2px solid gray", margin: "10px 0", borderRadius: "12px", fontSize: 36, width: "100%"}}
                       onChange={(e) => setAccessCodeInput(e.target.value)} value={accessCodeInput} type="number"
                       id="accessCode" name="accessCode"/>
                <CenteredSection>
                  <Button onClick={() => handleSubmit()}>Submit</Button>
                </CenteredSection>
              </Form>
            </Formik>
            :
            <>
              <h1>Admin panel</h1>
              <CenteredSection>
              <Link to="edit">
                <Button style={{width: "calc(100% - 12px)"}}>Edit items</Button>
              </Link>
              <Link to="stats" element={<AdminStatisticsView />}>
                <Button style={{width: "calc(100% - 12px)"}}>View statistics</Button>
              </Link>
              </CenteredSection>

            </>
        }
        </CenteredSection>
      </Container>
      </CenteredSection>
    </>
  )
}
