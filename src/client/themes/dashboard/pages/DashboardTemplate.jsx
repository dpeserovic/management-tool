import React from 'react';
import { ManagementToolNav } from '../../../common/components'

import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

function DashboardTemplate(props) {
    const { isOwner, navigateCreateCategory, navigateAddItem, logOut } = props.viewStore;
    return (
        <div>
            <ManagementToolNav />
            {isOwner ?
                <ListGroup className="list" as="ul">
                    <ListGroup.Item as='li'>
                        <h1>Create category</h1>
                        <Button variant='btn btn-dark' onClick={navigateCreateCategory}>Create User</Button>
                    </ListGroup.Item>
                    <ListGroup.Item as='li'>
                        <h1>Add item</h1>
                        <Button variant='btn btn-dark' onClick={navigateAddItem}>Create User</Button>
                    </ListGroup.Item>
                    <ListGroup.Item as='li'>
                        <h1>Virtual warehouse</h1>
                        <Button variant='btn btn-dark'>Create User</Button>
                    </ListGroup.Item>
                    <ListGroup.Item as='li'>
                        <h1>My profile</h1>
                        <Button variant='btn btn-dark'>Create User</Button>
                    </ListGroup.Item>
                    <ListGroup.Item as='li'>
                        <h1>Log out</h1>
                        <Button variant="btn btn-dark" onClick={logOut}>Log out</Button>
                    </ListGroup.Item>
                </ListGroup>
                :
                <ListGroup className="list" as="ul">
                    <ListGroup.Item as='li'>NOT OWNER</ListGroup.Item>
                </ListGroup>
            }


        </div>
    )
}

export default DashboardTemplate;