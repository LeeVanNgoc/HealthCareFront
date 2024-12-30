import React from 'react';
import {styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'aqua',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: '',
  border: 'none',
  boxShadow: 'none'
}));

function Footer() {

  	return (
      	<div className='footer'>
			<Box sx={{ flexGrow: 1 }} >
			<Grid container spacing={5} p={2} pt={10}>
				<Grid item xs={4}>
				<Item>
					<Typography variant='h5'  ml={2}>Giới thiệu</Typography>
					<Typography variant='body1' ml={3} fontSize={16}>
					Healthy care involves maintaining or improving the overall 
					well-being of individuals through various practices and 
					habits that promote physical, mental, and emotional health.
					It encompasses a proactive approach to health, focusing on 
					prevention rather than just treatment of illnesses.
					</Typography>
				</Item>
				</Grid>
				<Grid item xs>
				<Item>
					<Typography>Liên kết</Typography>
					<List >
						<ListItem>
							<ListItemText
							primary="Giới thiệu"
							/>
						</ListItem>
						<ListItem>
							<ListItemText
							primary="Sản phẩm"
							/>
						</ListItem>
						<ListItem>
							<ListItemText
							primary="....."
							/>
						</ListItem>
						<ListItem>
							<ListItemText
							primary="....."
							/>
						</ListItem>
					</List>
				</Item>
				</Grid>
				<Grid item xs={3}>
				<Item>
					<Typography variant='h5'  ml={2}>Phòng khám</Typography>
					<Typography variant='body1' ml={3} fontSize={16}>Địa chỉ: xxx-xxx-xxx-Hà Nội</Typography>
					<Typography variant='body1' ml={3} fontSize={16}>Email: xxx@xxx.xxx</Typography>
					<Typography variant='body1' ml={3} fontSize={16}>Phone: 0xxxxxxxxxx</Typography>
					<Typography variant='body1' ml={3} fontSize={16}>Thời gian mở cửa: 8:00 - 22:00</Typography>
				</Item>
				</Grid>
				<Grid item xs={3}>
				<Item>
					<Typography variant='h5'  ml={2}>Nhận bản tin từ chúng tôi</Typography>
					<Typography variant='body1' ml={3} fontSize={16}>Khuyến mãi, các sản phẩm và khuyến cáo chăm sóc sức khoẻ mới</Typography>
					<Box
					component="form"
					sx={{
						display: 'flex',
						alignItems: 'center',
						'& > :not(style)': {m: 2},
					}}
					noValidate
					autoComplete="off"
					fontSize={16}
					ml={1}
					>
					<TextField id="standard-basic" placeholder='Email' variant="standard" />
					<ArrowForwardIcon fontSize='large'/>  
					</Box>
				</Item>
				</Grid>
			</Grid>
			</Box>
		</div>
	);
}

export default Footer;
