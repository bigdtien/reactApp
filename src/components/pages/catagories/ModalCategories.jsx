import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {Typography, TextField} from '@mui/material';
import Modal from '@mui/material/Modal';

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

function ModalCategories({open, handleClose, category, handleInput, handleSubmit}) {
    return (
        <div>
            <Modal open={open} onClose={handleClose} aria-labelledby="modal-add-category">
            <Box sx={style}>
                <Typography id="modal-add-category" variant="h6" component="h2">
                    Add New Category
                </Typography>
                <TextField
                    fullWidth
                    label="Category Name"
                    variant="outlined"
                    name ="name"
                    value={category.name}
                    onChange={handleInput}
                    sx={{ mt: 2 }}
                />
                <TextField
                    fullWidth
                    label="Description"
                    variant="outlined"
                    name="description"
                    value={category.description}
                    onChange={handleInput}
                    sx={{ mt: 2 }}
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                    sx={{ mt: 2 }}
                >
                    Add Category
                </Button>
            </Box>
        </Modal>
        </div>
    );
}

export default ModalCategories;


