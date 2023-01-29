import {useMemo, useState} from "react";
import {useContext} from "react";
import {IsAccessGranted} from "../../../App";
import MenuItemsManager from "../../../elements/MenuItemsManager/MenuItemsManager";
import CenteredSection from "../../base/CenteredSection/CenteredSection";
import styled from "styled-components";
import {Link} from "react-router-dom";
import AdminView from "../AdminView/AdminView";
import Button from "../../base/Button/Button";

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

const Table = styled.table`
  margin-top: 40px;
  border: 2px solid black;
  border-radius: 8px;
  padding: 20px;
  width: 400px;
  background-color: white;
  color: black;
`;

const Td = styled.td`
  text-align: center;
`;

const Th = styled.th`
  font-size: 26px;
  border-bottom: 1px solid gray;
  padding-bottom: 2px;
  margin-bottom: 10px;

`;

export default function AdminStatisticsView(){
  let adminContext = useContext(IsAccessGranted);

  const [month, setMonth] = useState(1);
  const [day, setDay] = useState(0);
  let [menuProducts, setMenuProducts] = useState([])
  useMemo(() => {
    setMenuProducts(MenuItemsManager.getItems());
  }, [])

  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  if(adminContext.isAdmin){
    return(
      <>
        {
          adminContext.isAdmin
            ?
            <Container>
              <CenteredSection>
                <h1 style={{fontSize:"50px", textAlign:"center"}}>Statistics</h1>
                <CenteredSection>
                <select style={{fontSize:"22px", borderRadius:"6px", margin: "2px 16px",
                  padding: "8px", backgroundColor:"white"}}
                        onChange={(e) => setMonth(e.target.options.selectedIndex)}>
                  <option defaultValue='1'>Janaury</option>
                  <option value='2'>February</option>
                  <option value='3'>March</option>
                  <option value='4'>April</option>
                  <option value='5'>May</option>
                  <option value='6'>June</option>
                  <option value='7'>July</option>
                  <option value='8'>August</option>
                  <option value='9'>September</option>
                  <option value='10'>October</option>
                  <option value='11'>November</option>
                  <option value='12'>December</option>
                </select>
                <select style={{fontSize:"22px", borderRadius:"6px", margin: "2px 16px",
                  padding: "8px", backgroundColor:"white"}}
                        onChange={(e) => setDay(e.target.options.selectedIndex)}>
                  <option value='0'>All</option>
                  <option defaultValue='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                  <option value='6'>6</option>
                  <option value='7'>7</option>
                  <option value='8'>8</option>
                  <option value='9'>9r</option>
                  <option value='10'>10</option>
                  <option value='11'>11</option>
                  <option value='12'>12</option>
                  <option value='13'>13</option>
                  <option value='14'>14</option>
                  <option value='15'>15</option>
                  <option value='16'>16</option>
                  <option value='17'>17</option>
                  <option value='18'>18</option>
                  <option value='19'>19</option>
                  <option value='20'>20</option>
                  <option value='21'>21</option>
                  <option value='22'>22</option>
                  <option value='23'>23</option>
                  <option value='24'>24</option>
                  <option value='25'>25</option>
                  <option value='26'>26</option>
                  <option value='27'>27</option>
                  <option value='28'>28</option>
                  <option value='29'>29</option>
                  <option value='30'>30</option>
                </select>
                </CenteredSection>
                <Table>
                  <thead>
                    <tr>
                      <Th style={{textAlign: "left"}}>Name</Th>
                      <Th>Sales</Th>
                    </tr>
                  </thead>
                  <tbody>
                  {
                    menuProducts.map(
                      menuProduct => <tr key={menuProduct.id}><td key={menuProduct.id + "-" + month + "-" + day}>
                        <span>{menuProduct.name}</span>
                      </td>
                        <Td>
                          {
                            day === 0
                              ?
                              getRandomNumber(4*30, 60*30)
                              :
                              getRandomNumber(4, 60)
                          }
                        </Td>
                      </tr>
                    )
                  }
                  </tbody>
                </Table>
              </CenteredSection>
              <Link to='/admin' element={<AdminView/>}>
                <Button style={{position:"absolute",
                  top:"20px",
                  left: "20px"}}>Back</Button>
              </Link>
            </Container>
            :
            <>
              Access not granted
            </>
        }
      </>
    )
  }else{
    <h1>You shouldn't be here!</h1>
  }

}
