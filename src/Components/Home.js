import React, { useState } from 'react';
import { useLocation } from "react-router-dom";



function Home() {
  const location = useLocation();

 

  return (
   
    <div className="homepage">
      <h1>HI  DR.  {location.state.id}  WELCOME TO  your DASHBOARD  
      </h1>
    </div>


  );
}

export default Home;
