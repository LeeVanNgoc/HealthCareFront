import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

 
 export const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(2),
	border: '2px solid black',
	textAlign: 'center',
	color: theme.palette.text.secondary,
	height: 300,
	width:300,
	margin: 20
  }));