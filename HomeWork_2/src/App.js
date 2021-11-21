 import DemoFuncButton from "./Components/Buttons";
 import UserList from "./Components/task2";
 import LoaderImg from "./Components/task3";
 import Task4 from "./Components/task4";
 //import "./App.css";


function App() {
  return (
      <div className="mainBox">      
       <h1>Lesson 2</h1>
      { 
      <>
       <DemoFuncButton/> 
       <UserList/>
       
       <LoaderImg title="image loading ..." src="https://media.springernature.com/lw630/nature-cms/uploads/cms/pages/2913/top_item_image/cuttlefish-e8a66fd9700cda20a859da17e7ec5748.png" />
       <Task4/>
       </>
       }
       </div>
  )
}

export default App;
