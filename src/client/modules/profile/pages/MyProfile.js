import React from 'react';
import { inject, observer } from 'mobx-react';
import { MyProfileViewStore } from '../stores';
import { MyProfileTemplate } from '../../../themes/profile/pages';

@inject(stores => ({ viewStore: new MyProfileViewStore(stores.rootStore) }))
@observer
class MyProfile extends React.Component {
    render() {
        return (
            <MyProfileTemplate viewStore={this.props.viewStore} />
        )
    }
}

export default MyProfile;