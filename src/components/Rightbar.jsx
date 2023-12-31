import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } , alignItems:"center"  }}>
      <Box position="fixed" ml={2} width={300} >
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup total={24} sx={{ mb: 2 }}>
          <Avatar
            alt="Remy Sharp"
            src="https://material-ui.com/static/images/avatar/1.jpg"
          />
          <Avatar
            alt="Remy Sharp"
            src="https://material-ui.com/static/images/avatar/2.jpg"
          />
          <Avatar
            alt="Remy Sharp"
            src="https://material-ui.com/static/images/avatar/3.jpg"
          />
          <Avatar
            alt="Remy Sharp"
            src="https://material-ui.com/static/images/avatar/4.jpg"
          />
          <Avatar
            alt="Remy Sharp"
            src="https://material-ui.com/static/images/avatar/5.jpg"
          />
          <Avatar
            alt="Remy Sharp"
            src="https://material-ui.com/static/images/avatar/6.jpg"
          />
        </AvatarGroup>

        <Typography variant="h6" fontWeight={100} mb={2}>
          Trending Posts
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={10}>
          <ImageListItem>
            <img alt="img"
              src="https://material-ui.com/static/images/image-list/breakfast.jpg"
            />
          </ImageListItem>
          <ImageListItem>
            <img alt="img"
              src="https://material-ui.com/static/images/image-list/breakfast.jpg"
            />
          </ImageListItem>
          <ImageListItem>
            <img alt="img"
              src="https://material-ui.com/static/images/image-list/breakfast.jpg"
            />
          </ImageListItem>
          <ImageListItem>
            <img alt="img"
              src="https://material-ui.com/static/images/image-list/breakfast.jpg"
            />
          </ImageListItem>
          <ImageListItem>
            <img alt="img"
              src="https://material-ui.com/static/images/image-list/breakfast.jpg"
            />
          </ImageListItem>
          <ImageListItem>
            <img alt="img"
              src="https://material-ui.com/static/images/image-list/breakfast.jpg"
            />
          </ImageListItem>
        </ImageList>

        <Typography variant='h6' fontWeight={100}>Latest Chat</Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
       

      </Box>
    </Box>
  );
};

export default Rightbar;
