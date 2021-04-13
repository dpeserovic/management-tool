import { RegisterUserForm } from '../forms';
import { RegisterCompanyForm } from '../forms';
import Axios from 'axios';
class RegisterViewStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.userForm = new RegisterUserForm({
            onSuccess: async (userForm) => {
                const values = userForm.values();
                console.log('Success', values);
                try {
                    const createUser = await Axios.post('http://localhost:3001/api/create/user', { email: values.email, password: values.password, companyId: values.companyId });
                    console.log('Success', createUser);
                    if (!createUser.data.errno) {
                        this.rootStore.notificationStore.success('Success');
                        this.userForm.clear();
                    }
                    else {
                        this.rootStore.notificationStore.error('Error');
                    }
                }
                catch (error) {
                    this.userForm.invalidate(error.message);
                    this.rootStore.notificationStore.error(error.message);
                }
            },
            onError: (userForm) => {
                const values = userForm.values();
                console.log('Error', values);
                this.rootStore.notificationStore.error('Error');
            }
        });
        this.companyForm = new RegisterCompanyForm({
            onSuccess: async (companyForm) => {
                const values = companyForm.values();
                console.log('Success', values);
                try {
                    const createCompany = await Axios.post('http://localhost:3001/api/create/company', { id: values.id, email: values.email, password: values.password, name: values.name, address: values.address, city: values.city });
                    console.log('Success', createCompany);
                    if (!createCompany.data.errno) {
                        this.rootStore.notificationStore.success('Success');
                        this.companyForm.clear();
                    }
                    else {
                        this.rootStore.notificationStore.error('Error');
                    }
                } catch (error) {
                    this.companyForm.invalidate(error.message);
                    this.rootStore.notificationStore.error(error.message);
                }
            },
            onError: (companyForm) => {
                const values = companyForm.values();
                console.log('Error', values);
                this.rootStore.notificationStore.error('Error');
            }
        });
    }

    navigateLogin = () => {
        this.rootStore.routerStore.goTo('login');
    }
}

export default RegisterViewStore;