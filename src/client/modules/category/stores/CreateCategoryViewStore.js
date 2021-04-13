import { CreateCategoryForm } from '../forms';
import Axios from 'axios';

class CreateCategoryViewStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.form = new CreateCategoryForm({
            onSuccess: async (form) => {
                const values = form.values();
                console.log('Success', values);
                try {
                    const createCategory = await Axios.post('http://localhost:3001/api/create/category', { type: values.type, companyId: this.rootStore.authStore.loggedInUser.id });
                    console.log('Success', createCategory);
                    if (!createCategory.data.errno) {
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

    navigateDashboard = () => {
        this.rootStore.routerStore.goTo('dashboard');
    }
}

export default CreateCategoryViewStore;