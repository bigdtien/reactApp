import React, { useState } from "react";
import { Modal, Box, Typography, Button } from "@mui/material";
const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
};
function ModalDelete({openDelete,handleCloseDelete,handleDelete}) {
    return (
        <div>
            <Modal open={openDelete} onClose={handleCloseDelete} aria-labelledby="modal-delete-title">
            <Box sx={style}>
                <Typography id="modal-delete-title" variant="h6" component="h2">
                    Confirm Deletion
                </Typography>
                <Typography id="modal-delete-description" sx={{ mt: 2 }}>
                    Are you sure you want to delete the item ?
                </Typography>
                <Box sx={{ mt: 3, display: "flex", justifyContent: "space-between" }}>
                    <Button onClick={handleCloseDelete} variant="outlined" color="secondary">
                        Cancel
                    </Button>
                    <Button
                       onClick={handleDelete}
                        variant="contained"
                        color="error"
                    >
                        Delete
                    </Button>
                </Box>
            </Box>
        </Modal>
        </div>
    );
}

export default ModalDelete;