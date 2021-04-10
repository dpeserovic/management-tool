import React from 'react';
import { ManagementToolNav, BasicTable } from '../../../common/components'

import Button from 'react-bootstrap/Button';

function VirtualWarehouseTemplate(props) {
    const { items, isOwner, actions, navigateDashboard } = props.viewStore;
    return (
        <div>
            <ManagementToolNav />
            <h1>Virtual warehouse</h1>
            <Button variant="btn btn-secondary" onClick={navigateDashboard}>Back</Button>
            <BasicTable store={items} permission={isOwner} actions={actions} />
        </div>
    )
}

export default VirtualWarehouseTemplate;