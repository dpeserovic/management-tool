import React from 'react';

import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import Icon from '@material-ui/core/Icon';

import Button from 'react-bootstrap/Button';

function MyBackpackTable(props) {
    const { items, actions } = props;
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align='center'>Item</TableCell>
                        <TableCell align='center'>Date from</TableCell>
                        <TableCell align='center'>Return</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {items.data.map(i => (
                        <TableRow key={i.id}>
                            <TableCell align='center'>{i.name} - [{i.type}]</TableCell>
                            <TableCell align='center'>{new Date(i.dateFrom).getDate() + '.' + (new Date(i.dateFrom).getMonth() + 1) + '.' + new Date(i.dateFrom).getFullYear()}</TableCell>
                            <TableCell align='center'><Button variant='btn btn-primary' onClick={e => actions.returnItem(i.id, i.dateFrom)}><Icon fontSize='small'>remove_outlined</Icon></Button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default MyBackpackTable;