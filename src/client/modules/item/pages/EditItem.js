import React from 'react';
import { inject, observer } from 'mobx-react';
import { EditItemViewStore } from '../stores';
import { EditItemTemplate } from '../../../themes/item/pages';

@inject(stores => ({ viewStore: new EditItemViewStore(stores.rootStore) }))
@observer
class EditItem extends React.Component {
    // async componentDidMount() {
    //     await this.props.viewStore.getCategories();
    // }
    render() {
        // if (!this.props.viewStore.categories) {
        //     return <div />
        // }
        return (
            <EditItemTemplate viewStore={this.props.viewStore} />
        )
    }
}

export default EditItem;