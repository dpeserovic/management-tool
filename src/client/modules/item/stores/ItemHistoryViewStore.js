import { observable, action, runInAction } from 'mobx';
import Axios from 'axios';

class ItemHistoryViewStore {
    @observable
    item;
    @observable
    category;
    @observable
    users;
    @observable
    logs;

    constructor(rootStore) {
        this.rootStore = rootStore;
        this.itemId = this.rootStore.routerStore.router.routerState.params.id;
        (async () => {
            const getItem = await Axios.get('http://localhost:3001/api/get/item/' + this.itemId);
            console.log('Success', getItem);
            runInAction(() => {
                this.item = getItem;
            })
            const getCategory = await Axios.get('http://localhost:3001/api/get/category/' + this.item.data[0].categoryId);
            console.log('Success', getCategory);
            runInAction(() => {
                this.category = getCategory;
            })
            const getUsers = await Axios.get('http://localhost:3001/api/get/users/' + this.rootStore.authStore.loggedInUser.id);
            console.log('Success', getUsers);
            runInAction(() => {
                this.users = getUsers;
            })
            const getLogs = await Axios.get('http://localhost:3001/api/get/logs/' + this.itemId);
            console.log('Success', getLogs);
            runInAction(() => {
                this.logs = getLogs;
            })
        })();
    }

    navigateVirtualWarehouse = () => {
        this.rootStore.routerStore.goTo('virtualWarehouse');
    }
}

export default ItemHistoryViewStore;