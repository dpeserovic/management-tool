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

export default observer(({ store, actions }) => {
    return (
        <div>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Item</TableCell>
                            <TableCell>Return</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {store.data.map(i => (
                            <TableRow key={i.id}>
                                <TableCell>{i.name} [{i.type}]</TableCell>
                                <TableCell><Button variant="btn btn-info" onClick={e => actions.returnItem(i.id)}><Icon fontSize='small'>remove</Icon></Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
});