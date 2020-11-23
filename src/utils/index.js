/* 常用方法封装 */
export function saveLocalStorage(name, data) { //localStorage 存储数组对象的方法
    localStorage.setItem(name, JSON.stringify(data))
}

export function getLocalStorage(name) { //localStorage 获取数组对象的方法
    return JSON.parse(window.localStorage.getItem(name));
}

export function saveSessionStorage(name, data) { //sessionStorage 存储数组对象的方法
    sessionStorage.setItem(name, JSON.stringify(data))
}

export function getSessionStorage(name) { //sessionStorage 获取数组对象的方法
    return JSON.parse(window.sessionStorage.getItem(name));
}