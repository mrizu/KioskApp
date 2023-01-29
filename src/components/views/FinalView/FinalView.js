import {useLayoutEffect, useReducer} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import HomeView from "../HomeView/HomeView";
import Basket from "../../../elements/Basket/Basket";

const Container = styled.div`
  width: 600px;
  min-height: 100%;
  padding: 40px 40px;
  padding-top: 35%;
  margin-left: 50%;
  transform: translateX(-50%);
  float: left;
  background-color: white;
  color: black;
  font-size: 40px;
  padding-bottom: calc(40px + 100px);
  border-radius: 15px;
  position: relative;
  text-align: center;
`;

const FinalContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  float: left;
`;

const ClickingArea = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  cursor: pointer;

`;


const INITIAL_STATE = {
  stage: 0,
  paymentStage: 0
}

const reducer = (state, action) => {
  switch (action.type) {
    case "PAYMENT_START":
    return {
      stage: 0,
      paymentStage: 0
    }
    case "PAYMENT_PROCESSING":
      return {
        stage: 0,
        paymentStage: 1
      }
    case "PAYMENT_ACCEPTED":
      return {
        stage: 0,
        paymentStage: 2
      }
    case "PAYMENT_FINISHED":
      Basket.clearBasket();
      return {
        stage: 1,
        paymentStage: 2
      }
    default:
      return state;
  }
};

export default function FinalView(){
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  useLayoutEffect(() => {
    dispatch({type: "PAYMENT_START"});
    setTimeout(() => {

      dispatch({type: "PAYMENT_PROCESSING"});

    }, 4000);

    setTimeout(() => {
      dispatch({type: "PAYMENT_ACCEPTED"});
    }, 8000);

    setTimeout(() => {
      dispatch({type: "PAYMENT_FINISHED"});
    }, 10000);
  }, []);

  const generateNumber = () => {
    return Math.floor(Math.random() * 100);
  }

  return(
    <>
      <Container>

        {
          state.stage === 0
          ?
            <>
            {
              state.paymentStage === 0
              ?
                <h1>Please make your payment</h1>
              :

                <>
                  {
                    state.paymentStage === 1
                      ?
                      <>
                        <h1>Processing your payment...</h1>
                        <h2>Please wait</h2>
                      </>
                      :
                      <>
                        <h1>Payment accepted</h1>
                      </>
                  }
                </>
            }
            </>

          :
            <>

                <FinalContainer>
                  <Link style={{textDecoration: "none", color:"black"}} to={'/'} element={<HomeView/>}>
                    <ClickingArea />
                  </Link>
                  <h1>Thank you!</h1>
                  <h2>Your order number is: {generateNumber()}</h2>
                </FinalContainer>
            </>
        }

      </Container>
    </>
  )
}
