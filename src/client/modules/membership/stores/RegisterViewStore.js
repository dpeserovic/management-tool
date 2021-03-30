import { RegisterUserForm } from '../forms';
import { RegisterCompanyForm } from '../forms';
import Axios from 'axios';
class RegisterViewStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.userForm = new RegisterUserForm({
            onSuccess: async (form) => {
                const values = form.values();
                console.log('Success', values);
                try {
                    const companies = await Axios.get('http://localhost:3001/api/get/companies');
                    const isValidKey = companies.data.find(k => k.id === values.companyKey);
                    isValidKey && await Axios.post('http://localhost:3001/api/create/user', { email: values.email, password: values.password, companyKey: values.companyKey });
                } catch (e) {
                    this.userForm.invalidate(e.message);
                }
            },
            onError: (form) => {
                const values = form.values();
                console.log('Error', values);
            }
        })
        this.companyForm = new RegisterCompanyForm({
            onSuccess: async (form) => {
                const values = form.values();
                console.log('Success', values);
                try {
                    /*const companies = await Axios.get('http://localhost:3001/api/get/companies');
                    do {
                        key = Math.random().toString(36).slice(8);
                    } while (companies.data.includes(key))*/
                    const key = Math.random().toString(36).slice(8);
                    await Axios.post('http://localhost:3001/api/create/company', { key: key, email: values.email, password: values.password, companyName: values.companyName, companyAddress: values.companyAddress, companyCity: values.companyCity })
                } catch (e) {
                    this.companyForm.invalidate(e.message);
                }
            },
            onError: (form) => {
                const values = form.values();
                console.log('Error', values);
            }
        })
    }

    navigateLogin = () => {
        this.rootStore.routerStore.goTo('login');
    }
}

export default RegisterViewStore;