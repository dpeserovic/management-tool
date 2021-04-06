import React from 'react';
import { ManagementToolNav } from '../../../common/components'

import ListGroup from 'react-bootstrap/ListGroup';

function MyProfileTemplate(props) {
    const { person } = props.viewStore;
    debugger
    return (
        <div>
            <ManagementToolNav />
            <h1>My profile</h1>
            {!person.hasOwnProperty('name') ?
                <ListGroup className="list" as="ul">
                    <ListGroup.Item as='li'><h2>ID: {person.id}</h2></ListGroup.Item>
                    <ListGroup.Item as='li'><h2>E-mail: {person.email}</h2></ListGroup.Item>
                    <ListGroup.Item as='li'><h2>Company key: {person.companyId}</h2></ListGroup.Item>
                </ListGroup>
                :
                <ListGroup className="list" as="ul">
                    <ListGroup.Item as='li'><h2>ID: {person.id}</h2></ListGroup.Item>
                    <ListGroup.Item as='li'><h2>E-mail: {person.email}</h2></ListGroup.Item>
                    <ListGroup.Item as='li'><h2>Name: {person.name}</h2></ListGroup.Item>
                    <ListGroup.Item as='li'><h2>Name: {person.address}</h2></ListGroup.Item>
                    <ListGroup.Item as='li'><h2>Name: {person.city}</h2></ListGroup.Item>
                </ListGroup>
            }
        </div>
    )
}

export default MyProfileTemplate;