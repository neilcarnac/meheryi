import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'black' }}>
        <Box>
          <Typography variant="h6" component="div">
            Logo
          </Typography>
        </Box>
        <Box>
          <Button component={Link} to="/about" color="inherit">About Us</Button>
          <Button component={Link} to="/pricing" color="inherit">Pricing</Button>
          <Button component={Link} to="/contact" color="inherit">Contact Us</Button>
          <Button component={Link} to="/book-demo" variant="inherit" color="secondary">Book a Demo</Button>
          <Button component={Link} to="/try-demo" variant="outlined" color="inherit">
            Try Demo for Free
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
