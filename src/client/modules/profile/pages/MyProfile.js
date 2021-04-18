import React from 'react';
import { inject, observer } from 'mobx-react';
import { MyProfileViewStore } from '../stores';
import { MyProfileTemplate } from '../../../themes/profile/pages';

@inject(stores => ({ viewStore: new MyProfileViewStore(stores.rootStore) }))
@observer
class MyProfile extends React.Component {
    async componentDidMount() {
        await this.props.viewStore.getUsers();
        await this.props.viewStore.getItems();
        await this.props.viewStore.getCategories();
        await this.props.viewStore.getCompany();
    }
    render() {
        if (!this.props.viewStore.users || !this.props.viewStore.items || !this.props.viewStore.categories || !this.props.viewStore.company) {
            return <div />
        }
        return (
            <MyProfileTemplate viewStore={this.props.viewStore} />
        )
    }
}

export default MyProfile;