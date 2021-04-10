import { observable, action, runInAction } from 'mobx';
import { EditItemForm } from '../forms'
import Axios from 'axios';

class EditItemViewStore {
    // @observable
    // categories;
    // @observable
    // item;

    constructor(rootStore) {
        this.rootStore = rootStore;
        this.id = this.rootStore.routerStore.router.routerState.params.key;

        this.form = new EditItemForm({
            onSuccess: async (form) => {
                const values = form.values();
                console.log('Success', values);
                try {
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

    // @action.bound
    // getCategories = async () => {
    //     const companyCategories = await Axios.get('http://localhost:3001/api/get/categories/' + this.rootStore.authStore.loggedInUser.id);
    //     console.log('Success', companyCategories);
    //     runInAction(() => {
    //         this.categories = companyCategories;
    //     })
    // }

    // @action.bound
    // getItem = async () => {
    //     const item = await Axios.get('http://localhost:3001/api/get/item/' + this.id);
    //     console.log('Success', item);
    //     runInAction(() => {
    //         this.item = item;
    //     })
    // }

    navigateDashboard = () => {
        this.rootStore.routerStore.goTo('dashboard');
    }
}

export default EditItemViewStore;