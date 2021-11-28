import logo from './logo.svg';
import './App.css';


import { Task1 } from './Task1';
import { Task2 } from './Task2';
import { Task3 } from './Task3';
import { Task4 } from './Task4';



function App() {
  return (
    <>
      <div className='block_tasks'>
        <Task1/>
        <Task2/>
        <Task3/>
        <Task4/>
      </div>
    </>
  );
}

export default App;
