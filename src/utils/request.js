import axios from 'axios';

axios.defaults.timeout = 30000;
axios.defaults.baseURL = process.env.VUE_APP_BASE_URL

//http response 拦截器
axios.interceptors.response.use(function (response) {
    const res = response.data
    if (res.responseCode === 0) {
        return res
    }
})

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function fetch(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        }).then(response => {
            resolve(response);
        }).catch(err => {
            reject(err)
        })
    })
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.post(url, data).then(response => {
            resolve(response);
        }, err => {
            reject(err)
        })
    })
}

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function patch(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.patch(url, data).then(response => {
            resolve(response);
        }, err => {
            reject(err)
        })
    })
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function put(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.put(url, data).then(response => {
            resolve(response);
        }, err => {
            reject(err)
        })
    })
}

/**
 * delete
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
 export function deletefn(url, params) {
    return new Promise((resolve, reject) => {
        axios.delete(url, params).then(response => {
            resolve(response);
        }).catch(err => {
            reject(err.data)
        })
    });
}