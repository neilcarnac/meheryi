import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
const Navsign = () => {
    return (

        <>
            <AppBar position="static" sx={{ backgroundColor: 'black' }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ textDecoration: 'none', color: 'white' }}>
                        <RouterLink to="/" style={{ textDecoration: 'none', color: 'white' }}>
                            Logo
                        </RouterLink>
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navsign
