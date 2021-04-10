import React from 'react';
import { ManagementToolNav, BackpackTable } from '../../../common/components';

import Button from 'react-bootstrap/Button';

function MyBackpackTemplate(props) {
    const { items, actions, navigateDashboard } = props.viewStore;
    return (
        <div>
            <ManagementToolNav />
            <h1>My backpack</h1>
            <BackpackTable store={items} actions={actions} />
            <Button variant="btn btn-secondary" onClick={navigateDashboard}>Back</Button>
        </div>
    )
}

export default MyBackpackTemplate;