import React from 'react'
import './navbar.css';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
const navbar = () => {
  return (
 <>
<AppBar position="static">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'black' }}>
        <Box>
          <Typography variant="h6" component="div">
            Logo
          </Typography>
        </Box>
        <Box>
          <Button color="inherit">About Us</Button>
          <Button color="inherit">Pricing</Button>
          <Button color="inherit">Contact Us</Button>
          <Button variant="inherit" color="secondary"> Book a Demo </Button>
          <Button variant="outlined" color="inherit">
            Try Demo for Free
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
 </>
  )
}

export default navbar;
