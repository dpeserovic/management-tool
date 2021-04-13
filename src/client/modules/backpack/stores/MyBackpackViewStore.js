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
                try {
                    const returnItem = await Axios.post('http://localhost:3001/api/return/item/' + id);
                    console.log('Success', returnItem);
                    if (!returnItem.data.errno) {
                        await this.getItems();
                        this.rootStore.notificationStore.success('Success');
                    }
                    else {
                        this.rootStore.notificationStore.error('Error');
                    }
                }
                catch (error) {
                    this.rootStore.notificationStore.error(error.message);
                }
            }
        }
    }

    @action.bound
    getCategories = async () => {
        const getCategories = await Axios.get('http://localhost:3001/api/get/categories/' + this.rootStore.authStore.loggedInUser.companyId);
        console.log('Success', getCategories);
        runInAction(() => {
            this.categories = getCategories;
        })
    }

    @action.bound
    getItems = async () => {
        const getItems = await Axios.get('http://localhost:3001/api/get/my-items/' + this.rootStore.authStore.loggedInUser.id);
        console.log('Success', getItems);
        getItems.data = getItems.data.map(i => {
            this.categories.data.filter(c => c.id === i.categoryId ? i.type = c.type : null);
            return i;
        })
        runInAction(() => {
            this.items = getItems;
        })
    }

    navigateDashboard = () => {
        this.rootStore.routerStore.goTo('dashboard');
    }
}

export default MyBackpackViewStore;