import * as React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';


export default function UserButton() {
  return (
    <Stack direction="row" spacing={2}>
      <Custom_Button link='https://docs.google.com/forms/d/e/1FAIpQLSfNWRPc4tS6qnJVWjo_knh232EOkoSondfwXupkzCwKzcqv7w/viewform' word='post at'/>

      <Custom_Button link='https://docs.google.com/forms/d/e/1FAIpQLSdIj3EKvGmdg_olWN_BVre1lp4nxEFnPmsVTF6_bf6AhaTchQ/viewform' word='register'/>
    </Stack>
  );
}


function Custom_Button({link, word}){
    return (
        <div style={{
            width: '200px', 
            height: '50px', 
            backgroundColor: 'blue', // Use the color prop
            color: 'white', 
            borderRadius: '50px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', // Add shadow effect
        }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} align="center">
                <a href={link}>
                    {word}
                </a>
            </Typography>
        </div>
    )
}