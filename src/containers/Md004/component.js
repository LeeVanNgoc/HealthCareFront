import * as React from 'react';
import {useState} from 'react';
// import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
// import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import { modalStyle } from './style';
import TextField from '@mui/material/TextField';

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));


const CardContent1 = (() => { 
	return (
        <CardContent>
            <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to cook together with your guests. 
				Add 1 cup of frozen peas along with the mussels, if you like.
            </Typography>
        </CardContent>
    );
})

const CardContent2 = (() => { 
	return (
        <CardContent>
            <TextField 
				label="Your comment"
				name="comment"
				fullWidth
				margin="normal"
			/>
        </CardContent>
    );
})

// const CardCollabContent = (({expanded}) => {
// 	return (
// 		<div>
// 			<Collapse in={expanded} timeout="auto" unmountOnExit>
// 				<CardContent>
// 				<Typography paragraph>Method:</Typography>
// 				<Typography paragraph>
// 					Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
// 					aside for 10 minutes.
// 				</Typography>
// 				</CardContent>
// 			</Collapse>
// 		</div>
// 	)
// })

export function RecipeReviewCard() {
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

  return (
    <div>
		<div>
		<Card>
			<CardHeader
				avatar={
				<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src='https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp'>
				</Avatar>
				}
				action={
				<IconButton aria-label="settings">
					<MoreVertIcon />
				</IconButton>
				}
				
				title="Shrimp and Chorizo Paella"
				subheader="September 14, 2016"
				
			/>
			<CardContent1 />
			<CardActions disableSpacing>
				<IconButton aria-label="add to favorites">
				<FavoriteIcon />
				</IconButton>
				<IconButton aria-label="share">
				<ShareIcon />
				</IconButton>
			</CardActions>
		</Card>
		</div>
	</div>
  );
}

export function RecipeReviewCard2() {
	const currentTime = new Date(); // Lấy thời gian hiện tại

	// Định dạng thời gian hiện tại thành chuỗi văn bản
	const currentTimeText = currentTime.toLocaleString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});
	return (
	<div>
		<div>
		<Card>
			<CardHeader
				avatar={
				<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src='https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp'>
				</Avatar>
				}
				action={
				<IconButton aria-label="settings">
					<MoreVertIcon />
				</IconButton>
				}
				
				title={
					<TextField label="Tên"
						name="name"
						fullWidth
						margin="normal"/>
				}
				subheader={currentTimeText}
				
			/>
			<CardContent2 />
			<CardActions disableSpacing>
				<IconButton aria-label="add to favorites">
				<FavoriteIcon />
				</IconButton>
				<IconButton aria-label="share">
				<ShareIcon />
				</IconButton>
			</CardActions>
		</Card>
		</div>
	</div>
	);
}

export function TransitionsModal({open, handleClose}) {
	const [formData, setFormData] = useState({ name: '', email: '' });

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = () => {
		console.log('Form data:', formData);
		handleClose();
	};
	return (
	  <div>
		<Modal
		  aria-labelledby="transition-modal-title"
		  aria-describedby="transition-modal-description"
		  open={open}
		  onClose={handleClose}
		  closeAfterTransition
		  slots={{ backdrop: Backdrop }}
		  slotProps={{
			backdrop: {
			  timeout: 500,
			},
		  }}
		>
		  <Fade in={open}>
			<Box sx={modalStyle}>
			  	<Typography id="transition-modal-title" variant="h6" component="h2">
					Comment
				</Typography>
				<RecipeReviewCard2/>
				<Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
					<Button onClick={handleClose} sx={{ mr: 1 }}>Hủy</Button>
					<Button variant="contained" onClick={handleSubmit}>Lưu</Button>
				</Box>
			</Box>
		  </Fade>
		</Modal>
	  </div>
	);
  }
