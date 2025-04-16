import React from 'react'
import { useNavigate } from 'react-router-dom';
import {Navigate} from "react-router-dom"

export default function Protected({children}) {

    const isLoggedIn = localStorage.getItem("currentUser");
    const isLogIn = localStorage.getItem('isLogIn')
    console.log(isLoggedIn);
    console.log(isLogIn);
    return isLogIn ? children :  <Navigate to="/"/>;
}
