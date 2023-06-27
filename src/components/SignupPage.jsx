import React from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import Navsign from './Navsign';
const SignupPage = () => {
  return (
    <>
    <Navsign />

    <Container maxWidth="sm" sx={{ marginTop: '2rem' }}>
      <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '2rem', color: 'black' }}>
        Signup
      </Typography>
      <form>
        <TextField
          label="Username"
          variant="filled"
          fullWidth
          margin="normal"
          sx={{ borderRadius: '20px',backgroundColor: 'white' }}
        />
        <TextField
          label="Email"
          variant="filled"
          fullWidth
          margin="normal"
          sx={{ borderRadius: '20px',backgroundColor: 'white' }}
        />
        <TextField
          label="Password"
          variant="filled"
          fullWidth
          margin="normal"
          type="password"
          sx={{ borderRadius: '20px',backgroundColor: 'white' }}
        />
        <TextField
          label="Confirm Password"
          variant="filled"
          fullWidth
          margin="normal"
          type="password"
          sx={{ borderRadius: '20px',backgroundColor: 'white' }}
        />
        <center><Button
          variant="contained"
          
          sx={{
            marginTop: '1rem',
            backgroundColor: 'black',
            color: 'white',
            '&:hover': {
              transition: '1000ms',
              backgroundColor: 'white',
              color: 'black',
            },
          }}
        >
          Sign Up
        </Button>
        </center>
      </form>
    </Container>
    </>
  );
};

export default SignupPage;
