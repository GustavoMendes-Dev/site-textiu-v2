import axios from "axios";

console.log(`${process.env.REACT_APP_BASE_API}`);

const GetToken = () => localStorage.getItem('access_token');

export const api = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_API}`,
    headers: {
        'Accept': 'application/json'
    }
});

export const apiAuthorization = () => axios.create({

    baseURL: `${process.env.REACT_APP_BASE_API}`,
    headers: {
        Authorization: `Bearer ${GetToken()}`,
        'Accept': 'application/json'
    }
});