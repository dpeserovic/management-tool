import { RouterStore } from '../router';
import { AuthStore, NotificationStore } from './';

class RootStore {
    constructor() {
        this.routerStore = new RouterStore(this);
        this.authStore = new AuthStore(this);
        this.notificationStore = new NotificationStore(this);
    }

    init = () => {
        this.authStore.checkUser();
    }
}

export default RootStore;