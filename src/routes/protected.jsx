import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Protected({children}) {

    const navigate = useNavigate();

    const isLoggedIn = localStorage.getItem("currentUser");
    const isLogIn = localStorage.getItem('isLogIn')
    console.log(isLoggedIn)
    return isLogIn ? children : navigate('/signup');
}
