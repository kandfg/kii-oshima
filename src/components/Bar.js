import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import LogoImg from "./logo.png";
import { NavLink } from "react-router-dom";

const pages = [{page_ch:'飼育心得',page_en:'review'},{page_ch: '照片',page_en:'photo'}];

function Bar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
const logo = <NavLink exact to="/">
  <img src={LogoImg} alt="logo" 
    noWrap
    sx={{display: { xs: 'none', md: 'flex' },
  }}>
  </img>
</NavLink>;

  return (
    <AppBar position="static" style={{ background: '#000000' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.page_en} onClick={handleCloseNavMenu}>
                  <NavLink to={"/"+page.page_en} underline="hover">
                    <Typography textAlign="center" >{page.page_ch}</Typography>
                  </NavLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {logo}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.page_en}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <NavLink to={"/"+page.page_en}>
                  <Typography textAlign="center" color="common.white">{page.page_ch}</Typography>
                </NavLink>
              </Button>
            ))}
          </Box>

          
        </Toolbar>
      </Container>
      
    </AppBar>
  );
}
export default Bar;