
import React, { useEffect, useState } from "react";

function App() {

  let [x, setX] = useState(0);

  let [din,setDin]=useState(0);


  useEffect(()=>{
     console.log("am afost creat");

     return ()=>console.log("distruge");//seapeleaza cand se distruge componenta
  },[])

  

  useEffect(()=>{
    console.log("am afost creat dep ");
 },[x,din])

 


  let handleClick=()=>{

    setDin(prev=>prev+1);
   
  }

  let handleX=()=>{

    setX(prev=>prev+1);

  }
  return (

     <>
       <p>Ce mai faci {x}</p>
       <p>Ex dinamic  {din}</p>
       <button onClick={handleClick}>Increment Din</button>
       <button onClick={handleX}>Increment X</button>
     </>
  
  );
}

export default App;
