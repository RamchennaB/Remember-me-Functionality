import React from 'react'
import { useNavigate } from 'react-router-dom';
function Home(){
    const navigate=useNavigate();


    function handlelogout(){
        localStorage.removeItem("loggedin");
        navigate("/login");
    }
  return (
    <div className="app-container">
    <h2 className="welcome-text">
       Welcome
    </h2>
  <button onClick={handlelogout}
      className="logout-button">
      Logout
  </button>
 </div> 
  );
}

export default Home
