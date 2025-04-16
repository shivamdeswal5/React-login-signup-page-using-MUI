import React, { useState } from 'react'
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

export default function login() {

  const userDetail = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    if ("email" == name) {
      setEmail(value);
    }
    if ("password" == name) {
      setPassword(value);
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    if (email == "" || password == "") {
      alert("Please enter detail ");
    } else {
      let getDetials = JSON.parse(localStorage.getItem("user"));
      console.log(getDetials);
      getDetials.map((curValue) => {
        console.log(curValue.password);
        let FirstName = curValue.firstName;
        let LastName = curValue.lastName;
        let Email = curValue.email;
        let Password = curValue.password;

        if (Email == email && Password == password) {
          localStorage.setItem("currentUser", JSON.stringify({ FirstName, LastName, Email, Password }));
          localStorage.setItem("isLogIn", true);
          alert("Login Successfully !");
          navigate("/home");
        } else {
          return setMsg("Invalid Email or Password!");
        }
      });
    }
  };


  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, md: 10 }} columns={{ xs: 4, sm: 8, md: 12 }}
        className={`bg-color grid-container`}
        direction="row"
        sx={{
          justifyContent: "center",
          alignItems: "center",
          gap: "6rem",
          height:"93.2vh",
        }}

      >
        <Box display={{xs:'none', md:'none', sm:'none', lg:'block'}}>
          <img src={coverImg} alt="coverimg" />
        </Box>

        <Stack direction={{ xs: 'column', sm: 'column' }}
          spacing={{ xs: 1, sm: 2, md: 4 }}>

          <Typography variant="h5" component="h2">
            Login In
          </Typography>


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
            > Submit</Button>

          </form>

        </Stack>

      </Grid>
    </>
  )
}
