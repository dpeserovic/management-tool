import React from 'react';
import { ManagementToolNav } from '../../../common/components'

import Icon from '@material-ui/core/Icon';

import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

function DashboardTemplate(props) {
    const { isOwner, navigateCreateCategory, navigateAddItem, navigateMyBackpack, navigateVirtualWarehouse, navigateMyProfile, logOut } = props.viewStore;
    return (
        <div>
            <ManagementToolNav />
            {isOwner ?
                <ListGroup className="list" as="ul">
                    <ListGroup.Item as='li'>
                        <h1>Create category</h1>
                        <Button variant='btn btn-secondary' onClick={navigateCreateCategory}><Icon fontSize='large'>category_outlined</Icon></Button>
                    </ListGroup.Item>
                    <ListGroup.Item as='li'>
                        <h1>Add item</h1>
                        <Button variant='btn btn-secondary' onClick={navigateAddItem}><Icon fontSize='large'>post_add_outlined</Icon></Button>
                    </ListGroup.Item>
                    <ListGroup.Item as='li'>
                        <h1>Virtual warehouse</h1>
                        <Button variant='btn btn-secondary' onClick={navigateVirtualWarehouse}><Icon fontSize='large'>home_outlined</Icon></Button>
                    </ListGroup.Item>
                    <ListGroup.Item as='li'>
                        <h1>My profile</h1>
                        <Button variant='btn btn-secondary' onClick={navigateMyProfile}><Icon fontSize='large'>perm_identity_outlined</Icon></Button>
                    </ListGroup.Item>
                    <ListGroup.Item as='li'>
                        <h1>Log out</h1>
                        <Button variant="btn btn-secondary" onClick={logOut}><Icon fontSize='large'>exit_to_app_outlined</Icon></Button>
                    </ListGroup.Item>
                </ListGroup>
                :
                <ListGroup className="list" as="ul">
                    <ListGroup.Item as='li'>
                        <h1>My backpack</h1>
                        <Button variant='btn btn-secondary' onClick={navigateMyBackpack}><Icon fontSize='large'>local_mall_outlined</Icon></Button>
                    </ListGroup.Item>
                    <ListGroup.Item as='li'>
                        <h1>Virtual warehouse</h1>
                        <Button variant='btn btn-secondary' onClick={navigateVirtualWarehouse}><Icon fontSize='large'>home_outlined</Icon></Button>
                    </ListGroup.Item>
                    <ListGroup.Item as='li'>
                        <h1>My profile</h1>
                        <Button variant='btn btn-secondary' onClick={navigateMyProfile}><Icon fontSize='large'>perm_identity_outlined</Icon></Button>
                    </ListGroup.Item>
                    <ListGroup.Item as='li'>
                        <h1>Log out</h1>
                        <Button variant="btn btn-secondary" onClick={logOut}><Icon fontSize='large'>exit_to_app_outlined</Icon></Button>
                    </ListGroup.Item>
                </ListGroup>
            }
        </div>
    )
}

export default DashboardTemplate;