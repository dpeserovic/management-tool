import { RegisterUserForm } from '../forms';
import { RegisterCompanyForm } from '../forms';
import Axios from 'axios';
class RegisterViewStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.userForm = new RegisterUserForm({
            onSuccess: async (form) => {
                const values = form.values();
                try {
                    const user = await Axios.post('http://localhost:3001/api/create/user', { email: values.email, password: values.password, companyId: values.companyId });
                } catch (error) {
                }
            },
            onError: (form) => {
            }
        })
        this.companyForm = new RegisterCompanyForm({
            onSuccess: async (form) => {
                const values = form.values();
                try {
                    const company = await Axios.post('http://localhost:3001/api/create/company', { id: values.id, email: values.email, password: values.password, name: values.name, address: values.address, city: values.city })
                } catch (error) {
                }
            },
            onError: (form) => {
            }
        })
    }

    navigateLogin = () => {
        this.rootStore.routerStore.goTo('login');
    }
}

export default RegisterViewStore;