import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';


export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'aqua',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: '',
  border: 'none',
  boxShadow: 'none'
}));

export const Item2 = styled(Paper)(({ theme }) => ({
  backgroundColor: 'none',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: '',
}));

export const Item3 = styled(Paper)(({ theme }) => ({
  backgroundColor: 'none',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: '',
  height: 400,
}));