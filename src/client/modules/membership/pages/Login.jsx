import React from 'react';
import { inject, observer } from 'mobx-react';
import { LoginViewStore } from '../stores';
import { LoginTemplate } from '../../../themes/membership/pages';

@inject(stores => ({ viewStore: new LoginViewStore(stores.rootStore) }))
@observer
class Login extends React.Component {
    render() {
        return (
            <LoginTemplate viewStore={this.props.viewStore} />
        )
    }
}

export default Login;