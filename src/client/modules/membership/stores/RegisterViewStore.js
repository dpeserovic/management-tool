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
                    const user = await Axios.post('http://localhost:3001/api/create/user', { email: values.email, password: values.password, companyId: values.companyId });
                    this.userForm.clear();
                    console.log('Success', user);
                    !user.data.errno ? this.rootStore.notificationStore.success('Success') : this.rootStore.notificationStore.error('Error');
                } catch (error) {
                    this.userForm.invalidate(error.message);
                    this.rootStore.notificationStore.error(error.message);
                }
            },
            onError: (userForm) => {
                const values = userForm.values();
                console.log('Error', values);
            }
        });

        this.companyForm = new RegisterCompanyForm({
            onSuccess: async (companyForm) => {
                const values = companyForm.values();
                console.log('Success', values);
                try {
                    const company = await Axios.post('http://localhost:3001/api/create/company', { id: values.id, email: values.email, password: values.password, name: values.name, address: values.address, city: values.city });
                    this.companyForm.clear();
                    console.log('Success', company);
                    !company.data.errno ? this.rootStore.notificationStore.success('Success') : this.rootStore.notificationStore.error('Error');
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