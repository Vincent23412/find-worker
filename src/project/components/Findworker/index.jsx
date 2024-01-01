import { Box, Stack } from '@mui/material';
import DenseAppBar from './Appbar/index.jsx';
import UserButton from './Button/index.jsx';
import Postcard from './Postcard/index.jsx';
import { useState } from 'react';

export default function Findworker() {
  
  const [login, setlogin] = useState(false);

  return (
    <>
        <DenseAppBar set_function={setlogin}/>

        <Stack 
            direction="column"
            justifyContent="center" // 將子元件置中
            alignItems="center" // 水平居中對齊
            sx={{ height: '80vh' }} // 容器高度為視窗高度
        >
            <Postcard login={login}/>
            <Stack direction="row" spacing={2} sx={{ position: 'absolute', bottom: 0 }}>
              <UserButton/>
            </Stack>
        </Stack>
    </>
);
}