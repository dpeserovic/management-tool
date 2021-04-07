import { action, observable, runInAction } from "mobx";
import { AddItemForm } from '../forms'
import Axios from "axios";

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
                    const user = await Axios.post('http://localhost:3001/api/create/item', { name: values.name, categoryId: values.categoryId });
                    console.log('Success', user);
                } catch (error) {
                    this.form.invalidate(error.message);
                }
            },
            onError: (form) => {
                const values = form.values();
                console.log('Error', values);
            }
        })
    }

    @action.bound
    getCategories = async () => {
        const categories = await Axios.get('http://localhost:3001/api/get/categories');
        console.log('Success', categories);
        runInAction(() => {
            this.categories = categories;
        })
    }

    navigateDashboard = () => {
        this.rootStore.routerStore.goTo('dashboard');
    }
}

export default AddItemViewStore;