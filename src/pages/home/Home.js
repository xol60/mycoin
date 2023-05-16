import * as React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import background from '../../assets/logo/spaceman.png'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AccessModal from './components/AccessModal';
import CreateModal from './components/CreateModal';
const Home = () => {
    const [isAccessModalOpen, setIsAccessModalOpen] = React.useState(false);
    const [isCreateModalOpen, setIsCreateModalOpen] = React.useState(false);
    return (
        <Box
            sx={{
                width: '100vw',
                flexGrow: 1,
            }}
        >
            <Grid container spacing={2} style={{ margin: '20px 40px' }}>
                <Grid xs={5}>
                    <Box sx={{ width: '100%', maxWidth: 500, margin: '100px' }}>
                        <Typography variant="h4" gutterBottom>
                            Ethereum's Original Wallet
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            MEW (MyEtherWallet) is a free, client-side interface helping you interact with the Ethereum blockchain. Our easy-to-use, open-source platform allows you to generate wallets, interact with smart contracts, and so much more.
                        </Typography>
                        <Stack direction="row" spacing={2} style={{ margin: '50px 40px' }}>
                            <Button style={{ backgroundColor: "#05c0a5", color: 'white', maxWidth: '220px', maxHeight: '100px', minWidth: '100px', minHeight: '65px' }} onClick={() => setIsCreateModalOpen(true)}>Create a new wallet</Button>
                            <Button variant="outlined" style={{ color: "#05c0a5", maxWidth: '220px', maxHeight: '10px', minWidth: '100px', minHeight: '65px' }} onClick={() => setIsAccessModalOpen(true)}>
                                Access my wallet
                            </Button>
                        </Stack>
                    </Box>
                </Grid>
                <Grid xs={7}>
                    <Box
                        component="img"
                        sx={{
                            height: 500,
                            width: 500,
                            margin: '0px 50px'
                        }}
                        src={background}
                    />
                </Grid>
            </Grid>
            <AccessModal isOpen={isAccessModalOpen} setIsOpen={setIsAccessModalOpen} />
            <CreateModal isOpen={isCreateModalOpen} setIsOpen={setIsCreateModalOpen} />
        </Box >
    )
}
export default Home