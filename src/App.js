// import React from "react";
import { BrowserRouter, Link,  Route, Routes } from "react-router-dom";
import Home from "./Home";
function App(){
  return(
    <div>
      <BrowserRouter>
      <Link to="/home"> Home </Link>
  
      <Routes>
       <Route path="/" element= { <Aboute />} />
        
       <Route path="/home" element= {<Home />} />
      </Routes>
      
      </BrowserRouter>
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


