import { observable, action, runInAction } from 'mobx';
import Axios from 'axios';

class MyBackpackViewStore {
    @observable
    categories;
    @observable
    items;

    constructor(rootStore) {
        this.rootStore = rootStore;
        this.actions = {
            returnItem: async (id) => {
                const returnItem = await Axios.post('http://localhost:3001/api/update/return-item/' + id);
                console.log('Success', returnItem);
                await this.getItems();
            }
        }
    }

    @action.bound
    getCategories = async () => {
        const companyCategories = await Axios.get('http://localhost:3001/api/get/categories/' + this.rootStore.authStore.loggedInUser.companyId);
        console.log('Success', companyCategories);
        runInAction(() => {
            this.categories = companyCategories;
        })
    }

    @action.bound
    getItems = async () => {
        const companyItems = await Axios.get('http://localhost:3001/api/get/user-items/' + this.rootStore.authStore.loggedInUser.id);
        console.log('Success', companyItems);
        companyItems.data = companyItems.data.map(i => {
            this.categories.data.filter(c => c.id === i.categoryId ? i.type = c.type : null);
            return i;
        })
        runInAction(() => {
            this.items = companyItems;
        })
    }

    navigateDashboard = () => {
        this.rootStore.routerStore.goTo('dashboard');
    }
}

export default MyBackpackViewStore;