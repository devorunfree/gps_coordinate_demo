import React, { useEffect, useState } from "react";
export default function SendMessage() {
    const [seconds, setSeconds] = useState("HelloWorld");
    const [second1, setSeconds1] = useState(1);
    const [sec, setSec] = useState(1);
  
    useEffect(() => {
      const timer = setInterval(() => {
        setSeconds("HelloWorld\n");
        setSeconds1(second1 + 1)
      }, 2000);
      return () => clearInterval(timer);});
      
    //   useEffect(() => {
    //     const timer1 = setInterval(() => {
    //       setSec(sec+1);
    //     }, 1000);
    //              // clearing interval
    //   return () => clearInterval(timer1);
    // });
  
    return (
      <div className="App">
        <h1>Printing {seconds} version: {second1}</h1>
      </div>
    );
  }