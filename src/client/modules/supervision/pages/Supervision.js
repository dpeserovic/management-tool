import React from 'react';
import { inject, observer } from 'mobx-react';
import { SupervisionViewStore } from '../stores';
import { SupervisionTemplate } from '../../../themes/supervision/pages';

@inject(stores => ({ viewStore: new SupervisionViewStore(stores.rootStore) }))
@observer
class Supervision extends React.Component {
    async componentDidMount() {
        await this.props.viewStore.getCategories();
        await this.props.viewStore.getItems();
        await this.props.viewStore.getUsers();
    }
    render() {
        if (!this.props.viewStore.categories || !this.props.viewStore.allTakenItems || !this.props.viewStore.users) {
            return <div />
        }
        return (
            <SupervisionTemplate viewStore={this.props.viewStore} />
        )
    }
}

export default Supervision;