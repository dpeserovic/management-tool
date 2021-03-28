import React from 'react';
import { inject, observer } from 'mobx-react';
import { RouterView } from 'mobx-state-router';
import { Login } from './client/modules/membership/pages';
import { Register } from './client/modules/membership/pages';
import { Dashboard } from './client/modules/dashboard/pages';
import { NotFound } from './NotFound';

const viewMap = {
  login: <Login />,
  register: <Register />,
  dashboard: <Dashboard />,
  notFound: <NotFound />
}

@inject(stores => ({ rootStore: stores.rootStore, routerStore: stores.rootStore.routerStore }))
@observer
class App extends React.Component {

  componentDidMount() {
  }

  render() {
    const { routerStore } = this.props;
    return <RouterView routerStore={routerStore.router} viewMap={viewMap} />
  }
}

export default App;