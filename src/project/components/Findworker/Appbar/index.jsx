import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';

export default function DenseAppBar({set_function}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense" sx={{justifyContent:"space-between"}}>
            <GoogleLogin
              onSuccess={credentialResponse => {
                console.log(credentialResponse);
                set_function(true);
              }}
              onError={() => {
                console.log('Login Failed');
              }}
            />
            <Typography variant="h6" color="inherit" component="span">
              Login to acess function
            </Typography>   
          </Toolbar>

        
      </AppBar>
    </Box>
  );
}