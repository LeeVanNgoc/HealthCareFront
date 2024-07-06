import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import getAllUser from './config';
import { Item } from './style';


export default function UserManager002() {
  const [users, setUsers] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const handleGetUser = async () => {
    try {
      const {data} = await getAllUser('ALL'); 
      console.log(data)
      setUsers(data); 
      setLoading(false); 
    } catch (error) {
      console.error('Lỗi khi lấy danh sách người dùng:', error);
      setLoading(false); 
    }
  };

  React.useEffect(() => {
    handleGetUser(); // Gọi hàm để lấy dữ liệu khi component mount
  }, []);

  const userCount = users.length || 6; // Sử dụng 6 nếu không có người dùng

  return (
    <div>
      <Box sx={{ flexGrow: 1 }} margin={'10px'}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {loading ? (
            Array.from(Array(userCount)).map((_, index) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <Item>
                  <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                  <Skeleton variant="circular" width={40} height={40} />
                  <Skeleton variant="rectangular" width={210} height={60} />
                  <Skeleton variant="rounded" width={210} height={60} />
                </Item>
              </Grid>
            ))
          ) : (
            users && users.map((user, index) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <Item>
                  <Typography variant="h6">{user.firstName} {user.lastName}</Typography>
                  <Typography variant="body2">{user.email}</Typography>
                  <Typography variant="body2">{user.address}</Typography>
                </Item>
              </Grid>
            ))
          )}
        </Grid>
      </Box>
    </div>
  );
}
