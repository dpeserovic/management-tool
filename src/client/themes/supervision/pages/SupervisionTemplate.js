import React from 'react';
import { ManagementToolNav, SupervisionTable } from '../../../common/components'

import Icon from '@material-ui/core/Icon';

import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from 'react-bootstrap/Button';

function SupervisionTemplate(props) {
    const { users, allTakenItems, allUnusedItemsLength, allTakenItemsPercentage, navigateDashboard } = props.viewStore;
    return (
        <div>
            <ManagementToolNav />
            <h1>Supervision</h1>
            <h3>Number of unused items: {allUnusedItemsLength}</h3>
            <h3>Number of taken items: {allTakenItems.data.length}</h3>
            <h3>Percentage of taken items: {!isNaN(allTakenItemsPercentage) ? allTakenItemsPercentage.toFixed(2) : 0}%</h3>
            <ProgressBar id='progress-bar' animated now={allTakenItemsPercentage} />
            <Button variant="btn btn-secondary" onClick={navigateDashboard}><Icon fontSize='large'>keyboard_backspace_outlined</Icon></Button>
            {users.data.length > 0 && <SupervisionTable users={users} />}
        </div>
    )
}

export default SupervisionTemplate;