import React from 'react';
import { ManagementToolNav, HistoryTable } from '../../../common/components';

import Icon from '@material-ui/core/Icon';

import Button from 'react-bootstrap/Button';

function ItemHistoryTemplate(props) {
    const { item, category, users, logs, navigateVirtualWarehouse } = props.viewStore;
    return (
        <div>
            <ManagementToolNav />
            <h1>Item history</h1>
            <h3>{item.data[0].name} - [{category.data[0].type}]</h3>
            <Button variant="btn btn-secondary" onClick={navigateVirtualWarehouse}><Icon fontSize='large'>keyboard_backspace_outlined</Icon></Button>
            {logs.data.length > 0 && <HistoryTable logs={logs} users={users} />}
        </div>
    )
}

export default ItemHistoryTemplate;