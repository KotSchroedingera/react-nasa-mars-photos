import React from 'react'; 
import { AppBar, Box, Toolbar, IconButton, Typography } from '@mui/material';

export const Footer = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Used Nasa API
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
