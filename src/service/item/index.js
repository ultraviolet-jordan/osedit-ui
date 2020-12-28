import ApiService from '../ApiService';

const api = new ApiService("http://localhost:8080")

export const getAllItems = api.get('/items').then((response) => response.data)