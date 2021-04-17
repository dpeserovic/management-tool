import React from 'react';

import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';

function SupervisionTable(props) {
    const { users } = props;
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align='center'>ID</TableCell>
                        <TableCell align='center'>Email</TableCell>
                        <TableCell align='center'>Items</TableCell>
                        <TableCell align='center'>Number of items</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.data.map((u, index) => (
                        <TableRow key={u.id}>
                            <TableCell align='center'>{u.id}</TableCell>
                            <TableCell align='center'>{u.email}</TableCell>
                            <TableCell align='center'>
                                {users.data[index][u.id].map((i, index) => (
                                    <div key={index}>{i}</div>
                                ))}
                            </TableCell>
                            <TableCell align='center'>{u[u.id].length}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default SupervisionTable;