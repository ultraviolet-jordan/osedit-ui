import ApiService from '../ApiService';

const npcAPI = new ApiService("http://localhost:8080")

export const getAllNpcs = (searchData) => npcAPI.get('/npcs', { data: searchData }).then((response) => response.data)