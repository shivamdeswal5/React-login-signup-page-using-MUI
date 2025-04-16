import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}
    >
      <AppBar position="static" 
      sx={{backgroundColor:"#7050c0"}}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 , }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MUI Login/Signup
          </Typography>
          <Button color="inherit" href='/login'>Login</Button>
          <Button color="inherit" href='/'>Signup</Button>
          <Button color="inherit" href='/home'>Home</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}