import * as React from 'react';
import {useState, useEffect} from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';	
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';


import {getDataInDoctor} from './actions'

export const ImageHeader = () => {
	return (
		<div className='doctor003-header'>
			<Box component="img" src="https://cdn.bookingcare.vn/fo/w1920/2023/11/02/113503-dich-vu-cham-soc-suc-khoe-tai-nha.png" alt="Sample Image"/>
		</div>		
	  );
}

export const ModalDoctor = () => {
	const [doctors, setDoctors] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
		try {
			const doctocs = await getDataInDoctor();
			setDoctors(doctocs.data);
		} catch (error) {
			console.error('Error fetching doctor data:', error);
		}
		};	
		fetchData();
	}, []);

	const convertDataForListDoctor = (doctor) => {
		return (
			<div className='doctor003'>
				<ListItem alignItems="center" key={doctor.id}>
					<ListItemAvatar>
						<Avatar sx={{width: '100px', height: '100px', borderRadius: '0', mr: '20px'}}
						alt={doctor.name} 
						src={doctor.image}/>
					</ListItemAvatar>
					<ListItemText
						primary={
							<Typography variant='h6'>{doctor.name}</Typography>
						}
						secondary={
						<React.Fragment>
							<Typography
							sx={{ display: 'inline', textAlign: 'center' }}
							component="span"
							variant="body2"
							color="text.primary"
							>
								<Rating name="read-only" value={doctor.evuluate} readOnly/> <br/>
								Contact {doctor.phonenumber}
							</Typography>
						</React.Fragment>
						}
					/>
				</ListItem>
				<Divider variant="fullWidth" component="li" />
			</div>	
		);
	}

	return (
		<div className='doctor003'>
		  <Box sx={{ margin: '0 40px' }}>
			<List sx={{ bgcolor: 'background.paper', pl: '100px', pr: '100px' }}>				
			  {doctors.map((doctor) => (
				<React.Fragment key={doctor.id}>
				  {convertDataForListDoctor(doctor)}
				  <Divider variant="fullWidth" component="li" />
				</React.Fragment>
			  ))}
			</List>
		  </Box>
		</div>
	  );
	
}