import { Box, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import GroupsIcon from '@mui/icons-material/Groups';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import React from 'react'
import { ModeNight } from '@mui/icons-material';

const Sidebar = ({mode,setMode}) => {
  return (
    <Box flex={1} p={2} sx={{display:{xs:"none" , sm:"block"}}}>
    <Box position="fixed">

    <ListItemButton component="a" href='#'>
        <ListItemIcon>
        <HomeIcon/>
        </ListItemIcon>
        <ListItemText primary="HomePage" />
      </ListItemButton>
    
      <ListItemButton component="a" href='#'>
        <ListItemIcon>
        <ArticleIcon/>
        </ListItemIcon>
        <ListItemText primary="Pages" />
      </ListItemButton>

      <ListItemButton component="a" href='#'>
        <ListItemIcon>
        <GroupsIcon/>
        </ListItemIcon>
        <ListItemText primary="Groups" />
      </ListItemButton>

      <ListItemButton component="a" href='#'>
        <ListItemIcon>
        <StorefrontIcon/>
        </ListItemIcon>
        <ListItemText primary="Marketplace" />
      </ListItemButton>

      <ListItemButton component="a" href='#'>
        <ListItemIcon>
        <PersonIcon/>
        </ListItemIcon>
        <ListItemText primary="Friends" />
      </ListItemButton>

      <ListItemButton component="a" href='#'>
        <ListItemIcon>
        <SettingsIcon/>
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItemButton>

      <ListItemButton component="a" href='#'>
        <ListItemIcon>
        <AccountBoxIcon />
        </ListItemIcon>
        <ListItemText primary="Profile" />
      </ListItemButton>

      <ListItemButton component="a" href='#'>
        <ListItemIcon>
        <ModeNight/>
        </ListItemIcon>
      <Switch onClick={e=> setMode(mode ==="light" ? "dark" : "light")}/>
      </ListItemButton>
    
    </Box>
    </Box>
  )
}

export default Sidebar