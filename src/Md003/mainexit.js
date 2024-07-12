import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

function UserManager003() {
  return (
	<div className='doctor003'>
		<div className='doctor003-header'>
          <Box component="img" src="https://cdn.bookingcare.vn/fo/w1920/2023/11/02/113503-dich-vu-cham-soc-suc-khoe-tai-nha.png" alt="Sample Image"/>
        </div>
		<div className='doctor003-body'>
			<Box  sx={{ margin: '0 40px' }} >
				<List sx={{ bgcolor: 'background.paper', pl: '100px', pr: '100px'}}>
					<ListItem alignItems="center">
					<ListItemAvatar>
						<Avatar sx={{width: '100px', height: '100px', borderRadius: '0', mr: '20px'}}
						alt="Dr. Alex Maginture" 
						src="https://www.shutterstock.com/image-photo/healthcare-medical-staff-concept-portrait-600nw-2281024823.jpg" />
					</ListItemAvatar>
					<ListItemText
						primary={
							<Typography variant='h6'>Dr. Alex Maginture</Typography>
						}
						secondary={
						<React.Fragment>
							<Typography
							sx={{ display: 'inline', textAlign: 'center' }}
							component="span"
							variant="body2"
							color="text.primary"
							>
							Dr. Alex Maginture is a highly respected and experienced physician specializing in cardiology. <br/>
							With over 15 years of medical practice, Dr. Doe has dedicated his career to providing exceptional patient care. <br/>
							</Typography>
						</React.Fragment>
						}
					/>
					</ListItem>
					<Divider variant="fullWidth" component="li" />


					
					<ListItem alignItems="center">
					<ListItemAvatar>
						<Avatar sx={{width: '100px', height: '100px', borderRadius: '0', mr: '20px'}}
						alt="Dr. Marina Yoland" 
						src="https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=926&fit=clip" />
					</ListItemAvatar>
					<ListItemText
						primary={<Typography variant="h6">Dr. Marina Yoland</Typography>}
						secondary={
						<React.Fragment>
							<Typography
							sx={{ display: 'inline' }}
							component="span"
							variant="body2"
							color="text.primary"
							>
							Dr. Marina Yoland is a highly esteemed and experienced physician specializing in pediatric care.<br/>
							With over 12 years of medical practice, Dr. Yoland has dedicated her career to providing exceptional healthcare to children and adolescents.<br/> 
							</Typography>
						</React.Fragment>
						}
					/>
					</ListItem>
					<Divider variant="fullWidth" component="li" />
					<ListItem alignItems="center">
					<ListItemAvatar>
						<Avatar sx={{width: '100px', height: '100px', borderRadius: '0', mr: '20px'}}
						alt="Dr. Vector Simavis" 
						src="https://t3.ftcdn.net/jpg/02/60/04/08/360_F_260040863_fYxB1SnrzgJ9AOkcT0hoe7IEFtsPiHAD.jpg" />
					</ListItemAvatar>
					<ListItemText
						primary={  <Typography variant='h6'>Dr. Vector Simavis</Typography>}
						secondary={
						<React.Fragment>
							<Typography
							sx={{ display: 'inline' }}
							component="span"
							variant="body2"
							color="text.primary"
							>
							Dr. Vector Simavis is a highly esteemed and experienced physician specializing in pediatric care.<br/>
							With over 12 years of medical practice, Dr. Vector has dedicated her career to providing exceptional healthcare to children and adolescents.<br/>
							</Typography>
						</React.Fragment>
						}
					/>
					</ListItem>
					<Divider variant="fullWidth" component="li" />
				</List>
			</Box>
			
		</div>
	</div>
	
  );
}

export default UserManager003;