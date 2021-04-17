import { observable, action, runInAction, computed } from 'mobx';
import { MyProfileForm } from '../forms';
import Axios from 'axios';

class MyProfileViewStore {
    @observable users;
    @observable items;
    @observable categories;

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
        this.companyId = loggedInUser.hasOwnProperty('name') ? loggedInUser.id : loggedInUser.companyId;
        this.form = new MyProfileForm();
        if (this.rootStore.authStore.loggedInUser.hasOwnProperty('name')) {
            this.form.set('value', { id: loggedInUser.id, email: loggedInUser.email, password: loggedInUser.password, name: loggedInUser.name, address: loggedInUser.address, city: loggedInUser.city });
        }
        else {
            this.form.set('value', { id: loggedInUser.id, email: loggedInUser.email, password: loggedInUser.password, companyId: loggedInUser.companyId });
        }
    }

    @action.bound
    getUsers = async () => {
        const getUsers = await Axios.get('http://localhost:3001/api/get/users/' + this.companyId);
        console.log('Success', getUsers);
        runInAction(() => {
            this.users = getUsers;
        })
    }

    @action.bound
    getItems = async () => {
        const getItems = await Axios.get('http://localhost:3001/api/get/all-items/' + this.companyId);
        console.log('Success', getItems);
        runInAction(() => {
            this.items = getItems;
        })
    }

    @action.bound
    getCategories = async () => {
        const getCategories = await Axios.get('http://localhost:3001/api/get/categories/' + this.companyId);
        console.log('Success', getCategories);
        runInAction(() => {
            this.categories = getCategories;
        })
    }

    navigateDashboard = () => {
        this.rootStore.routerStore.goTo('dashboard');
    }
}

export default MyProfileViewStore;