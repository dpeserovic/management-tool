import { observable, action, runInAction } from 'mobx';
import { AddItemForm } from '../forms'
import Axios from 'axios';

class AddItemViewStore {
    @observable
    person;
    @observable
    companyId;
    @observable
    categories;

    constructor(rootStore) {
        this.rootStore = rootStore;
        this.person = JSON.parse(sessionStorage.getItem('person'));
        this.companyId = this.person.id;

        this.form = new AddItemForm({
            onSuccess: async (form) => {
                const values = form.values();
                console.log('Success', values);
                try {
                    const createItem = await Axios.post('http://localhost:3001/api/create/item', { name: values.name, companyId: this.companyId, categoryId: values.categoryId });
                    this.form.clear();
                    console.log('Success', createItem);
                    !createItem.data.errno ? this.rootStore.notificationStore.success('Success') : this.rootStore.notificationStore.error('Error');
                } catch (error) {
                    this.form.invalidate(error.message);
                    this.rootStore.notificationStore.error(error.message);
                }
            },
            onError: (form) => {
                const values = form.values();
                console.log('Error', values);
                this.rootStore.notificationStore.error('Error');
            }
        })
    }

    @action.bound
    getCategories = async () => {
        const companyCategories = await Axios.get('http://localhost:3001/api/get/categories/' + this.companyId);
        console.log('Success', companyCategories);
        runInAction(() => {
            this.categories = companyCategories;
        })
    }

    navigateDashboard = () => {
        this.rootStore.routerStore.goTo('dashboard');
    }
}

export default AddItemViewStore;