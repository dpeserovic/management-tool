import React from 'react';
import { inject, observer } from 'mobx-react';
import { RouterView } from 'mobx-state-router';
import { Login } from './client/modules/membership/pages';
import { Register } from './client/modules/membership/pages';
import { Dashboard } from './client/modules/dashboard/pages';
import { CreateCategory } from './client/modules/category/pages';
import { AddItem } from './client/modules/item/pages';
import { MyBackpack } from './client/modules/backpack/pages';
import { VirtualWarehouse } from './client/modules/warehouse/pages';
import { EditItem } from './client/modules/item/pages';
import { MyProfile } from './client/modules/profile/pages';
import { NotFound } from './NotFound';

const viewMap = {
  login: <Login />,
  register: <Register />,
  dashboard: <Dashboard />,
  createCategory: <CreateCategory />,
  addItem: <AddItem />,
  myBackpack: <MyBackpack />,
  virtualWarehouse: <VirtualWarehouse />,
  editItem: <EditItem />,
  myProfile: <MyProfile />,
  notFound: <NotFound />
}

@inject(stores => ({ rootStore: stores.rootStore, routerStore: stores.rootStore.routerStore }))
@observer
class App extends React.Component {

  componentDidMount() {
    this.props.rootStore.init();
  }

  render() {
    const { routerStore } = this.props;
    return <RouterView routerStore={routerStore.router} viewMap={viewMap} />
  }
}

export default App;