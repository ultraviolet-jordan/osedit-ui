import axios from 'axios';

const BASE_URL = 'http://localhost:8080/npcs'

export const getAllNpcs = () => axios.get(BASE_URL).then((response) => response.data)