class AddItemViewStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    navigateDashboard = () => {
        this.rootStore.routerStore.goTo('dashboard');
    }
}

export default AddItemViewStore;