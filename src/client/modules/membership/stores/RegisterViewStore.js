class RegisterViewStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    navigateLogin = () => {
        this.rootStore.routerStore.goTo('login');
    }
}

export default RegisterViewStore;