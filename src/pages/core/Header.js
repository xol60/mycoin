import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Logo from '../../assets/logo/logo-mew.png';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from '@mui/material/Link';
import { useNavigate } from "react-router-dom";
const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate();
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const [anchorElE, setAnchorElE] = React.useState(null);
    const openE = Boolean(anchorElE);
    const handleClickE = (event) => {
        setAnchorElE(event.currentTarget);
    };
    const handleCloseE = () => {
        setAnchorElE(null);
    };
    return (
        <AppBar position="static" style={{ background: '#184f90' }}>
            <Container maxWidth="xl" >
                <Toolbar disableGutters style={{ margin: '32px 50px' }}>
                    <Box
                        component="img"
                        sx={{
                            height: 40,
                            width: 140,
                            margin: '0px 50px'
                        }}
                        onClick={() => { navigate('/intro') }}
                        src={Logo}
                    />
                    <Button variant="text" style={{ margin: '40px 40px', color: 'white' }} onClick={handleClick}>Wallet actions</Button>
                    <Menu
                        id="long-menu"
                        MenuListProps={{
                            'aria-labelledby': 'long-button',
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        PaperProps={{
                            style: {
                                width: '20ch',
                            },
                        }}
                    >
                        <MenuItem>
                            <Link underline="none" style={{ color: 'black' }} href="/wallet/dashboard">Dashboard</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link underline="none" style={{ color: 'black' }} href="/wallet/send-transaction">Send transaction</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link underline="none" style={{ color: 'black' }} href="/wallet/send-transaction">Logout</Link>
                        </MenuItem>
                    </Menu>
                    <Button variant="text" style={{ margin: '40px 40px', color: 'white' }} onClick={handleClickE}>Explorer actions</Button>
                    <Menu
                        id="long-menu"
                        MenuListProps={{
                            'aria-labelledby': 'long-button',
                        }}
                        anchorEl={anchorElE}
                        open={openE}
                        onClose={handleCloseE}
                        PaperProps={{
                            style: {
                                width: '20ch',
                            },
                        }}
                    >
                        <MenuItem>
                            <Link underline="none" style={{ color: 'black' }} href="/explorer/block">Blocks</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link underline="none" style={{ color: 'black' }} href="/explorer/transactions">Transactions</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link underline="none" style={{ color: 'black' }} href="/explorer/transaction-pool">Transaction pool</Link>
                        </MenuItem>
                    </Menu>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
