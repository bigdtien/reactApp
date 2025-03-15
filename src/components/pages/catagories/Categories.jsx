import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Paper, Button } from '@mui/material';
import axios from 'axios';
import NavBar from '../NavBar';
import TableCategories from './TableCategories';
import ModalCategories from './ModalCategories';
import  ModalDelete  from "./ModalDelete";

const inner = { name: " ", desciption: "" };

function Categories(props) {
    const [category, setCategory] = React.useState(inner);
    const [open, setOpen] = React.useState(false);
    const [openDelete, setOpenDelete] = React.useState(false);
    const [update, setUpdate] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleCloseDelete = () => setOpenDelete(false);
    const handleOpenDelete = (row) => {
        setOpenDelete(true);
        setCategory(row);
    } ;

    const handleInput = (e) => {
        setCategory({ ...category, [e.target.name]: e.target.value });
    }

    const handleSubmit = async () => {
        await axios.post("https://67d15962825945773eb3fb57.mockapi.io/categories", category);
        setUpdate(!update);
        handleClose();
        setCategory(inner);
    }

    const handleDelete = async () => {
        await axios.delete(`https://67d15962825945773eb3fb57.mockapi.io/categories/${category.id}`);
        handleCloseDelete();
        setUpdate(!update);
        setCategory(inner);
    }
    return (
        <div>
            <NavBar handleOpen={handleOpen} />
            <TableCategories update={update} handleOpenDelete={handleOpenDelete} />
            <ModalCategories update={update} handleSubmit={handleSubmit} category={category} handleInput={handleInput} open={open} handleClose={handleClose} />
             <ModalDelete handleDelete={handleDelete} openDelete={openDelete} handleCloseDelete={handleCloseDelete} />
        </div>
    );
}

export default Categories;