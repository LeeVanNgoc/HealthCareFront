import * as React from 'react';
import { Box } from '@mui/material';
import { ModalDoctor } from './component';

function UserManager003() {
	

	return (
		<div className='doctor003'>
			<div className='doctor003-header'>
			<Box component="img" src="https://cdn.bookingcare.vn/fo/w1920/2023/11/02/113503-dich-vu-cham-soc-suc-khoe-tai-nha.png" alt="Sample Image"/>
			</div>
			<div className='doctor003-body'>
				<ModalDoctor />
			</div>
		</div>
	);
}

export default UserManager003;