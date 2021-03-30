import { observable, action, runInAction } from 'mobx';
import Axios from 'axios';

class AuthStore {
    @observable
    isLoggedIn = false;
    @observable
    loggedInUser = null;

    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    @action.bound
    logIn = async (credentials) => {
        try {
            const owners = await Axios.get('http://localhost:3001/api/get/companies');
            const owner = owners.data.filter(o => o.email === credentials.email && o.password === credentials.password);
            const users = await Axios.get('http://localhost:3001/api/get/users');
            const user = users.data.filter(u => u.email === credentials.email && u.password === credentials.password);
            const person = owner[0] || user[0];
            if (owner.length || user.length) {
                runInAction(() => {
                    this.isLoggedIn = true;
                    this.loggedInUser = person;
                })
                sessionStorage.setItem('person', JSON.stringify(this.loggedInUser));
                this.rootStore.routerStore.goTo('dashboard');
            }
        }
        catch (error) {
            throw error;
        }
    }

    @action.bound
    logOut = async () => {
        this.isLoggedIn = false;
        this.loggedInUser = null;
        sessionStorage.removeItem('user');
        this.rootStore.routerStore.goTo('login');
    }
}

export default AuthStore;