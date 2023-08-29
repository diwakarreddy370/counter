//import logo from './logo.svg';
//import './App.css';

import {useState, useEffect } from "react";

//diwakar
function App() {
  const [time, setTime]= useState(0);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      const inputTime = Math.floor(event.target.value);
      if (isNaN(inputTime)) {
        setTime(0);
      }else {
        setTime(inputTime);
      }
    }
  };

  useEffect(() => {
    let intervalID;
    if (time > 0) {
      intervalID = setInterval(() => {
        setTime((prevTime) => prevTime -1);
      },1000);
    }else {
      setTime(0);
    }
    return () => clearInterval(intervalID);
  },[time]);
  

  return(
    <div>
      <input id="timecount" onKeyDown={handleKeyDown}/>
      <div id="current-tome">{time}</div>
    </div>
  );
}

export default App;
