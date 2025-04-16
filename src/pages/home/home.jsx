import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function home() {

  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser && currentUser.uFirstName) {
      setUserName(`${currentUser.uFirstName} ${currentUser.uLastName} `);
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {

    localStorage.removeItem("currentUser");
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
