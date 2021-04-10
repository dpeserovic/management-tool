import React from 'react';
import { inject, observer } from 'mobx-react';
import { MyBackpackViewStore } from '../stores';
import { MyBackpackTemplate } from '../../../themes/backpack/pages';

@inject(stores => ({ viewStore: new MyBackpackViewStore(stores.rootStore) }))
@observer
class MyBackpack extends React.Component {
    async componentDidMount() {
        await this.props.viewStore.getCategories();
        await this.props.viewStore.getItems();
    }
    render() {
        if (!this.props.viewStore.categories || !this.props.viewStore.items) {
            return <div />
        }
        return (
            <MyBackpackTemplate viewStore={this.props.viewStore} />
        )
    }
}

export default MyBackpack;