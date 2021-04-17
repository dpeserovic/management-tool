import React from 'react';

import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import Icon from '@material-ui/core/Icon';

import Button from 'react-bootstrap/Button';

function EditCategoryTable(props) {
    const { categories, actions } = props;
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align='center'>Category</TableCell>
                        <TableCell align='center'>Edit</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {categories.data.map(c => (
                        <TableRow key={c.id}>
                            <TableCell align='center'>{c.type}</TableCell>
                            <TableCell align='center'><Button variant='btn btn-secondary' onClick={e => actions.navigateEditCategory(c.id)}><Icon fontSize='small'>edit_outlined</Icon></Button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default EditCategoryTable;