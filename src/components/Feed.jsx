import React from 'react';
import { Box} from '@mui/material'
import Posts from './Posts';
import Pictures from './Pictures';

const Feed = () => {
 
  return (
    <Box flex={4} p={2}>
    {
    Pictures.map((val,index)=>{
      
      return <Posts key={index} source={val.imgsource}
        avatarSrc={val.avatarSrc}
        alt={val.alt}
      />
    })
    }

         </Box>)
};

export default Feed;


  
