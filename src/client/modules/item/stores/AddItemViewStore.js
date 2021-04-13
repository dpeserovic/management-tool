import { observable, action, runInAction } from 'mobx';
import { AddItemForm } from '../forms'
import Axios from 'axios';

class AddItemViewStore {
    @observable
    categories;

    constructor(rootStore) {
        this.rootStore = rootStore;
        this.form = new AddItemForm({
            onSuccess: async (form) => {
                const values = form.values();
                console.log('Success', values);
                try {
                    const createItem = await Axios.post('http://localhost:3001/api/create/item', { name: values.name, companyId: this.rootStore.authStore.loggedInUser.id, categoryId: values.categoryId });
                    console.log('Success', createItem);
                    if (!createItem.data.errno) {
                        this.rootStore.notificationStore.success('Success');
                        this.form.clear();
                    }
                    else {
                        this.rootStore.notificationStore.error('Error');
                    }
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
        const getCategories = await Axios.get('http://localhost:3001/api/get/categories/' + this.rootStore.authStore.loggedInUser.id);
        console.log('Success', getCategories);
        runInAction(() => {
            this.categories = getCategories;
        })
    }

    navigateDashboard = () => {
        this.rootStore.routerStore.goTo('dashboard');
    }
}

export default AddItemViewStore;