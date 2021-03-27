import { RegisterUserForm } from '../forms';
import { RegisterCompanyForm } from '../forms';
class RegisterViewStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.userForm = new RegisterUserForm({
            onSuccess: async(form) => {
                const values = form.values();
                console.log('Success', values);
                try {

                } catch(e) {
                    this.form.invalidate(e.message);
                }
            },
            onError: (form) => {
                const values = form.values();
                console.log('Error', values);
            }
        })
        this.companyForm = new RegisterCompanyForm({
            onSuccess: async(form) => {
                const values = form.values();
                console.log('Success', values);
                try {

                } catch(e) {
                    this.form.invalidate(e.message);
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