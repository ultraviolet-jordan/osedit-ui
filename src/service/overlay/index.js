import ApiService from '../ApiService';

const overlayAPI = new ApiService("http://localhost:8080")

export const getAllOverlays = (searchData) => overlayAPI.get('/overlays').then((response) => response.data)