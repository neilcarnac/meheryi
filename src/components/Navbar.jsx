import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ color: 'white', display: 'flex', justifyContent: 'space-between', backgroundColor: 'black' }}>
        <Box>
        </Box>
        <Box>
          <RouterLink to="/">
            <Button>
              Home
            </Button>
          </RouterLink>
          <RouterLink to="/About">
            <Button>
              About
            </Button>
          </RouterLink>
          <RouterLink to="/Pricing">
            <Button>
              Pricing
            </Button>
          </RouterLink>
          <RouterLink to="/Contact">
            <Button>
              Contact
            </Button>
          </RouterLink>
          <RouterLink to="/book-demo">
            <Button>
              Book a Demo
            </Button>
          </RouterLink>
          <RouterLink to="/SignupPage">
            <Button>
              Signup
            </Button>
          </RouterLink>

          {/* <Button component={Link} to="/Home" color="inherit">Home</Button>
          <Button component={Link} to="/About" color="inherit">About Us</Button>
          <Button component={Link} to="/Pricing" color="inherit">Pricing</Button>
          <Button component={Link} to="/Contact" color="inherit">Contact Us</Button>
          <Button component={Link} to="/book-demo" variant="inherit" color="secondary">Book a Demo</Button>
          <Button component={Link} to="/SignupPage" variant="inherit" color="secondary">Sign Up</Button>
          <Button component={Link} to="/try-demo" variant="outlined" color="inherit">
            Try Demo for Free
          </Button> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
