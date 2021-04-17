import { observable, action, runInAction } from 'mobx';
import Axios from 'axios';

class SupervisionViewStore {
    @observable categories;
    @observable allTakenItems;
    @observable allUnusedItemsLength;
    @observable allTakenItemsPercentage;
    @observable users;

    constructor(rootStore) {
        this.rootStore = rootStore;
        this.companyId = this.rootStore.authStore.loggedInUser.id;
    }

    @action.bound
    getCategories = async () => {
        const getCategories = await Axios.get('http://localhost:3001/api/get/categories/' + this.companyId);
        console.log('Success', getCategories);
        runInAction(() => {
            this.categories = getCategories;
        })
    }

    @action.bound
    getItems = async () => {
        const getAllCompanyItems = await Axios.get('http://localhost:3001/api/get/all-items/' + this.companyId);
        console.log('Success', getAllCompanyItems);
        const getAllTakenItems = await Axios.get('http://localhost:3001/api/get/all-taken-items/' + this.companyId);
        console.log('Success', getAllTakenItems);
        getAllTakenItems.data = getAllTakenItems.data.map(i => {
            this.categories.data.filter(c => c.id === i.categoryId ? i.type = c.type : null);
            return i;
        })
        runInAction(() => {
            this.allTakenItems = getAllTakenItems;
            this.allUnusedItemsLength = getAllCompanyItems.data.length - getAllTakenItems.data.length;
            this.allTakenItemsPercentage = getAllTakenItems.data.length / getAllCompanyItems.data.length * 100;
        })
    }

    @action.bound
    getUsers = async () => {
        const getUsers = await Axios.get('http://localhost:3001/api/get/users/' + this.companyId);
        console.log('Success', getUsers);
        getUsers.data = getUsers.data.map(u => {
            u[u.id] = [];
            this.allTakenItems.data.filter(i => {
                if (u.id === i.userId) {
                    u[u.id].push(i.name + ' - [' + i.type + ']');
                }
            })
            return u;
        });
        runInAction(() => {
            this.users = getUsers;
        })
    }

    navigateDashboard = () => {
        this.rootStore.routerStore.goTo('dashboard');
    }
}

export default SupervisionViewStore;