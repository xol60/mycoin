import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const CreateModal = props => {
    const { isOpen, setIsOpen } = props
    const handleClose = () => setIsOpen(false);

    return (
        <div>
            <Modal
                open={isOpen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Stack spacing={2} style={{ margin: '50px 40px' }}>
                        <TextField
                            disabled
                            id="outlined-disabled"
                            label="Your private key"
                            defaultValue="234252q4223432"
                        />
                        <Button variant="contained" maxWidth='50px' onClick={handleClose}>Submit</Button>
                    </Stack>
                </Box>
            </Modal>
        </div>
    );
}
export default CreateModal