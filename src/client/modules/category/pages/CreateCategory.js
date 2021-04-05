import React from 'react';
import { inject, observer } from 'mobx-react';
import { CreateCategoryViewStore } from '../stores';
import { CreateCategoryTemplate } from '../../../themes/category/pages';

@inject(stores => ({ viewStore: new CreateCategoryViewStore(stores.rootStore) }))
@observer
class CreateCategory extends React.Component {
    render() {
        return (
            <CreateCategoryTemplate viewStore={this.props.viewStore} />
        )
    }
}

export default CreateCategory;