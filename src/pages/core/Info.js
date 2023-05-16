import *  as React from 'react'
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
const Info = () => {
    return (
        <Stack direction="row" spacing={2} style={{ margin: '10px 120px' }}>
            <Box sx={{ width: '400px', height: 150, backgroundColor: 'primary.dark', color: 'white' }}>
                <Typography variant="h4" gutterBottom>
                    Address
                </Typography>
                <Typography variant="subtitle1" align="left"
                    style={{ wordWrap: "break-word" }} gutterBottom>
                    0000000000000000000000000000000000000000000000
                </Typography>
            </Box>
            <Box sx={{ width: '400px', height: 150, backgroundColor: 'primary.dark', color: 'white' }}>
                <Typography variant="h4" gutterBottom>
                    Balance
                </Typography>
                <Typography variant="subtitle1" align="left"
                    style={{ wordWrap: "break-word" }} gutterBottom>
                    0000000000000000000000000000000000000000000000
                </Typography>
            </Box>

            <Box sx={{ width: '400px', height: 150, backgroundColor: 'primary.dark', color: 'white' }}>
                <Typography variant="h4" gutterBottom>
                    Network
                </Typography>
                <Typography variant="subtitle1" align="left"
                    style={{ wordWrap: "break-word" }} gutterBottom>
                    0000000000000000000000000000000000000000000000
                </Typography>
            </Box>

        </Stack >
    )
}
export default Info