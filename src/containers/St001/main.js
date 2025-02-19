import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';



function ResponsiveAppBar() {
	const [anchorElUser, setAnchorElUser] = React.useState(null);

	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};


	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	const handleSignOut = () => {
		setAnchorElUser(null);
	};
	return (
		<div className='header_container'>
			<AppBar position="fixed">
				<Container maxWidth="xl">
					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title="Open settings">
						<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
							<Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
						</IconButton>
						</Tooltip>
						<Menu
						sx={{ mt: '45px' }}
						id="menu-appbar"
						anchorEl={anchorElUser}
						anchorOrigin={{
							vertical: 'top',
							horizontal: 'right',
						}}
						keepMounted
						transformOrigin={{
							vertical: 'top',
							horizontal: 'right',
						}}
						open={Boolean(anchorElUser)}
						onClose={handleCloseUserMenu}
						>
						<Box sx={{ width: '150', display: 'flex', flexDirection: 'column', alignItems: 'left'}}>
							<MenuItem  onClick={handleCloseUserMenu}>
								<Typography textAlign="center">Profile</Typography>
							</MenuItem>
							<MenuItem  onClick={handleCloseUserMenu}>
								<Typography textAlign="center">Account</Typography>
							</MenuItem>
							<MenuItem  onClick={handleCloseUserMenu}>
								<Typography textAlign="center">Dashboard</Typography>
							</MenuItem>
							<MenuItem  onClick={handleCloseUserMenu}>
								<Typography textAlign="center">Help</Typography>
							</MenuItem>
							<MenuItem  onClick={handleSignOut}>
								<Typography textAlign="center">Log Out</Typography>
							</MenuItem>
						</Box>
							
						</Menu>
					</Box>
				</Container>
			</AppBar>
		</div>
  	);	
}
export default ResponsiveAppBar;
