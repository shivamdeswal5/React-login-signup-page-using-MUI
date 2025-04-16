import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Button, Box, Typography, Grid } from '@mui/material';

export default function home() {

  const [userName, setUserName] = useState("");
  const navigate = useNavigate();


  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser && currentUser.FirstName) {
      setUserName(`${currentUser.FirstName} ${currentUser.LastName}`);
    } else {
      navigate("/login");
    }
  }, [navigate]);


  const handleLogout = () => {

    localStorage.removeItem("currentUser");
    localStorage.removeItem("isLogIn");
    navigate("/login");
  };

  return (
    <>
      <Typography
      sx={{backgroundColor:'#2c2638',color:'white',textAlign:"center",paddingTop:"4rem"}}
      variant="h3" component="h2"
      >Home Page</Typography>

      <Grid
        container
        spacing={{ xs: 2, md: 10 }} columns={{ xs: 4, sm: 8, md: 12 }}
        className={`bg-color grid-container`}
        direction="row"
        sx={{
          justifyContent: "center",
          alignItems: "center",
          gap: "6rem",
          height: "80.5vh",
        }}>
        <Typography variant="h5" component="h2">
          Welcome {userName}
        </Typography>

        <Button variant="contained" color="success">
          Logout
        </Button>

      </Grid>
    </>
  )
}
