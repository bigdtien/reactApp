import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';


function TableProducts(props) {
    const [products, setProducts] = React.useState([]);
    React.useEffect(() => {
            getAllData();
        },[]);

    const getAllData = async () => {
        const reponse = await axios.get("https://67d15962825945773eb3fb57.mockapi.io/products");
        setProducts(reponse.data);
    }
    
    return (
        
        <div>
            <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>#</TableCell>
                                <TableCell align="right">Name</TableCell>
                                <TableCell align="right">Description</TableCell>
                                <TableCell align="right">Image</TableCell>
                                
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {products.map((row, index) => (
                                <TableRow
                                    key={row.name}
                                >
                                    <TableCell component="th" scope="row">
                                        {index + 1}
                                    </TableCell>
                                    <TableCell align="right">{row.name}</TableCell>
                                    <TableCell align="right">{row.description}</TableCell>
                                    <TableCell align="right">{row.avatar}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
        </div>
    );
}

export default TableProducts;