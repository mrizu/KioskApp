import {useLayoutEffect, useState} from "react";
import styled from "styled-components";

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
  padding-bottom: calc(40px + 100px); /* extra 100px for ButtonsContainer */
  border-radius: 15px;
  position: relative;
  text-align: center;
`;

export default function FinalView(){
  let [stage, setStage] = useState(0);
  let [paymentStage, setPaymentStage] = useState(0);

  useLayoutEffect(() => {
    setTimeout(() => {
      setPaymentStage(1);
    }, 4000);

    setTimeout(() => {
      setPaymentStage(2);
    }, 8000);

    setTimeout(() => {
      setStage(3);
    }, 10000);
  }, []);

  const generateNumber = () => {
    return Math.floor(Math.random() * 100);
  }

  return(
    <>
      <Container>

        {
          stage === 0
          ?
            <>
            {
              paymentStage === 0
              ?
                <h1>Please make your payment</h1>
              :

                <>
                  {
                    paymentStage === 1
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
              <h1>Thank you!</h1>
              <h2>Your order number is: {generateNumber()}</h2>
            </>
        }

      </Container>
    </>
  )
}
