import { observable, action, runInAction } from 'mobx';
import { EditItemForm } from '../forms'
import Axios from 'axios';

class EditItemViewStore {
    @observable
    categories;
    @observable
    item;

    constructor(rootStore) {
        this.rootStore = rootStore;
        this.id = this.rootStore.routerStore.router.routerState.params.id;

        this.form = new EditItemForm({
            onInit: async () => {
                await this.getCategories();
                await this.getItem();
                this.form.set('value', { name: this.item.data[0].name, categoryId: this.item.data[0].categoryId })
            },
            onSuccess: async (form) => {
                const values = form.values();
                console.log('Success', values);
                try {
                    const editItem = await Axios.post('http://localhost:3001/api/edit/item/' + this.id, { name: values.name, categoryId: values.categoryId });
                    console.log('Success', editItem);
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
        const companyCategories = await Axios.get('http://localhost:3001/api/get/categories/' + this.rootStore.authStore.loggedInUser.id);
        console.log('Success', companyCategories);
        runInAction(() => {
            this.categories = companyCategories;
        })
    }

    @action.bound
    getItem = async () => {
        const item = await Axios.get('http://localhost:3001/api/get/item/' + this.id);
        console.log('Success', item);
        runInAction(() => {
            this.item = item;
        })
    }

    navigateVirtualWarehouse = () => {
        this.rootStore.routerStore.goTo('virtualWarehouse');
    }
}

export default EditItemViewStore;