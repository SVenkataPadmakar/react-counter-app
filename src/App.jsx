import React,{useEffect,useState} from "react";
import './App.css';
import Header from "./Components/Header.jsx";
import Counter from "./Components/Counter.jsx";

function App() {
  const Hello=()=>{};
  return( 
    <>
      <div className="main">
        <Header/>
        <Counter/>
      </div>
    </>
  );

}

export default App;