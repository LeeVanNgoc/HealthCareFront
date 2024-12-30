import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const StyledBox = styled(Box)(({ theme }) => ({
  border: '2px solid black',
  padding: theme.spacing(0), 
  height: 500,
  width: 400,
  borderRadius: '4px',
  boxSizing: 'border-box',
  margin: theme.spacing(2),
}));

export const CenteredContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh', // or a specific height if you don't want full viewport height
  width: '100%',
}));