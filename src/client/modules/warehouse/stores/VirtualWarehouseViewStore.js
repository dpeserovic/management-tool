import { observable, action, runInAction, computed } from 'mobx';
import Axios from 'axios';

class VirtualWarehouseViewStore {
    @observable
    person;
    @observable
    companyId;
    @observable
    categories;
    @observable
    items;

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
        this.companyId = this.person.hasOwnProperty('name') ? this.person.id : this.person.companyId;
    }

    @action.bound
    getCategories = async () => {
        const companyCategories = await Axios.get('http://localhost:3001/api/get/categories/' + this.companyId);
        console.log('Success', companyCategories);
        runInAction(() => {
            this.categories = companyCategories;
        })
    }

    @action.bound
    getItems = async () => {
        const companyItems = await Axios.get('http://localhost:3001/api/get/items/' + this.companyId);
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

export default VirtualWarehouseViewStore;