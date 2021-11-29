import logo from './logo.svg';
import {
  BrowserRouter
} from "react-router-dom";
import './App.css';


import { Task1 } from './Task1';


function App() {
  return (
    <>
        <BrowserRouter>
          <Task1/>
        </BrowserRouter>
    </>
  );
}

export default App;
