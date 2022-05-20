import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import { color } from '@mui/system';
import React from 'react'; 
import { Link } from 'react-router-dom';



export const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
        position="fixed">
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
            <Link 
              style={{
                color: 'white', 
                textDecoration: 'none', 
              }}
              to={'/'}>Mars Photos</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
