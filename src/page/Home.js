import React from 'react';
import { useTheme, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

import './Home.css'
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'aqua',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: '',
  border: 'none',
  boxShadow: 'none'
}));

const Item2 = styled(Paper)(({ theme }) => ({
  backgroundColor: 'none',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: '',
}));

const Item3 = styled(Paper)(({ theme }) => ({
  backgroundColor: 'none',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: '',
  height: 400,
}));

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    imgPath:
      'https://images.pexels.com/photos/2383010/pexels-photo-2383010.jpeg?cs=srgb&dl=pexels-totalshape-2383010.jpg&fm=jpg',
  },
  {
    imgPath:
    'https://images.ctfassets.net/3viuren4us1n/yFPJHQyISAzGyVHAW66nK/8a5a8897d7fc41fa4574075a92050cb3/Healthcare-Hero.jpg?fm=webp&w=3840',
  },
  {
    imgPath:
      'https://www.sme.org/globalassets/sme.org/technologies/articles/2022/04---april/transforming-healthcare_768x432.jpg',
  },
  {
    imgPath:
      'https://www.romsons.in/cdn/shop/articles/Top_10_Health_Care_Products.jpg?v=1716022185',
  },
];

function Home() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
      <div className='home'>
        <div className='home-contain'>
          <div className='home-slider'>
            <Box sx={{ flexGrow: 1 }}>
            <AutoPlaySwipeableViews
              axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
            >
              {images.map((step, index) => (
                <div key={step.label}>
                  {Math.abs(activeStep - index) <= 2 ? (
                    <Box
                      component="img"
                      sx={{
                        height: 600,
                        display: 'block',
                        overflow: 'hidden',
                        width: '100%',
                      }}
                      src={step.imgPath}
                      alt={step.label}
                    />
                  ) : null}
                </div>
              ))}
            </AutoPlaySwipeableViews>
          </Box>
          </div>
          
          <div className='home-product'>
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', p: 2 }}>
              <Grid container spacing={5} p={4} pt={5} ml={10} mr={10}>
                <Grid item xs={4} >
                  <Item2>
                  <Card sx={{ maxWidth: 400 }}>
                    <CardMedia
                      sx={{ height: 140 }}
                      image="https://hovo.vn/wp-content/uploads/2021/04/HDH_0278.jpg"
                      title="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Vigoa heva
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Giúp thanh nhiệt, tăng sức bền thành mạch 
                        Hỗ trợ các triêu chứng của ngưới bệnh
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Price: 100.000đ
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Buy</Button>
                      <Button size="small">More</Button>
                    </CardActions>
                  </Card>
                  </Item2>
                </Grid>

                <Grid item xs={4} >
                  <Item2>
                  <Card sx={{ maxWidth: 400 }}>
                    <CardMedia
                      sx={{ height: 140 }}
                      image="https://hataphar.com.vn/images/resized/images/Eucaherb_400_400.png"
                      title="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        TPBVSK EUcaherb
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                      Hỗ trợ giảm ho, giảm đờm, giảm đau rát họng, khản tiếng do viêm họng, viêm phế quản.
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Price: 100.000đ
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Buy</Button>
                      <Button size="small">More</Button>
                    </CardActions>
                  </Card>
                  </Item2>
                </Grid>

                <Grid item xs={4} >
                  <Item2>
                  <Card sx={{ maxWidth: 400 }}>
                    <CardMedia
                      sx={{ height: 140 }}
                      image="https://anthienpharma.com.vn/public/uploads/2019/10/01/1e19160ec8066db4274fa512a022b058.jpg"
                      title="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        A.T ASCORBIC SYRUP 60ML
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                      Phòng và điều trị thiếu vitamin C ( bệnh Scorbut) và các chứng chảy máu do thiếu vitamin C.
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Price: 100.000đ
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Buy</Button>
                      <Button size="small">More</Button>
                    </CardActions>
                  </Card>
                  </Item2>
                </Grid>
              </Grid>
            </Box>
          </div>   

          <div className='home-introduction'>
              <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', p: 2 }}>
                <Grid container spacing={5} p={4} pt={5} ml={10} mr={10}>
                  <Grid item xs={5}>
                    <Item3>
                      <Card sx={{ maxWidth: 600 }}>
                        <CardMedia
                          sx={{ height: 400 }}
                          image="https://cdn.tgdd.vn/Products/Images/11339/294709/thuc-pham-bao-ve-suc-khoe-omega-3-6-9-jv-hop-60v-mac-dinh-2.jpg"
                          title="Omega 3-6-9 JV"
                        />
                      </Card>
                    </Item3>
                  </Grid>
                  <Grid item xs={7} >
                    <Item3 >
                      <Typography variant='h5' ml={1}>Omega 3-6-9 JV</Typography>
                        <Typography variant='h6' ml={2}>Thành phần</Typography>
                          <Typography variant='body2' ml={3}>
                            Fish oil (dầu cá) 900mg (chứa 30% omega 3:12% DHA, 18% EPA).<br/>
                            Dầu hạnh nhân 50mg (chứa Omega 6 (Linoleic acid) ≥ 20%, Omega 9 (Oleic acid) ≥ 60%).<br/>
                            Tinh dầu hoa anh thảo 50mg (chứa Omega 6 (Linoleic acid) ≥ 65%, Omega 9 (Oleic acid) ≥ 5%).<br/>
                            Vitamin E (DL-alpha-tocopheryl acetat) 20mg.<br/>
                            Vitamin A (Retinol palmitate) 600IU.<br/>
                            Phụ liệu: Gelatin, glycerin, sorbitol, nipagin, dầu đậu nành, butylat hydroxytoluen (BHT), ethyl vanilin vừa đủ 2 viên.<br/>
                          </Typography>
                        <Typography variant='h6' ml={2}>Cách dùng</Typography>   
                          <Typography variant='body2' ml={3}>Người lớn: Uống 1 viên/lần x 1 - 2 lần/ngày uống sau ăn.</Typography>      
                        <Typography variant='h6' ml={2}>Công dụng<Typography/>
                          <Typography variant='body2' ml={2}>
                            Hỗ trợ giảm mỡ máu, giảm nguy cơ xơ vữa mạch máu.<br/>
                            Thực phẩm này không phải là thuốc, không có tác dụng thay thế thuốc chữa bệnh. Không sử dụng cho người mẫn cảm, kiêng kị với bất cứ thành phần nào của sản phẩm.
                          </Typography>
                      </Typography>
                    </Item3>
                  </Grid>
                </Grid>
              </Box>
              <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', p: 2 }}>
                <Grid container spacing={5} p={4} pt={5} ml={10} mr={10}>
                  <Grid item xs={7}>
                    <Item3>
                      <Typography variant='h5' ml={1}>Omega 3-6-9 JV</Typography>
                      <Typography variant='h6' ml={2}>Thành phần</Typography>
                      <Typography variant='body2' ml={3}>
                        Hoạt chất: Policosanol (GDL-5) 100mg, Red Yeast Rice Extract 50mg, Gynostemma Extract 5:1 150mg, Apple Cider Vinegar Extract 200mg.<br/>
                        Tá dược: phụ gia vừa đủ 1 viên.
                      </Typography>
                      <Typography variant='h6' ml={2}>Cách dùng</Typography>
                            
                      <Typography variant='body2' ml={3}>
                        01 viên/ngày, sau bữa ăn tối.<br/>
                        Dùng thường xuyên.
                      </Typography>      

                      <Typography variant='h6' ml={2}>Công dụng<Typography/>
                      <Typography variant='body2' ml={2}>
                        Faz với thành phần Policosanol thiên nhiên có tác dụng điều hòa hoạt động men HMG - COA và 
                        tăng hoạt hóa receptor tế bào, hỗ trợ tim mạch ngừa đột quỵ tai biến bao gồm:<br/>
                        Kiểm soát mỡ máu: giảm Cholesterol toàn phần, giảm LDL, tăng HDL, giảm Triglyceride.<br/>
                        Ngăn ngừa và hỗ trợ điều trị xơ vữa động mạch.<br/>
                        Giúp điều hòa huyết áp.<br/>
                        Phòng và hỗ trợ điều trị các bệnh tim mạch: rối loạn nhịp tim, thiếu máu cơ tim, nhồi máu cơ tim.<br/>
                        Giúp điều trị gan nhiễm mỡ, ngăn ngừa sỏi mật.<br/>
                        Giảm nguy cơ mắc bệnh tiểu đường và biến chứng của bệnh tiểu đường.<br/>
                      </Typography>
                      </Typography>
                    </Item3>
                  </Grid>
                  <Grid item xs={5}>
                    <Item3 >
                      <Card sx={{ maxWidth: 600 }}>
                        <CardMedia
                          sx={{ height: 400 }}
                          image="https://cdn.tgdd.vn/Products/Images/11339/129161/vien-uong-faz-30-vien-mac-dinh-2.jpg"
                          title="Faz"
                        />
                      </Card>
                    </Item3>
                  </Grid>
                </Grid>
              </Box>
          </div>
        </div>



        <div className='home-footer'>
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
      </div>
  );




}

export default Home;
