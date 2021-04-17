import React from 'react';
import { inject, observer } from 'mobx-react';
import { EditCategoryViewStore } from '../stores';
import { EditCategoryTemplate } from '../../../themes/category/pages';

@inject(stores => ({ viewStore: new EditCategoryViewStore(stores.rootStore) }))
@observer
class EditCategory extends React.Component {
    render() {
        if (!this.props.viewStore.category) {
            return <div />
        }
        return (
            <EditCategoryTemplate viewStore={this.props.viewStore} />
        )
    }
}

export default EditCategory;