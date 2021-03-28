import { LoginForm } from '../forms';
import Axios from 'axios';
class LoginViewStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.form = new LoginForm({
            onSuccess: async (form) => {
                const values = form.values();
                console.log('Success', values);
                try {
                    const users = await Axios.get('http://localhost:3001/api/get/users');
                } catch (e) {
                    this.form.invalidate(e.message);
                }
            },
            onError: (form) => {
                const values = form.values();
                console.log('Error', values);
            }
        })
    }

    navigateRegister = () => {
        this.rootStore.routerStore.goTo('register');
    }
}

export default LoginViewStore;