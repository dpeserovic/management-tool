import React from 'react';
import { ManagementToolNav } from '../../../common/components'

import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

function MyProfileTemplate(props) {
    const { isOwner, person, navigateDashboard } = props.viewStore;
    return (
        <div>
            <ManagementToolNav />
            <h1>My profile</h1>
            {isOwner ?
                <ListGroup className="list" as="ul">
                    <ListGroup.Item as='li'><h3>Key: {person.id}</h3></ListGroup.Item>
                    <ListGroup.Item as='li'><h3>E-mail: {person.email}</h3></ListGroup.Item>
                    <ListGroup.Item as='li'><h3>Name: {person.name}</h3></ListGroup.Item>
                    <ListGroup.Item as='li'><h3>Name: {person.address}</h3></ListGroup.Item>
                    <ListGroup.Item as='li'><h3>Name: {person.city}</h3></ListGroup.Item>
                </ListGroup>
                :
                <ListGroup className="list" as="ul">
                    <ListGroup.Item as='li'><h3>ID: {person.id}</h3></ListGroup.Item>
                    <ListGroup.Item as='li'><h3>E-mail: {person.email}</h3></ListGroup.Item>
                    <ListGroup.Item as='li'><h3>Company key: {person.companyId}</h3></ListGroup.Item>
                </ListGroup>
            }
            <Button variant="btn btn-secondary" onClick={navigateDashboard}>Back</Button>
        </div>
    )
}

export default MyProfileTemplate;