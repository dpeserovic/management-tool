import { LoginForm } from '../forms';

class LoginViewStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.form = new LoginForm({
            onSuccess: async (form) => {
                const values = form.values();
                try {
                    this.rootStore.authStore.logIn(values);
                } catch (error) {
                }
            },
            onError: (form) => {
            }
        })
    }

    navigateRegister = () => {
        this.rootStore.routerStore.goTo('register');
    }
}

export default LoginViewStore;