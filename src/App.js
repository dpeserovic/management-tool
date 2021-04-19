import React from 'react';
import { inject, observer } from 'mobx-react';
import { RouterView } from 'mobx-state-router';
import { Login } from './client/modules/membership/pages';
import { Register } from './client/modules/membership/pages';
import { Supervision } from './client/modules/supervision/pages';
import { Dashboard } from './client/modules/dashboard/pages';
import { CreateCategory } from './client/modules/category/pages';
import { EditCategory } from './client/modules/category/pages';
import { AddItem } from './client/modules/item/pages';
import { MyBackpack } from './client/modules/backpack/pages';
import { VirtualWarehouse } from './client/modules/warehouse/pages';
import { EditItem } from './client/modules/item/pages';
import { ItemHistory } from './client/modules/item/pages';
import { MyProfile } from './client/modules/profile/pages';
import { NotFound } from './NotFound';
import { ToastContainer } from 'react-toastify';

const viewMap = {
  login: <Login />,
  register: <Register />,
  supervision: <Supervision />,
  dashboard: <Dashboard />,
  createCategory: <CreateCategory />,
  editCategory: <EditCategory />,
  addItem: <AddItem />,
  myBackpack: <MyBackpack />,
  virtualWarehouse: <VirtualWarehouse />,
  editItem: <EditItem />,
  itemHistory: <ItemHistory />,
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
    return (
      <React.Fragment>
        <RouterView routerStore={routerStore.router} viewMap={viewMap} />
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />
      </React.Fragment>
    )
  }
}

export default App;