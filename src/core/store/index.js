class Store {
    constructor() {}

    async getItem(key) {
        let result = {};

        try {
            result = JSON.parse(localStorage.getItem(key));
        } catch (e) {}

        return result;
    }

    async setItem(key, value) {
        return localStorage.setItem(key, JSON.stringify(value));
    }
}

export default Store;