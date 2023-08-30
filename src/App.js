import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import { Box, Stack, ThemeProvider, createTheme } from '@mui/material';
import Navbar from './components/Navbar';
import Add from './components/Add';

const App=()=>{
   const[mode,setMode]=useState("light")

   const darkTheme=createTheme({
    palette:{
      mode:mode
    }
   })


  return(
    <>
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar/>
      <Stack spacing={2} direction="row" justifyContent="space-between">
      <Sidebar mode={mode} setMode={setMode}/>
      <Feed/>
      <Rightbar/>
      <Add/>
      </Stack>
</Box>  
    </ThemeProvider>
    </>
  )
}

export default App;
