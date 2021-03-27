class LoginViewStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    navigateRegister = () => {
        this.rootStore.routerStore.goTo('register');
    }
}

export default LoginViewStore;