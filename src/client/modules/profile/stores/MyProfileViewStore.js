import { observable } from "mobx";

class MyProfileViewStore {
    @observable
    person;
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.person = JSON.parse(sessionStorage.getItem('person'));

    }
}

export default MyProfileViewStore;