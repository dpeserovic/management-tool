import { observable, action, runInAction, computed } from 'mobx';
import Axios from 'axios';

class VirtualWarehouseViewStore {
    @observable
    categories;
    @observable
    items;

    @computed
    get isOwner() {
        if (this.rootStore.authStore.loggedInUser.hasOwnProperty('name')) {
            return true;
        }
        return false;
    }

    constructor(rootStore) {
        this.rootStore = rootStore;
        this.companyId = this.rootStore.authStore.loggedInUser.hasOwnProperty('name') ? this.rootStore.authStore.loggedInUser.id : this.rootStore.authStore.loggedInUser.companyId;
        this.userId = !this.rootStore.authStore.loggedInUser.hasOwnProperty('name') ? this.rootStore.authStore.loggedInUser.id : null;
        this.actions = {
            navigateEditItem: (id) => {
                this.rootStore.routerStore.goTo('editItem', { id: id });
            },
            deleteItem: async (id) => {
                const deleteItem = await Axios.get('http://localhost:3001/api/delete/item/' + id);
                console.log('Success', deleteItem);
                if (!deleteItem.data.errno) {
                    this.rootStore.notificationStore.success('Success');
                    await this.getItems();
                }
                else {
                    this.rootStore.notificationStore.error('Error');
                }
            },
            borrowItem: async (id) => {
                const borrowItem = await Axios.post('http://localhost:3001/api/borrow/item/' + id + '/' + this.userId);
                console.log('Success', borrowItem);
                if (!borrowItem.data.errno) {
                    this.rootStore.notificationStore.success('Success')
                    await this.getItems();
                }
                else {
                    this.rootStore.notificationStore.error('Error');
                }
            }
        }
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
        const getItems = await Axios.get('http://localhost:3001/api/get/items/' + this.companyId);
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

export default VirtualWarehouseViewStore;