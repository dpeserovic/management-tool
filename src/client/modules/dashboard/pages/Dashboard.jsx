import React from 'react';
import { inject, observer } from 'mobx-react';
import { DashboardViewStore } from '../stores';
import { DashboardTemplate } from '../../../themes/dashboard/pages';

@inject(stores => ({ viewStore: new DashboardViewStore(stores.rootStore) }))
@observer
class Dashboard extends React.Component {
    render() {
        return (
            <DashboardTemplate viewStore={this.props.viewStore} />
        )
    }
}

export default Dashboard;