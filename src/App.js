import logo from './logo.svg';
import './App.css';
import styled from "styled-components"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomeView from "./components/views/HomeView/HomeView";
import MenuView from "./components/views/MenuView/MenuView";
import MenuItem from "./elements/MenuItem/MenuItem";
import TakeoutChoiceView from "./components/views/TakeoutChoiceView/TakeoutChoiceView";
import ProductView from "./components/views/ProductView/ProductView";

const Container = styled.div`
  width: 720px;
  height: 100vh;
overflow: auto;
  position: absolute;
  top: 0;
  left: 50%;
  background: brown;
  transform: translateX(-50%);
  float: left;
`;

function App() {
  return (
    <>
      <p>test xdsaaaaaaaaaaaaaaaaaaad</p>
      <HomeView />
    </>
  );
}

export default App;
