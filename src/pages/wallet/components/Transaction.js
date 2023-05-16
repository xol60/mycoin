import * as React from 'react'
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
const Transaction = () => {
    return (
        <ListItem alignItems="flex-start" sx={{ bgcolor: '#92cbdf' }}>
            <ListItemText
                primary="Index: x"
                secondary={
                    <React.Fragment>
                        <Typography variant="subtitle2" gutterBottom>
                            Output Id: 0000000000000000
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom>
                            Amount: 0000000000000000
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom>
                            Address: 0000000000000000
                        </Typography>
                    </React.Fragment>
                }
            />
        </ListItem>
    )
}
export default Transaction