import React, { useState } from 'react'
import './style.css'
import Box from '@mui/material/Box';
import coverImg from '../../assets/images/image.png'
import {
  Typography, Grid, Stack, InputLabel, InputAdornment,
  IconButton, FormControl, Checkbox, FormGroup, Button,
  colors
} from '@mui/material';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Divider from '@mui/material/Divider';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import { useNavigate } from "react-router-dom";

export default function signup() {

  const userDetail = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const [data, setData] = useState(userDetail);
  const navigate = useNavigate();

  const handleInput = (e) => {
    console.log(e.target.value);
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {

    e.preventDefault();
    if (data.name == "" && data.email == "" && data.password == "") {
      alert("Please all fields");
      
    } else {
      const getData = JSON.parse(localStorage.getItem("user") || "[]");
      let arr = [];
      arr = [...getData];
      arr.push(data);
      localStorage.setItem("user", JSON.stringify(arr));
      alert("Signup Successfully");
      navigate("/login");
    }
  };

  return (
    <>
      <Grid
          container
          spacing={{ xs: 2, md: 10}} columns={{ xs: 4, sm: 8, md: 12 }}
          className = {`bg-color grid-container`}
          direction="row"
          
          sx={{
            justifyContent:"center",
            alignItems: "center",
            gap:"6rem",
            height:"100vh",
            gridTemplateColumns: 'repeat(2, 1fr)'
          }}
          
      >
        <Box display={{xs:'none', md:'none', sm:'none', lg:'block'}}>
          <img src={coverImg} alt="coverimg" />
        </Box>

        <Stack direction={{ xs: 'column', sm: 'column' }}
          spacing={{ xs: 2, sm: 4, md: 4 }}>

          <Typography variant="h3" component="h2">
            Create an Account
          </Typography>

          <Box sx={{color:'gray'}}>
            Already have an account? <a href='/login'>Log in</a>
          </Box>


        <form className='form-class' onSubmit={handleSubmit}>

        <Stack className="signupName"
              direction={{ xs: 'column', sm: 'row' }}
              spacing={{ xs: 1, sm: 2, md: 4 }}
            >
              <TextField id="filled-basic"
                label="First Name"
                sx={{ color: 'white' }}
                variant="filled"
                className='changeColor'
                name="firstName"
                onChange={handleInput}
              />

              <TextField id="filled-basic" label="Last Name"
                variant="filled"
                name="lastName"
                onChange={handleInput}
                className='changeColor' />

            </Stack>

            <TextField
              required
              id="outlined-required"
              label="Email"
              placeholder='Required'
              className='changeColor'
              name="email"
              onChange={handleInput}
              sx={{ border: 'white' }}
            />

            <TextField fullWidth label="Enter Password"
              id="fullWidth"
              name="password"
              onChange={handleInput}
              className='changeColor' />


            <FormGroup>
              <FormControlLabel control={<Checkbox defaultChecked />} label={<Box> I agree to the <a className='line-through'>terms and conditions</a></Box>} />
            </FormGroup>

            <Button variant="outlined"
              sx={{ color: 'white', backgroundColor: '#7055b5', border: '0px' }}
              className='submitBtn'
              type="submit"
              onSubmit={handleSubmit}
            > Create Account</Button>

        </form>

          <Stack direction={{ xs: 'column', sm: 'column' }}
            spacing={{ xs: 1, sm: 2, md: 4 }}>

            <Divider className='divider'
              sx={{ color: 'gray', borderColor: 'red' }}
            >
              <Typography>Or register with</Typography>
            </Divider>

            <Stack direction={{ xs: 'row', sm: 'row' }}
              spacing={{ xs: 1, sm: 2, md: 4 }}>

              <Button variant="outlined" startIcon={<GoogleIcon />}>
                Delete
              </Button>

              <Button variant="outlined" startIcon={<AppleIcon />}>
                Delete
              </Button>

            </Stack>


          </Stack>

        </Stack>

      </Grid>
    </>
  )
}
