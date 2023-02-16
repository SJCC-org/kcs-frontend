export const getAccessToken = (key) => sessionStorage.getItem(key);
export const setAccessToken = (key, item) => sessionStorage.setItem(key, item);
