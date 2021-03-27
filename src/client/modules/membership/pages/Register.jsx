import React from 'react';
import { inject, observer } from 'mobx-react';
import { RegisterViewStore } from '../stores';
import { RegisterTemplate } from '../../../themes/membership/pages'

@inject(stores => ({ viewStore: new RegisterViewStore(stores.rootStore) }))
@observer
class Register extends React.Component {
    render() {
        return (
            <RegisterTemplate viewStore={this.props.viewStore} />
        )
    }
}

export default Register;