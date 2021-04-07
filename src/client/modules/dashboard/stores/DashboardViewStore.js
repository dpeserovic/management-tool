import { observable, computed } from 'mobx';

class DashboardViewStore {
    @observable
    person = null;

    @computed
    get isOwner() {
        if (this.person.hasOwnProperty('name')) {
            return true;
        }
        return false;
    }

    constructor(rootStore) {
        this.rootStore = rootStore;
        this.person = JSON.parse(sessionStorage.getItem('person'));
    }

    navigateCreateCategory = () => {
        this.rootStore.routerStore.goTo('createCategory');
    }

    navigateAddItem = () => {
        this.rootStore.routerStore.goTo('addItem');
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