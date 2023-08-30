import { Add as AddIcon, EmojiEmotions,Image,PersonAdd,Videocam } from "@mui/icons-material";

import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";

const StyledModal = styled(Modal)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: 5,
});

const Add = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        onClick={(e) => {
          setOpen(true);
        }}
        title="Add"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 10 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
     
        open={open}
        onClose={(e) => {
          setOpen(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          bgcolor={"background.default"} color={"text.primary"}
          p={2}
          width={400}
          height={280}

          borderRadius={5}
        >
          <Typography variant="h6" color="grey" textAlign="center">
            Create Post
          </Typography>

          <UserBox>
            <Avatar src="https://material-ui.com/static/images/avatar/2.jpg" />
            <Typography>Rowdy Rathor</Typography>
          </UserBox>

          <TextField
          
            id="filled-multiline-static"
            multiline
            sx={{ width: "100%" }}
            rows={3}
            placeholder="Write Something....."
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary"/>
            <Videocam  color="secondary"/>
            <Image  color="success"/>
            <PersonAdd  color="error"/>
          </Stack>
          <ButtonGroup fullWidth  >

          <Button width={100}variant="contained">Post</Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
