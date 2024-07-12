import React from 'react';
import { Box, Grid } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';

import {RecipeReviewCard} from './component';
import {TransitionsModal} from './component'
import {fabStyle} from './style';

export default function UserManager004() {
  const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
  
  return (
    <div className='doctor001'>
      <div className='doctor001-container'>
        <div className='doctor001-header'>
          <Box component="img" src="https://cdn.bookingcare.vn/fo/w1920/2023/11/02/113503-dich-vu-cham-soc-suc-khoe-tai-nha.png" alt="Sample Image" sx={{ margin: '0 20px' }} />
        </div>
        <div className='doctor001-body'>
          <Box sx={{p: '20px 40px'}}>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <Box sx={{p: '20px 40px'}}>
                  <RecipeReviewCard />
                </Box>
                <Box sx={{p: '20px 40px'}}>
                  <RecipeReviewCard />
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box sx={{p: '20px 40px'}}>
                  <RecipeReviewCard />
                </Box>
                <Box sx={{p: '20px 40px'}}>
                  <RecipeReviewCard />
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box sx={{p: '20px 40px'}}>
                  <RecipeReviewCard />
                </Box>
                <Box sx={{p: '20px 40px'}}>
                  <RecipeReviewCard />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>
      <div className='doctor004-footer' style={{ position: 'relative', height: '100px' }}>
        <div style={fabStyle}>
          <Fab color="secondary" onClick={handleOpen}>
            <AddIcon />
          </Fab>
        </div>
        <TransitionsModal open={open} handleClose={handleClose} />
    </div>
    </div>
  );
}