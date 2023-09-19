import axios from "axios";

export const instance = axios.create({
    baseURL: 'http://13.236.119.94/',
})