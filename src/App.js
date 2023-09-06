import Input from "./components/Input";
import Box from "../src/components/Box";
import { useState } from "react";

function App() {
  const [todos, setToDo] = useState([]);

  const removeToDo = (id) => {
    const newTodos = todos.filter(
      (id,index) =>{
        if(index !== id){
          return true;
        }else{
          return false;
        }
      }
    )
    setToDo(newTodos);
  }

  const addToDoHandler = (item) =>{
    setToDo(
      [
        ...todos,
        {
          item,
          time: new Date().toLocaleTimeString()
        }
      ]
    )
  }
  
  return (
    <>
    <div className='bg-black h-screen p-3'>
      <div className='bg-white max-w-[550px] min-h-[650px] mx-auto rounded-lg'>
        <Input handler = {addToDoHandler} removeHandler = {removeToDo}/>
        <Box data = {todos}/>
      </div>
    </div>
    </>
  );
}

export default App;
