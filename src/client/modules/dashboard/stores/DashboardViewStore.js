import { observable, computed } from 'mobx';

class DashboardViewStore {
    @computed
    get isOwner() {
        if (this.rootStore.authStore.loggedInUser.hasOwnProperty('name')) {
            return true;
        }
        return false;
    }

    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    navigateCreateCategory = () => {
        this.rootStore.routerStore.goTo('createCategory');
    }

    navigateAddItem = () => {
        this.rootStore.routerStore.goTo('addItem');
    }

    navigateMyBackpack = () => {
        this.rootStore.routerStore.goTo('myBackpack');
    }

    navigateVirtualWarehouse = () => {
        this.rootStore.routerStore.goTo('virtualWarehouse');
    }

    navigateMyProfile = () => {
        this.rootStore.routerStore.goTo('myProfile');
    }

    logOut = () => {
        this.rootStore.authStore.logOut();
    }
}

export default DashboardViewStore;