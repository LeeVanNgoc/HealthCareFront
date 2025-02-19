import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import './Home.css';
import HomeProduct from '../../containers/Hs001/main';
import Footer from '../page/footer/Footer';

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
            <HomeProduct />
          </div>
        </div>
        <div className='footer'>
            <Footer/>
        </div>
      </div>
  );
}

export default Home;
