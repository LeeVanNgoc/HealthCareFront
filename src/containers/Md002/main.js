import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

import {Item, Item3} from './style'

function UserManager002() {
  return (
      <div className='user002'>
        <div className='user002-header'>
          <Box component="img" src="https://cdn.bookingcare.vn/fo/w1920/2023/11/02/113503-dich-vu-cham-soc-suc-khoe-tai-nha.png" alt="Sample Image" sx={{ margin: '0 20px' }} />
        </div>
        <div className='user002-contain'> 
          <div className='user002-introduction'>
              <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', p: 2 }}>
                <Grid container spacing={2} p={4} pt={5} ml={10} mr={10}>
                  <Grid item xs={5}>
                    <Item3>
                      <Card sx={{ maxWidth: 600 }}>
                        <CardMedia
                          sx={{ height: 280 }}
                          image="https://www.shutterstock.com/image-photo/healthcare-medical-staff-concept-portrait-600nw-2281024823.jpg"
                          title=" Dr. Alex Maginture"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div" p={0}>
                            Dr. Alex Maginture
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Button size="small">Contract</Button>
                        </CardActions>
                      </Card>
                    </Item3>
                  </Grid>
                  <Grid item xs={7} >
                    <Item3 >
                      <Typography variant='h5' ml={1}>Alex Maginture</Typography>
                        <Typography variant='h6' ml={2}>Profile</Typography>
                          <Typography variant='body2' ml={3}>
                            Dr. Alex Maginture is a highly respected and experienced physician specializing in cardiology. <br/>
                            With over 15 years of medical practice, Dr. Alex has dedicated his career to providing exceptional patient care. <br/>
                            He earned his medical degree from Harvard Medical School and completed his residency at Massachusetts General Hospital. <br/>
                          </Typography>
                        <Typography variant='h6' ml={2}>Contact</Typography>   
                          <Typography variant='body2' ml={3}>Phone: (987) 654-3210.</Typography>   
                          <Typography variant='body2' ml={3}>Email:  alex.demiano@gmail.com.</Typography> 
                        <Typography variant='h6' ml={2}>Company<Typography/>
                          <Typography variant='body2' ml={2}>
                          Massachusetts General Hospital
                          </Typography>
                      </Typography>
                    </Item3>
                  </Grid>
                </Grid>
              </Box>

              <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', p: 2 }}>
                <Grid container spacing={2} p={4} pt={5} ml={10} mr={10}>
                  <Grid item xs={5}>
                    <Item3>
                      <Card sx={{ maxWidth: 600 }}>
                        <CardMedia
                          sx={{ height: 280 }}
                          image="https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=926&fit=clip"
                          title="Dr. Marina Yoland"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div" p={0}>
                            Dr. Marina Yoland
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Button size="small">Contract</Button>
                        </CardActions>
                      </Card>
                    </Item3>
                  </Grid>
                  <Grid item xs={7} >
                    <Item3 >
                      <Typography variant='h5' ml={1}>Marina Yoland</Typography>
                        <Typography variant='h6' ml={2}>Profile</Typography>
                          <Typography variant='body2' ml={3}>
                          Dr. Marina Yoland is a highly esteemed and experienced physician specializing in pediatric care.<br/>
                           With over 12 years of medical practice, Dr. Yoland has dedicated her career to providing exceptional healthcare to children and adolescents.<br/> 
                           She earned her medical degree from Stanford University School of Medicine and completed her residency at Children's Hospital Los Angeles.<br/>
                          </Typography>
                        <Typography variant='h6' ml={2}>Contact</Typography>   
                          <Typography variant='body2' ml={3}>Phone: (987) 654-3210.</Typography>   
                          <Typography variant='body2' ml={3}>Email:  marina.yoland@gmail.com.</Typography>     
                        <Typography variant='h6' ml={2}>Company<Typography/>
                          <Typography variant='body2' ml={2}>
                          Sunnyvale Pediatric Clinic
                          </Typography>
                      </Typography>
                    </Item3>
                  </Grid>
                </Grid>
              </Box>

              <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', p: 2 }}>
                <Grid container spacing={2} p={4} pt={5} ml={10} mr={10}>
                  <Grid item xs={5}>
                    <Item3>
                      <Card sx={{ maxWidth: 600 }}>
                        <CardMedia
                          sx={{ height: 280 }}
                          image="https://t3.ftcdn.net/jpg/02/60/04/08/360_F_260040863_fYxB1SnrzgJ9AOkcT0hoe7IEFtsPiHAD.jpg"
                          title="Dr. Vector Simavis"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div" p={0}>
                            Dr. Vector Simavis
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Button size="small">Contract</Button>
                        </CardActions>
                      </Card>
                    </Item3>
                  </Grid>
                  <Grid item xs={7} >
                    <Item3 >
                      <Typography variant='h5' ml={1}>Vector Simavis</Typography>
                        <Typography variant='h6' ml={2}>Profile</Typography>
                          <Typography variant='body2' ml={3}>
                            Dr. Vector Simavis is a highly esteemed and experienced physician specializing in pediatric care.<br/>
                            With over 12 years of medical practice, Dr. Vector has dedicated her career to providing exceptional healthcare to children and adolescents.<br/> 
                            He earned her medical degree from Stanford University School of Medicine and completed her residency at Children's Hospital Los Angeles.<br/>
                          </Typography>
                        <Typography variant='h6' ml={2}>Contact</Typography>   
                          <Typography variant='body2' ml={3}>Phone: (987) 654-3210.</Typography>   
                          <Typography variant='body2' ml={3}>Email:  vector.macsi@gmail.com.</Typography>     
                        <Typography variant='h6' ml={2}>Company<Typography/>
                          <Typography variant='body2' ml={2}>
                          Genaral Children Cancle Center
                          </Typography>
                      </Typography>
                    </Item3>
                  </Grid>
                </Grid>
              </Box>

          </div>
        </div>

        <div className='user002-footer'>
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
            <Grid item xs={4}>
              <Item>
                <Typography variant='h5'  ml={2}>Phòng khám</Typography>
                <Typography variant='body1' ml={3} fontSize={16}>Địa chỉ: xxx-xxx-xxx-Hà Nội</Typography>
                <Typography variant='body1' ml={3} fontSize={16}>Email: xxx@xxx.xxx</Typography>
                <Typography variant='body1' ml={3} fontSize={16}>Phone: 0xxxxxxxxxx</Typography>
                <Typography variant='body1' ml={3} fontSize={16}>Thời gian mở cửa: 8:00 - 22:00</Typography>
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <Typography variant='h5'  ml={2}>Trở thành một phần của chúng tôi</Typography>
                <Typography variant='body1' ml={3} fontSize={16}>Dành cho bác sĩ, y tá mong muốn liên kết với chúng tối</Typography>
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
      </div>
  );




}

export default UserManager002;
