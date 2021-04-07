import React from 'react';
import { inject, observer } from 'mobx-react';
import { AddItemViewStore } from '../stores';
import { AddItemTemplate } from '../../../themes/item/pages';

@inject(stores => ({ viewStore: new AddItemViewStore(stores.rootStore) }))
@observer
class AddItem extends React.Component {
    componentDidMount() {
        this.props.viewStore.getCategories();
    }
    render() {
        if (!this.props.viewStore.categories) {
            return <div />
        }
        return (
            <AddItemTemplate viewStore={this.props.viewStore} />
        )
    }
}

export default AddItem;