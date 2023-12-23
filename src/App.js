// import React from "react";
import {  Link,  Route, Routes } from "react-router-dom";
import Home from "./Home";
function App(){
  return(
    <div>
     
      <Link to="/home"> Home </Link>
  
      <Routes>
       <Route path="/" element= { <Aboute />} />
       <Route path="/home" element= {<Home />} />
      </Routes>
      
      
    </div>
  )
}
export default App;




function Aboute(){
  return(
    <div>
      <h1> this is my aboute pase</h1>
    </div>
  )
}


