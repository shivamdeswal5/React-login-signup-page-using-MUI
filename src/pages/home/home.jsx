import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function home() {

  const [userName, setUserName] = useState("");
  const navigate = useNavigate();


  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  if (currentUser && currentUser.uFirstName) {
    setUserName(`${currentUser.FirstName} ${currentUser.LastName} `);
  } else {
    navigate("/login");
  }


  const handleLogout = () => {

    localStorage.removeItem("currentUser");
    localStorage.removeItem("isLogIn");
    navigate("/login");
  };

  return (
    <div>
      <div className='home'>
        <h2>Welcome {userName}</h2>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  )
}
