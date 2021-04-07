import React from 'react';
import { observer } from 'mobx-react';

import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import Icon from '@material-ui/core/Icon';

import Button from 'react-bootstrap/Button';

export default observer(({ store }) => {
    return (
        <div>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Item name</TableCell>
                            <TableCell>Item category</TableCell>
                            <TableCell>Borrow</TableCell>
                            <TableCell>Edit</TableCell>
                            <TableCell>Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {store.data.map(i => (
                            <TableRow key={i.id}>
                                <TableCell>{i.name}</TableCell>
                                <TableCell>{i.type}</TableCell>
                                <TableCell><Button variant="btn btn-primary"><Icon fontSize='small'>add</Icon></Button></TableCell>
                                <TableCell><Button variant="btn btn-info"><Icon fontSize='small'>edit</Icon></Button></TableCell>
                                <TableCell><Button variant="btn btn-danger"><Icon fontSize='small'>delete</Icon></Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
});