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
        this.itemId = this.rootStore.routerStore.router.routerState.params.id;
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
                    const editItem = await Axios.post('http://localhost:3001/api/edit/item/' + this.itemId, { name: values.name, categoryId: values.categoryId });
                    console.log('Success', editItem);
                    !editItem.data.errno ? this.rootStore.notificationStore.success('Success') : this.rootStore.notificationStore.error('Error');
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

    @action.bound
    getItem = async () => {
        const getItems = await Axios.get('http://localhost:3001/api/get/item/' + this.itemId);
        console.log('Success', getItems);
        runInAction(() => {
            this.item = getItems;
        })
    }

    navigateVirtualWarehouse = () => {
        this.rootStore.routerStore.goTo('virtualWarehouse');
    }
}

export default EditItemViewStore;