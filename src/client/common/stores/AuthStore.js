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
            const companies = await Axios.get('http://localhost:3001/api/get/companies');
            const company = companies.data.find(c => c.email === credentials.email && c.password === credentials.password);
            const users = await Axios.get('http://localhost:3001/api/get/users');
            const user = users.data.find(u => u.email === credentials.email && u.password === credentials.password);
            const person = company || user;
            if (company || user) {
                runInAction(() => {
                    this.isLoggedIn = true;
                    this.loggedInUser = person;
                })
                sessionStorage.setItem('person', JSON.stringify(this.loggedInUser));
                this.rootStore.routerStore.goTo('dashboard');
            }
        }
        catch (error) {
        }
    }

    @action.bound
    logOut = async () => {
        this.isLoggedIn = false;
        this.loggedInUser = null;
        sessionStorage.removeItem('person');
        this.rootStore.routerStore.goTo('login');
    }

    @action.bound
    checkUser = () => {
        const person = JSON.parse(sessionStorage.getItem('person'));
        if (person) {
            this.isLoggedIn = true;
            this.loggedInUser = person;
            this.rootStore.routerStore.goTo('dashboard');
        } else {
            this.isLoggedIn = false;
            this.loggedInUser = null;
            this.rootStore.routerStore.goTo('login');
        }
    }
}

export default AuthStore;