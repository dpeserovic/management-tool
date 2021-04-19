import React from 'react';

import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';

function SupervisionTable(props) {
    const { logs, users } = props;
    if (logs && users) {
        logs.data = logs.data.map(l => {
            users.data.filter(u => l.userId === u.id ? l.email = u.email : null);
            return l;
        })
    }
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align='center'>User</TableCell>
                        <TableCell align='center'>Date from</TableCell>
                        <TableCell align='center'>Date to</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {logs.data.map((l, index) => (
                        <TableRow key={index}>
                            <TableCell align='center'>{l.email}</TableCell>
                            <TableCell align='center'>{new Date(l.dateFrom).getDate() + '.' + (new Date(l.dateFrom).getMonth() + 1) + '.' + new Date(l.dateFrom).getFullYear()}</TableCell>
                            <TableCell align='center'>{new Date(l.dateTo).getDate() + '.' + (new Date(l.dateTo).getMonth() + 1) + '.' + new Date(l.dateTo).getFullYear()}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default SupervisionTable;