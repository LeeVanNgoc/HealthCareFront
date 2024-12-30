/* eslint-disable eqeqeq */
import * as React from 'react';
import { useEffect } from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import SearchIcon from '@mui/icons-material/Search';
import {useNavigate} from 'react-router-dom';

import {Search, SearchIconWrapper, StyledInputBase} from './style';
import { getIsLogin } from '../../Si001/main';

	function ResponsiveAppBar() {
		const navigate = useNavigate();

		const [anchorElUser, setAnchorElUser] = React.useState(null);
		const [isLogin, setIsLoginState] = React.useState(false);
		console.log( 'isLogin is ', isLogin)

		useEffect(() => {
			const checkIslogin = sessionStorage.getItem("isLogin");
			if(!checkIslogin || checkIslogin!="true") {
				localStorage.clear();
				navigate('/sign-in');
			} else {
				setIsLoginState(true);
			}
	
		}, [navigate]);
		console.log(isLogin);



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
		<div >
			<AppBar position="fixed">
				<Container maxWidth="xl">
					<Toolbar disableGutters>
					<AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
					<Typography
						variant="h6"
						noWrap
						component="a"
						href="/"
						sx={{
						mr: 2,
						display: { xs: 'none', md: 'flex' },
						fontFamily: 'monospace',
						fontWeight: 700,
						letterSpacing: '.3rem',
						color: 'inherit',
						textDecoration: 'none',
						}}
					>
						Home
					</Typography>

					<AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
					<Typography
						variant="h5"
						noWrap
						component="a"
						href="#app-bar-with-responsive-menu"
						sx={{
						mr: 2,
						display: { xs: 'flex', md: 'none' },
						flexGrow: 1,
						fontFamily: 'monospace',
						fontWeight: 700,
						letterSpacing: '.3rem',
						color: 'inherit',
						textDecoration: 'none',
						}}
					>
						Logo
					</Typography>
					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
						<Button
							href='/user-manager-001'
							sx={{ my: 2, color: 'white', display: 'block' }}
						>
							Service
						</Button>
						<Button
							href='/user-manager-002'
							sx={{ my: 2, color: 'white', display: 'block' }}
						>
							Products
						</Button>
						<Button
							href='/user-manager-003'
							sx={{ my: 2, color: 'white', display: 'block' }}
						>
							Doctor
						</Button>
						<Button
							href='/user-manager-004'
							sx={{ my: 2, color: 'white', display: 'block' }}
						>
							Blog
						</Button>
						<Button
							href='/user-manager-005'
							sx={{ my: 2, color: 'white', display: 'block' }}
						>
							Q&A
						</Button>
					</Box>

					{isLogin ? (
						<Box sx={{ display: 'flex', alignItems: 'center' }}> 
							<Box marginRight={2}>
								<Search>
									<SearchIconWrapper>
									<SearchIcon />
									</SearchIconWrapper>
									<StyledInputBase
									placeholder="Search…"
									inputProps={{ 'aria-label': 'search' }}
									/>
								</Search>
							</Box>

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
						</Box> // Nội dung khi đã đăng nhập
					) : (
						<Box sx={{ display: 'flex', alignItems: 'center' }} >
							<Box backgroundColor={'#bbd9f7'}  sx={{ml: 1, pr: 1, pl: 1, flexGrow: 0, borderRadius: 5 }}>
								<Tooltip title="Sign In">
									<IconButton component="a" href="/sign-up">
									<Typography color={'#000'} sx={{fontSize: 16, fontWeight: 3}}>Sign up</Typography>
									</IconButton>
								</Tooltip>
							</Box>
							<Box backgroundColor={'#bbd9f7'}  sx={{mr: 1, ml: 1, pr: 1, pl: 1, flexGrow: 0, borderRadius: 5 }}>
								<Tooltip title="Sign Up">
									<IconButton component="a" href="/sign-in">
										<Typography color={'#000'} sx={{fontSize: 16, fontWeight: 3}}>Sign In</Typography>
									</IconButton>
								</Tooltip>	
							</Box>
						</Box>
					)}
					</Toolbar>
				</Container>
			</AppBar>
		</div>
  	);	
}
export default ResponsiveAppBar;
