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
                    const category = await Axios.post('http://localhost:3001/api/create/category', { type: values.type, companyId: this.rootStore.authStore.loggedInUser.id });
                    this.form.clear();
                    console.log('Success', category);
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

    navigateDashboard = () => {
        this.rootStore.routerStore.goTo('dashboard');
    }
}

export default CreateCategoryViewStore;