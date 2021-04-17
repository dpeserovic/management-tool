import { observable, action, runInAction } from 'mobx';
import { EditCategoryForm } from '../forms';
import Axios from 'axios';

class EditCategoryViewStore {
    @observable category;

    constructor(rootStore) {
        this.rootStore = rootStore;
        this.categoryId = this.rootStore.routerStore.router.routerState.params.id;
        this.form = new EditCategoryForm({
            onInit: async () => {
                await this.getCategory();
                this.form.set('value', { type: this.category.data[0].type })
            },
            onSuccess: async (form) => {
                const values = form.values();
                console.log('Success', values);
                try {
                    const editCategory = await Axios.post('http://localhost:3001/api/edit/category/' + this.categoryId, { type: values.type });
                    console.log('Success', editCategory);
                    !editCategory.data.errno ? this.rootStore.notificationStore.success('Success') : this.rootStore.notificationStore.error('Error');
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
    getCategory = async () => {
        const getCategory = await Axios.get('http://localhost:3001/api/get/category/' + this.categoryId);
        console.log('Success', getCategory);
        runInAction(() => {
            this.category = getCategory;
        })
    }

    navigateCreateCategory = () => {
        this.rootStore.routerStore.goTo('createCategory');
    }
}

export default EditCategoryViewStore;