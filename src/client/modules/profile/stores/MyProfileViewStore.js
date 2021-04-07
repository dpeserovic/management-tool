import { computed, observable } from "mobx";

class MyProfileViewStore {
    @observable
    person;

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

    navigateDashboard = () => {
        this.rootStore.routerStore.goTo('dashboard');
    }
}

export default MyProfileViewStore;