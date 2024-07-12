import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
            <>
                <Box sx={{ flexGrow: 1 }}>
                <AppBar position="fixed" sx={{width:'100%',minHeight:50,backgroundColor:'red',boxShadow:'none'}}> 
                    <Toolbar sx={{justifyContent:'space-between'}}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ textAlign:'center',flexGrow: 1 }}>
                        WELCOME TO THE MOVIE WIZARD
                    </Typography>
                    <Link to={'/'}><Button color="inherit">View</Button></Link>
                    <Link to={'/add'}><Button color="inherit">Add</Button></Link>
                    </Toolbar>
                </AppBar>
                </Box>
                </>
  )
}

export default Navbar