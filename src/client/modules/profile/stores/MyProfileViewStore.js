import { computed } from 'mobx';
import { MyProfileForm } from '../forms';

class MyProfileViewStore {
    @computed
    get isOwner() {
        if (this.rootStore.authStore.loggedInUser.hasOwnProperty('name')) {
            return true;
        }
        return false;
    }

    constructor(rootStore) {
        this.rootStore = rootStore;
        const { loggedInUser } = this.rootStore.authStore;
        this.form = new MyProfileForm();
        if (this.rootStore.authStore.loggedInUser.hasOwnProperty('name')) {
            this.form.set('value', { id: loggedInUser.id, email: loggedInUser.email, password: loggedInUser.password, name: loggedInUser.name, address: loggedInUser.address, city: loggedInUser.city });
        }
        else {
            this.form.set('value', { id: loggedInUser.id, email: loggedInUser.email, password: loggedInUser.password, companyId: loggedInUser.companyId });
        }
    }

    navigateDashboard = () => {
        this.rootStore.routerStore.goTo('dashboard');
    }
}

export default MyProfileViewStore;