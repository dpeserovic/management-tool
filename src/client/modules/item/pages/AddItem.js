import React from 'react';
import { inject, observer } from 'mobx-react';
import { AddItemViewStore } from '../stores';
import { AddItemTemplate } from '../../../themes/item/pages';

@inject(stores => ({ viewStore: new AddItemViewStore(stores.rootStore) }))
@observer
class AddItem extends React.Component {
    render() {
        return (
            <AddItemTemplate viewStore={this.props.viewStore} />
        )
    }
}

export default AddItem;