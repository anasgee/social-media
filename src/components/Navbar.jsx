import { AppBar, Toolbar, Typography, styled,Box, InputBase, Badge, Avatar, Menu, MenuItem } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import React, { useState } from "react";
import { Mail, Notifications } from "@mui/icons-material";

const Navbar = () => {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",

  });

  const Search = styled("div")(({theme})=>({
    padding:"0 10px",
    color:"white",
    borderRadius:theme.shape.borderRadius,
    width:"40%",  
    border:"1px solid white",
  
  }));
  const Icons = styled(Box)(({theme})=>({
    display:"none",
    // justifyContent:"center",
    alignItems:"center",
    gap:"10px",
    [theme.breakpoints.up("sm")]:{
      display:"flex"
    }
 
  }));
 

  const UserBox=styled(Box) (({theme})=>({
    display:"flex",
    alignItems:"center",
    gap:"10px",
    [theme.breakpoints.up("sm")]:
    {
      display:"none"
    }

  }));

  const [open,setOpen]=useState(false)
  return (
    <AppBar position="sticky">
      <StyledToolbar > 
        <Typography variant="h6" sx={{display:{xs:"none" , sm:"block"}}}>FaceBook</Typography>
        <FacebookIcon sx={{display:{xs:"block" , sm:"none"}}}/>
        <Search><InputBase  type="search" placeholder="Search" style={{width:"100%",}}/></Search>
        <Icons >
        <Badge badgeContent={4} color="error">
        <Mail/>
        </Badge>
        <Badge badgeContent={2} color="error"> 
        <Notifications/>

        </Badge>
        <Avatar onClick={(e)=>setOpen(true)} sx={{width:"30px",height:"30px" , cursor:"pointer"}} alt="None"  src="https://material-ui.com/static/images/avatar/1.jpg" />
        </Icons>
        <UserBox onClick={(e)=>setOpen(true)}>
        <Avatar sx={{width:"30px",height:"30px" , cursor:"pointer"}} alt="None"  src="https://material-ui.com/static/images/avatar/1.jpg" />
        <Typography variant="span">FaceBook</Typography>
        </UserBox>

      </StyledToolbar>
      <Menu
      id="demo-positioned-menu"
      aria-labelledby="demo positioned menu"
      open={open}
      onClose={(e)=>setOpen(false)}
        anchorOrigin={{
          vertical:"top",
          horizontal:"right"
        }}
        transformOrigin={{
          vertical:"top",
          horizontal:"right"
        }}
      >

      <MenuItem onClick={()=>setOpen(false)}>Profile </MenuItem>
      <MenuItem onClick={()=>setOpen(false)}> Settings </MenuItem>
      <MenuItem onClick={()=>setOpen(false)}>Privacy </MenuItem>
      <MenuItem onClick={()=>setOpen(false)}>LogOut </MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
