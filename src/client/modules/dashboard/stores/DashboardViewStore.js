import { observable } from 'mobx'

class DashboardViewStore {
    @observable person = null;
    constructor(rootStore) {
        this.rootStore = rootStore;
        debugger
        this.person = JSON.parse(sessionStorage.getItem('person'));
    }

    logOut = () => {
        this.rootStore.authStore.logOut();
    }
}

export default DashboardViewStore;