import React from 'react';
import { ManagementToolNav } from '../../../common/components'

import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

function DashboardTemplate(props) {
    const { logOut, person } = props.viewStore;
    debugger
    return (
        <div>
            <ManagementToolNav />
            <h1>Dashboard</h1>
            {person.hasOwnProperty('name')
            ? 
            <ListGroup>
                <ListGroup.Item>ID: {person.id}</ListGroup.Item>
                <ListGroup.Item>Email: {person.email}</ListGroup.Item>
                <ListGroup.Item>Name: {person.name}</ListGroup.Item>
                <ListGroup.Item>Address: {person.address}</ListGroup.Item>
                <ListGroup.Item>City: {person.city}</ListGroup.Item>
            </ListGroup>
            :
            <ListGroup>
            <ListGroup.Item>ID: {person.id}</ListGroup.Item>
            <ListGroup.Item>Email: {person.email}</ListGroup.Item>
            <ListGroup.Item>Company key: {person.companyKey}</ListGroup.Item>
            </ListGroup>
            }
            <Button variant="btn btn-dark" onClick={logOut}>Log out</Button>
        </div>
    )
}

export default DashboardTemplate;