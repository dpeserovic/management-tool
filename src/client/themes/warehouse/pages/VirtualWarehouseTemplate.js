import React from 'react';
import { ManagementToolNav, VirtualWarehouseTable } from '../../../common/components'

import Icon from '@material-ui/core/Icon';

import Button from 'react-bootstrap/Button';

function VirtualWarehouseTemplate(props) {
    const { navigateDashboard, items, isOwner, actions } = props.viewStore;
    return (
        <div>
            <ManagementToolNav />
            <h1>Virtual warehouse</h1>
            <Button variant="btn btn-secondary" onClick={navigateDashboard}><Icon fontSize='large'>keyboard_backspace_outlined</Icon></Button>
            <VirtualWarehouseTable items={items} isOwner={isOwner} actions={actions} />
        </div>
    )
}

export default VirtualWarehouseTemplate;