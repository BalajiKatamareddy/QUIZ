import React from "react";
import { data } from "./components/data";
import './App.css';
import Quiz from "./components/quiz";
function App(){
  return(
    <div>
      <data/>
      <Quiz/>
    </div>
  )
}
export default App;