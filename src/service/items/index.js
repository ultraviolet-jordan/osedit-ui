import axios from 'axios';

const BASE_URL = 'http://localhost:8080/items'

export const getAllItems = () => axios.get(BASE_URL).then((response) => response.data)