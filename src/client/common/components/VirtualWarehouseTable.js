import React from 'react';

import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import Icon from '@material-ui/core/Icon';

import Button from 'react-bootstrap/Button';

function BasicTable(props) {
    const { items, isOwner, actions } = props;
    return (
        <TableContainer>
            {isOwner ?
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align='center'>Name</TableCell>
                            <TableCell align='center'>Category</TableCell>
                            <TableCell align='center'>Edit</TableCell>
                            <TableCell align='center'>Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {items.data.map(i => (
                            <TableRow key={i.id}>
                                <TableCell align='center'>{i.name}</TableCell>
                                <TableCell align='center'>{i.type}</TableCell>
                                <TableCell align='center'><Button variant='btn btn-secondary' onClick={e => actions.navigateEditItem(i.id)}><Icon fontSize='small'>edit_outlined</Icon></Button></TableCell>
                                <TableCell align='center'><Button variant='btn btn-danger' onClick={e => actions.deleteItem(i.id)}><Icon fontSize='small'>delete_outlined</Icon></Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                :
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align='center'>Name</TableCell>
                            <TableCell align='center'>Category</TableCell>
                            <TableCell align='center'>Borrow</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {items.data.map(i => (
                            <TableRow key={i.id}>
                                <TableCell align='center'>{i.name}</TableCell>
                                <TableCell align='center'>{i.type}</TableCell>
                                <TableCell align='center'><Button variant='btn btn-primary' onClick={e => actions.borrowItem(i.id)}><Icon fontSize='small'>add_outlined</Icon></Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            }
        </TableContainer>
    )
}

export default BasicTable;