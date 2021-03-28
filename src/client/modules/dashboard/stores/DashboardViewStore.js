import { observable } from 'mobx'

class DashboardViewStore {
    @observable user = null;
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.user = JSON.parse(sessionStorage.getItem('user'));
        debugger
    }

    logOut = () => {
        this.rootStore.authStore.logOut();
    }
}

export default DashboardViewStore;