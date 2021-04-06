import React from 'react';
import { inject, observer } from 'mobx-react';
import { VirtualWarehouseViewStore } from '../stores';
import { VirtualWarehouseTemplate } from '../../../themes/warehouse/pages';

@inject(stores => ({ viewStore: new VirtualWarehouseViewStore(stores.rootStore) }))
@observer
class VirtualWarehouse extends React.Component {
    render() {
        return (
            <VirtualWarehouseTemplate viewStore={this.props.viewStore} />
        )
    }
}

export default VirtualWarehouse;