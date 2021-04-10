import React from 'react';
import { inject, observer } from 'mobx-react';
import { EditItemViewStore } from '../stores';
import { EditItemTemplate } from '../../../themes/item/pages';

@inject(stores => ({ viewStore: new EditItemViewStore(stores.rootStore) }))
@observer
class EditItem extends React.Component {
    render() {
        if (!this.props.viewStore.categories || !this.props.viewStore.item) {
            return <div />
        }
        return (
            <EditItemTemplate viewStore={this.props.viewStore} />
        )
    }
}

export default EditItem;