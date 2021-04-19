import React from 'react';
import { inject, observer } from 'mobx-react';
import { ItemHistoryViewStore } from '../stores';
import { ItemHistoryTemplate } from '../../../themes/item/pages';

@inject(stores => ({ viewStore: new ItemHistoryViewStore(stores.rootStore) }))
@observer
class ItemHistory extends React.Component {
    render() {
        if (!this.props.viewStore.item || !this.props.viewStore.category || !this.props.viewStore.users || !this.props.viewStore.logs) {
            return <div />
        }
        return (
            <ItemHistoryTemplate viewStore={this.props.viewStore} />
        )
    }
}

export default ItemHistory;