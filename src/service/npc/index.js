import ApiService from '../ApiService';

const npcAPI = new ApiService("http://localhost:8080")

export const getAllNpcs = (searchData) => npcAPI.post('/npcs/search', { data: searchData }).then((response) => response.data)