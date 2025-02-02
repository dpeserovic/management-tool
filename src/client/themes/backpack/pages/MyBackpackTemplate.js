import React from 'react';
import { ManagementToolNav, MyBackpackTable } from '../../../common/components';

import Icon from '@material-ui/core/Icon';

import Button from 'react-bootstrap/Button';

function MyBackpackTemplate(props) {
    const { items, actions, navigateDashboard } = props.viewStore;
    return (
        <div>
            <ManagementToolNav />
            <h1>My backpack</h1>
            <h3>My total items: {items.data.length}</h3>
            <Button variant="btn btn-secondary" onClick={navigateDashboard}><Icon fontSize='large'>keyboard_backspace_outlined</Icon></Button>
            {items.data.length > 0 && <MyBackpackTable items={items} actions={actions} />}
        </div>
    )
}

export default MyBackpackTemplate;