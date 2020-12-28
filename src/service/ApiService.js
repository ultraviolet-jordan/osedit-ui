import axios from 'axios';

export default class ApiService {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    request(url, options) {
        const fetchOptions = {
            ...options,
            headers: {
                institutionuuid: this.institutionuuid
            }
        };

        return axios(`${this.baseURL}${url}`, fetchOptions);
    }

    get(url, options) {
        const getOptions = {
            ...options,
            method: 'GET'
        };
        return this.request(url, getOptions);
    }

    post(url, options) {
        const postOptions = {
            ...options,
            method: 'POST'
        };

        return this.request(url, postOptions);
    }

    put(url, options) {
        const putOptions = {
            ...options,
            method: 'PUT'
        };

        return this.request(url, putOptions);
    }

    delete(url, options) {
        const deleteOptions = {
            ...options,
            method: 'DELETE'
        };

        return this.request(url, deleteOptions);
    }

    getAxiosInstance() {
        return axios;
    }
}
