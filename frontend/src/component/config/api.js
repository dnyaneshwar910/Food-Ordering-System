import axios from "axios"

export const API_URL = "http://localhost:8080";  // This should match your backend URL


export const api=axios.create({
    baseURL:API_URL,
    headers:{
        'Content-Type': 'application/json',
    }
})