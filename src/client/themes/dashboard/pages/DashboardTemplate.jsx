import React from 'react';
import { ManagementToolNav } from '../../../common/components'

import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

function DashboardTemplate(props) {
    const { logOut, user } = props.viewStore;
    debugger
    return (
        <div>
            <ManagementToolNav />
            <h1>Dashboard</h1>
            <ListGroup>
                <ListGroup.Item>ID: {user.id}</ListGroup.Item>
                <ListGroup.Item>Email: {user.email}</ListGroup.Item>
                <ListGroup.Item>Company id: {user.companyId}</ListGroup.Item>
                <ListGroup.Item>Is owner: {user.isOwner}</ListGroup.Item>
            </ListGroup>
            <Button variant="btn btn-dark" onClick={logOut}>Log out</Button>
        </div>
    )
}

export default DashboardTemplate;