import { RouterStore } from '../router';
import { AuthStore } from './';

class RootStore {
    constructor() {
        this.routerStore = new RouterStore(this);
        this.authStore = new AuthStore(this);
    }
}

export default RootStore;