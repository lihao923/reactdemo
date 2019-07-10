// 本地缓存对象封装
const storage = {
    set(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },

    get(key) {
        return JSON.parse(localStorage.getItem(key));
    },

    remove(key) {
        localStorage.removeItem(key);
    }
}

export default storage;
