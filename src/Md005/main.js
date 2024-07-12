import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
export default function UserManager005() {

  return (
    <div className='doctor005-container'>
      <div className='doctor005-body' style={{height: '1000', background: '#d9ff66'}}>
        <Box textAlign={'left'} p={'40px'} whiteSpace={2} color={'#4d0038'}>
          <Typography variant='h2'>Q&A</Typography>
          <Typography variant='h6'>
            Frequently Asked Questions
          </Typography>
          
          <Typography variant='h6'>
          WHAT IS YOUR RETURN POLICY?
          </Typography>

          <Typography variant='body1'>
          Due to the custom and personal nature of our products, we do not accept returns or exchanges. However, in case of any extraneous circumstance, please contact us and we will work with you to rectify the issue.
          </Typography>

          <Typography variant='h6'>
          WHAT IS YOUR SHIPPING POLICY?
          </Typography>

          <Typography variant='body1'>
          The majority of our products are made to order; please allow 1-5 days for order creation. Once shipped, please allow up to 2 weeks to receive your order (North America). <br/>
          Buyers are responsible for any customs and/or import taxes that may apply.<br/>
          HUSHD is not responsible for any shipping delays due to circumstances beyond our control (customs or otherwise). <br/>
          If you reside in the Vancouver BC (lower mainland) area, we offer local pickup.
          </Typography>
          <Typography variant='h6'>
          CAN MY ORDER BE PERSONALIZED?
          </Typography>
            <Typography variant='body1'>
              Absolutely! Get in touch with us via email, Instagram/Facebook DM to discuss.
            </Typography>
        </Box>
      </div>
    </div>
  )
}
