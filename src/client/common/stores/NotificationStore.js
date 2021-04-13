import { toast } from "react-toastify";

class NotificationStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    success(message) {
        return showSuccessToast(message);
    }

    error(message) {
        return showErrorToast(message);
    }
}

function showSuccessToast(message) {
    return toast.success(message);
}

function showErrorToast(message) {
    return toast.error(message);
}

export default NotificationStore;