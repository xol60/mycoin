import * as React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { TextField, FormControl, Button } from "@mui/material";
import Info from '../core/Info'
const SendTransaction = () => {
    const [amount, setAmount] = React.useState('')
    const [address, setAddress] = React.useState('')
    const handleSubmit = (event) => {
        event.preventDefault()

        console.log(amount, address);
    }
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
                <Typography variant="h5" gutterBottom color='blue' margin='40px '>
                    Send Transaction
                </Typography>
                <React.Fragment>
                    <form onSubmit={handleSubmit} >
                        <TextField
                            label="To address"
                            onChange={e => setAddress(e.target.value)}
                            required
                            variant="outlined"
                            width='100ch'
                            color="secondary"
                            sx={{ mb: 3, width: '100ch' }}
                            fullWidth
                            value={address}
                        />
                        <TextField
                            label="Amount"
                            onChange={e => setAmount(e.target.value)}
                            required
                            variant="outlined"
                            color="secondary"
                            type="number"
                            value={amount}
                            fullWidth
                            sx={{ mb: 3, width: '100ch' }}
                        />
                        <div>
                            <Button style={{ maxWidth: '100px', minWidth: '100px', }} variant="outlined" color="secondary" type="submit">Submit</Button>
                        </div>
                    </form>
                </React.Fragment>
            </Box>
        </Box>
    )
}
export default SendTransaction