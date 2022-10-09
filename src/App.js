import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

function App() {
  const [breakLength, setBreakLength] = useState(8);
  const [sessionLength, setSessionLength] = useState(25);
  const [timer, setTimer] = useState((sessionLength * 60))
  const [intervalState, setIntervalState] = useState(null)
 let _interval;

  function get_time(sec) {
    var date = new Date(null);
    date.setSeconds(sec); 
    var result = date.toISOString().substring(14, 19);
    return result;
  }

  function start(){
    setTimer(sessionLength * 60)
   
    _interval = setInterval(() => {
      setTimer((pre => pre -1))
    }, 1000)  
    setIntervalState(_interval)

  }

  function pause(){

    clearInterval(intervalState)
  }

  function reset() {
    clearInterval(intervalState)
    setBreakLength(8);
    setSessionLength(25);
  }

  

  return (
    <div className="mx-auto w-[24rem]">
      <Header
        breakLength={breakLength}
        setBreakLength={setBreakLength}
        sessionLength={sessionLength}
        setSessionLength={setSessionLength}
     
      />
      <Main timer={timer} getTime={get_time}/>
      <Footer reset={reset} start={start} pause={pause}/>
    </div>
  );
}

export default App;
