import './App.css';
import styled from "styled-components"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomeView from "./components/views/HomeView/HomeView";
import MenuView from "./components/views/MenuView/MenuView";
import TakeoutChoiceView from "./components/views/TakeoutChoiceView/TakeoutChoiceView";
import ProductView from "./components/views/ProductView/ProductView";
import BasketView from "./components/views/BasketView/BasketView";
import FinalView from "./components/views/FinalView/FinalView";
import AdminView from "./components/views/AdminView/AdminView";
import AdminStatisticsView from "./components/views/AdminStatisticsView/AdminStatisticsView";
import AdminEditView from "./components/views/AdminEditView/AdminEditView";
import AdminEditProductView from "./components/views/AdminEditProductView/AdminEditProductView";
import {createContext} from "react";
import {useState} from "react";

const Container = styled.div`
  width: 720px;
  height: 100vh;
  overflow: auto;
  position: absolute;
  top: 0;
  left: 50%;
  background: brown;
  transform: translateX(-50%);
  overflow-x: hidden;
  float: left;
`;

export const IsAccessGranted = createContext(false);

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  return (
    <Container>
      <IsAccessGranted.Provider value={{isAdmin, setIsAdmin}}>
      <BrowserRouter>
        <Routes>
          <Route path = '/' element={<HomeView />}/>
          <Route path = '/choose' element={<TakeoutChoiceView />}/>
          <Route path = '/menu' element = {<MenuView />}/>
          <Route path = '/item/:id' element = {<ProductView />}/>
          <Route path = '/basket' element = {<BasketView />}/>
          <Route path = '/final' element = {<FinalView />}/>
          <Route path = '/admin' element = {<AdminView />}/>
          <Route path = '/admin/edit' element = {<AdminEditView />}/>
          <Route path = '/admin/stats' element = {<AdminStatisticsView />}/>
          <Route path = '/admin/editProduct/:id' element = {<AdminEditProductView />}/>
        </Routes>
      </BrowserRouter>
      </IsAccessGranted.Provider>
    </Container>
  );
}

export default App;
