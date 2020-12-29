import ApiService from '../ApiService';

const npcAPI = new ApiService("http://localhost:8080")

export const viewMap = () => npcAPI.get('/maps/12598').then((response) => response.data)