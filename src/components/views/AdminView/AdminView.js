import { Formik, Field, Form } from 'formik';
import {useRef, useState} from "react";
import {Link, Outlet} from "react-router-dom";
import AdminStatisticsView from "../AdminStatisticsView/AdminStatisticsView";

export default function AdminView(){
  let [isAccessGranted, setAccessGranted] = useState(false);
  let [accessCodeInput, setAccessCodeInput] = useState("");

  const handleSubmit = () => {
    if (parseInt(accessCodeInput) == 777) {
      localStorage.setItem("isAdmin", 1);
      setAccessGranted(true);
    } else {
      alert("Code is wrong")
    }
  }

  return(
    <>
      {
        !isAccessGranted
        ?
          <Formik
            initialValues={{
              accessCode: '',
            }}
            onSubmit={async (values) => {
              await new Promise((r) => setTimeout(r, 500));
              alert(JSON.stringify(values, null, 2));
            }}>
            <Form>
              <label htmlFor="accessCode">Access code</label>
              <Field onChange={(e) => setAccessCodeInput(e.target.value)} value={accessCodeInput} type="number" id="accessCode" name="accessCode"/>
              <button onClick={() => handleSubmit()}>Submit</button>
            </Form>
          </Formik>
          :
          <>
            <h1>Admin panel</h1>
            <Link to="edit">Edit items</Link>
            <Link to="stats" element={<AdminStatisticsView />}>View statistics</Link>
            <Outlet />
          </>
      }

    </>
  )
}
