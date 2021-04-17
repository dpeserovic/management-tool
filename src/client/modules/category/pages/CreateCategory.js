import React from 'react';
import { inject, observer } from 'mobx-react';
import { CreateCategoryViewStore } from '../stores';
import { CreateCategoryTemplate } from '../../../themes/category/pages';

@inject(stores => ({ viewStore: new CreateCategoryViewStore(stores.rootStore) }))
@observer
class CreateCategory extends React.Component {
    async componentDidMount() {
        await this.props.viewStore.getCategories();
    }
    render() {
        if (!this.props.viewStore.categories) {
            return <div />
        }
        return (
            <CreateCategoryTemplate viewStore={this.props.viewStore} />
        )
    }
}

export default CreateCategory;