import * as React from 'react';
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
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));
function TableCategories({update,handleOpenDelete}) {
    const [categories,setCategories] = React.useState([]);

    // Có 3 dạng 
    // 1: Chạy liên tục 2: thêm ngoặc [] chỉ chạy 1 lần 3: Thêm tham số vào [] nếu tham số thay đổi sẽ chạy function
    React.useEffect(() => {
        getAllData();
    },[update]);

    const getAllData = async () => {
        const reponse = await axios.get("https://67d15962825945773eb3fb57.mockapi.io/categories");
        setCategories(reponse.data);
    }

    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>#</StyledTableCell>
                            <StyledTableCell align="right">Name</StyledTableCell>
                            <StyledTableCell align="right">Description</StyledTableCell>
                            <StyledTableCell align="right"></StyledTableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {categories.map((row, index) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">
                                    {index + 1}
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.name}</StyledTableCell>
                                <StyledTableCell align="right">{row.description}</StyledTableCell>
                                <StyledTableCell align="right">
                                    <Button sx={{ marginRight: "10px" }} variant="contained"><FaEdit />
                                    </Button>
                                    <Button onClick={() => handleOpenDelete(row)} color='error' variant="contained"><MdDelete />
                                    </Button>
                                </StyledTableCell>

                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default TableCategories;