import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Transaction from './components/Transaction'
import List from '@mui/material/List';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Info from '../core/Info'
const Dashboard = () => {
    return (
        <Box
            sx={{
                width: '100vw',
                flexGrow: 1,
            }}
        >
            <Info />
            <Box
                sx={{
                    width: '100vw',
                    margin: '20px 80px',
                    flexGrow: 1,
                }}
            >
                <Stack direction="row" spacing={2}>
                    <Box sx={{
                        width: '800px',
                        margin: '0px 80px',
                    }}>
                        <Typography variant="h5" gutterBottom color='blue' margin='40px '>
                            Your Unspent Transaction Currently
                        </Typography>
                        <List sx={{
                            width: '100%',
                            maxWidth: 1000,
                            bgcolor: 'background.paper',
                            position: 'relative',
                            overflow: 'auto',
                            maxHeight: 300,
                            '& ul': { padding: 0 },
                        }}
                            subheader={<li />}>
                            <Transaction />
                            <Transaction />
                            <Transaction />
                            <Transaction />
                            <Transaction />
                            <Transaction />
                            <Transaction />
                            <Transaction />
                        </List>
                    </Box>
                    <Box >
                        <Typography variant="h5" gutterBottom color='blue' margin='40px  '>
                            Mining block
                        </Typography>
                        <Button variant="contained" style={{ margin: '40px 50px' }} >Mine</Button>
                    </Box>
                </Stack>
            </Box >

        </Box >
    )
}
export default Dashboard