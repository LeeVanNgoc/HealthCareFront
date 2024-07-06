import React from 'react';
import PropTypes from 'prop-types';
import { Box, AppBar, Toolbar, Button, Container, Divider, Typography, MenuItem, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ToggleColorMode from './ToggleColorMode';

function HeaderBar({ mode, toggleColorMode }) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const navigateToSection = (sectionId) => {
    const baseUrl = window.location.origin;
    window.location.href = `${baseUrl}/${sectionId}`;
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
        height: '64px', // Chiều cao cố định của HeaderBar
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          variant="regular"
          sx={(theme) => ({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexShrink: 0,
            borderRadius: '999px',
            bgcolor:
              theme.palette.mode === 'light'
                ? 'rgba(255, 255, 255, 0.4)'
                : 'rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(24px)',
            maxHeight: 40,
            border: '1px solid',
            borderColor: 'divider',
            boxShadow:
              theme.palette.mode === 'light'
                ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                : '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
          })}
        >
          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
              alignItems: 'center',
              ml: '-18px',
              px: 0,
            }}
          >
            <MenuItem onClick={() => navigateToSection('')} sx={{ py: '6px', px: '12px' }}>
                <Typography variant="body2" color="#0040ff" fontSize="large" align="left" paddingLeft={2}>
              Lee Ngọc
            </Typography>
              </MenuItem>
            
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <MenuItem onClick={() => navigateToSection('user-manager-001')} sx={{ py: '6px', px: '12px' }}>
                <Typography variant="body2" color="text.primary">
                  Features
                </Typography>
              </MenuItem>
              <MenuItem onClick={() => navigateToSection('user-manager-002')} sx={{ py: '6px', px: '12px' }}>
                <Typography variant="body2" color="text.primary">
                  Member
                </Typography>
              </MenuItem>
              <MenuItem onClick={() => navigateToSection('user-manager-003')} sx={{ py: '6px', px: '12px' }}>
                <Typography variant="body2" color="text.primary">
                  Doctor
                </Typography>
              </MenuItem>
              <MenuItem onClick={() => navigateToSection('user-manager-004')} sx={{ py: '6px', px: '12px' }}>
                <Typography variant="body2" color="text.primary">
                  Comment
                </Typography>
              </MenuItem>
              <MenuItem onClick={() => navigateToSection('user-manager-005')} sx={{ py: '6px', px: '12px' }}>
                <Typography variant="body2" color="text.primary">
                  FAQ
                </Typography>
              </MenuItem>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 0.5,
              alignItems: 'center',
            }}
          >
            <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
            <Button color="primary" variant="text" size="small" component="a" href="/sign-in" target="_blank">
              Sign in
            </Button>
            <Button color="primary" variant="contained" size="small" component="a" href="/sign-up" target="_blank">
              Sign up
            </Button>
          </Box>
          <Box sx={{ display: { sm: '', md: 'none' } }}>
            <Button
              variant="text"
              color="primary"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ minWidth: '30px', p: '4px' }}
            >
              <MenuIcon />
            </Button>
            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
              <Box
                sx={{
                  minWidth: '60dvw',
                  p: 2,
                  backgroundColor: 'background.paper',
                  flexGrow: 1,
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'end',
                    flexGrow: 1,
                  }}
                >
                  <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
                </Box>
                <MenuItem onClick={() => navigateToSection('user-manager-001')}>
                  Features
                </MenuItem>
                <MenuItem onClick={() => navigateToSection('user-manager-002')}>
                  Testimonials
                </MenuItem>
                <MenuItem onClick={() => navigateToSection('highlights')}>
                  Highlights
                </MenuItem>
                <MenuItem onClick={() => navigateToSection('pricing')}>
                  Pricing
                </MenuItem>
                <MenuItem onClick={() => navigateToSection('faq')}>FAQ</MenuItem>
                <Divider />
                <MenuItem>
                  <Button
                    color="primary"
                    variant="contained"
                    component="a"
                    href="/sign-up"
                    target="_blank"
                    sx={{ width: '100%' }}
                  >
                    Sign up
                  </Button>
                </MenuItem>
                <MenuItem>
                  <Button
                    color="primary"
                    variant="outlined"
                    component="a"
                    href="/sign-in"
                    target="_blank"
                    sx={{ width: '100%' }}
                  >
                    Sign in
                  </Button>
                </MenuItem>
              </Box>
            </Drawer>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

HeaderBar.propTypes = {
  mode: PropTypes.oneOf(['dark', 'light']).isRequired,
  toggleColorMode: PropTypes.func.isRequired,
};

export default HeaderBar;
