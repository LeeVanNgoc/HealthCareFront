import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Snackbar from '@mui/material/Snackbar';
import Fade from '@mui/material/Fade';
import Slide from '@mui/material/Slide';
import { Typography } from '@mui/material';
import {Item} from './style'

const services = [
  <Item>Item 1</Item>,
  <Item>Item 2</Item>,
  <Item>Item 3</Item>,
  <Item>Item 4</Item>,
  <Item>Item 5</Item> ,
  <Item>Item 6</Item>,
  <Item>Item 7</Item>,
  <Item>Item 8</Item>,
  <Item>Item 9</Item>,
  <Item>Item 10</Item>,
]

function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}

export default function UserManager001() {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handlePrev = () => {
      setCurrentIndex(prevIndex => Math.max(prevIndex - 1, 0));
    };
  
    const handleNext = () => {
      setCurrentIndex(prevIndex => Math.min(prevIndex + 1, services.length - 3));
    };

    const [state, setState] = React.useState({
      open: false,  
      Transition: Fade,
    });
  
    const handleClick = (Transition) => () => {
      setState({
        open: true,
        Transition,
      });
    };
  
    const handleClose = () => {
      setState({
        ...state,
        open: false,
      });
    };
  
  
  return (
    <div className='user001'>
      <div className='user001-container'>
        <div className='user001-header'>
          <Box component="img" src="https://cdn.bookingcare.vn/fo/w1920/2023/11/02/113503-dich-vu-cham-soc-suc-khoe-tai-nha.png" alt="Sample Image" sx={{ margin: '0 20px' }} />
        </div>
        <div className='user001-body'>
        <Box sx={{width:'100%', justifyContent:'center', alignItems: 'center', position: 'relative'}}>
          <Box sx={{display: 'flex', justifyContent: 'space-between', padding: '20px 200px 0 200px'}}>
            <Typography variant="h6" fontSize={24}>Dịch vụ tại nhà</Typography>
            <Button onClick={handleClick(SlideTransition)}>Xem thêm</Button>
            <Snackbar
              open={state.open}
              onClose={handleClose}
              TransitionComponent={state.Transition}
              message="I love snacks"
              key={state.Transition.name}
              autoHideDuration={1200}
            />
          </Box>
          <Box sx={{display: 'flex', justifyContent:'center', alignItems: 'center', position: 'relative'}}>
          <IconButton 
            onClick={handlePrev} 
            disabled={currentIndex === 0}
          >
            <ArrowBackIosNewIcon />
          </IconButton>
            <Grid container sx={{ width: 'max-content', whiteSpace: 'nowrap', overflow: 'hidden'}}>
              <Grid display="flex">
              {services.slice(currentIndex, currentIndex + 3).map((service, index) => (
                <Box key={index} sx={{ width: '33%', textAlign: 'center' }}>
                  {service}
                </Box>
              ))}
              </Grid>
            </Grid>            
          <IconButton 
            onClick={handleNext} 
            disabled={currentIndex >= services.length - 3}
          >
            <ArrowForwardIosIcon />
          </IconButton>
          </Box>
        </Box>
        <Box sx={{width:'100%', justifyContent:'center', alignItems: 'center', position: 'relative'}}>
          <Box sx={{display: 'flex', justifyContent: 'space-between', padding: '20px 200px 0 200px'}}>
          <Typography variant="h6" fontSize={24}>Dịch vụ cơ sở</Typography>
            <Button onClick={handleClick(SlideTransition)}>Xem thêm</Button>
            <Snackbar
              open={state.open}
              onClose={handleClose}
              TransitionComponent={state.Transition}
              message="I love snacks"
              key={state.Transition.name}
              autoHideDuration={1200}
            />
          </Box>
          <Box sx={{display: 'flex', justifyContent:'center', alignItems: 'center', position: 'relative'}}>
          <IconButton 
            onClick={handlePrev} 
            disabled={currentIndex === 0}
          >
            <ArrowBackIosNewIcon />
          </IconButton>
            <Grid container sx={{ width: 'max-content', whiteSpace: 'nowrap', overflow: 'hidden'}}>
              <Grid display="flex">
              {services.slice(currentIndex, currentIndex + 3).map((service, index) => (
                <Box key={index} sx={{ width: '33%', textAlign: 'center' }}>
                  {service}
                </Box>
              ))}
              </Grid>
            </Grid>            
          <IconButton 
            onClick={handleNext} 
            disabled={currentIndex >= services.length - 3}
          >
            <ArrowForwardIosIcon />
          </IconButton>
          </Box>
        </Box>
        <Box sx={{width:'100%', justifyContent:'center', alignItems: 'center', position: 'relative'}}>
          <Box sx={{display: 'flex', justifyContent: 'space-between', padding: '20px 200px 0 200px'}}>
          <Typography variant="h6" fontSize={24}>Khám từ xa</Typography>
            <Button onClick={handleClick(SlideTransition)}>Xem thêm</Button>
            <Snackbar
              open={state.open}
              onClose={handleClose}
              TransitionComponent={state.Transition}
              message="I love snacks"
              key={state.Transition.name}
              autoHideDuration={1200}
            />
          </Box>
          <Box sx={{display: 'flex', justifyContent:'center', alignItems: 'center', position: 'relative'}}>
          <IconButton 
            onClick={handlePrev} 
            disabled={currentIndex === 0}
          >
            <ArrowBackIosNewIcon />
          </IconButton>
            <Grid container sx={{ width: 'max-content', whiteSpace: 'nowrap', overflow: 'hidden'}}>
              <Grid display="flex">
              {services.slice(currentIndex, currentIndex + 3).map((service, index) => (
                <Box key={index} sx={{ width: '33%', textAlign: 'center' }}>
                  {service}
                </Box>
              ))}
              </Grid>
            </Grid>            
          <IconButton 
            onClick={handleNext} 
            disabled={currentIndex >= services.length - 3}
          >
            <ArrowForwardIosIcon />
          </IconButton>
          </Box>
        </Box>
        </div>
      </div>
      
    </div>
  );
}